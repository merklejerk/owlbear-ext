import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { type DieDefinition } from './dice-geometries';
import { createCannonConvexPolyhedron } from './dice-cannon-shapes';

export const MAX_3D_DICE = 32;

/**
 * Mulberry32 32-bit seeded pseudo-random number generator.
 * Produces deterministic floating-point numbers in [0, 1).
 */
export function createMulberry32(seed: number): () => number {
    let s = seed >>> 0;
    return () => {
        s = (s + 0x6d2b79f5) >>> 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/**
 * Generates a deterministic 32-bit unsigned integer hash from a string or number.
 */
export function hashStringToSeed(input?: string | number | null): number {
    if (typeof input === 'number') return (input >>> 0);
    if (!input) return 1337;
    let hash = 0x811c9dc5;
    for (let i = 0; i < input.length; i++) {
        hash ^= input.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return hash >>> 0;
}

export interface DiceKeyframe {
    position: [number, number, number];
    quaternion: [number, number, number, number];
    time: number;
}

export interface DiceTrajectory {
    sides: number;
    targetResult: number;
    keyframes: DiceKeyframe[];
    duration: number;
}

export interface TrajectoryOptions {
    die: DieDefinition;
    targetResult: number;
    restingPosition?: { x: number; y: number; z: number };
    throwAngleRadians?: number;
    durationSeconds?: number;
    stepDt?: number;
    seed?: number | string | null;
}

export interface MultiDiceRollItem {
    die: DieDefinition;
    targetResult: number;
    restingPosition?: { x: number; y: number; z: number };
}

export interface MultiDiceOptions {
    items: MultiDiceRollItem[];
    durationSeconds?: number;
    stepDt?: number;
    seed?: number | string | null;
}

/**
 * Calculates the orientation quaternion that aligns a local face normal with the world UP vector (0, 1, 0).
 */
export function getRestingOrientationForFace(
    die: DieDefinition,
    targetResult: number,
): THREE.Quaternion {
    const normal = die.faceNormals.get(targetResult);
    if (!normal) {
        throw new Error(`Face normal not found for result ${targetResult} on d${die.sides}`);
    }
    const targetUp = new THREE.Vector3(0, 1, 0);
    return new THREE.Quaternion().setFromUnitVectors(normal, targetUp);
}

/**
 * Finds which die face is pointing most upward (+Y) for a given world orientation quaternion.
 */
export function getUpwardFaceForOrientation(
    die: DieDefinition,
    worldQuat: THREE.Quaternion,
): { face: number; normal: THREE.Vector3; dot: number } {
    let bestFace = die.faceValues[0];
    let maxDot = -Infinity;
    let bestNormal = new THREE.Vector3(0, 1, 0);
    const up = new THREE.Vector3(0, 1, 0);

    for (const [face, normal] of die.faceNormals) {
        const worldNormal = normal.clone().applyQuaternion(worldQuat);
        const dot = worldNormal.dot(up);
        if (dot > maxDot) {
            maxDot = dot;
            bestFace = face;
            bestNormal = normal;
        }
    }
    return { face: bestFace, normal: bestNormal, dot: maxDot };
}

/**
 * Iterative physics relaxation solver to prevent any two dice from overlapping at rest.
 */
export function relaxRestingPositions(
    items: Array<{ x: number; z: number; radius: number }>,
    iterations: number = 30,
): Array<{ x: number; z: number }> {
    const positions = items.map(it => ({ x: it.x, z: it.z, radius: it.radius }));
    const count = positions.length;

    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const a = positions[i];
                const b = positions[j];
                let dx = b.x - a.x;
                let dz = b.z - a.z;
                let dist = Math.hypot(dx, dz);
                const minDist = (a.radius + b.radius) * 1.30; // 30% margin beyond bounding radii

                if (dist < 0.001) {
                    dx = Math.cos(i * 1.5 + j) * 0.1;
                    dz = Math.sin(i * 1.5 + j) * 0.1;
                    dist = Math.hypot(dx, dz);
                }

                if (dist < minDist) {
                    const overlap = minDist - dist;
                    const nx = dx / dist;
                    const nz = dz / dist;
                    const shift = overlap * 0.5;

                    a.x -= nx * shift;
                    a.z -= nz * shift;
                    b.x += nx * shift;
                    b.z += nz * shift;
                }
            }
        }
    }

    return positions.map(p => ({ x: p.x, z: p.z }));
}

/**
 * Simulates multiple dice in a shared Cannon.js world so they physically collide with each other
 * and the tabletop, while guaranteeing each die naturally settles on its exact target result with zero overlap.
 * Completely deterministic when a seed is provided.
 */
export function generateMultiDiceTrajectories(options: MultiDiceOptions): DiceTrajectory[] {
    const {
        items,
        durationSeconds = 1.35,
        stepDt = 1 / 60,
        seed,
    } = options;

    if (!items.length) return [];

    // Enforce hard ceiling on maximum simultaneous 3D physics dice
    const clampedItems = items.slice(0, MAX_3D_DICE);

    const seedNum = typeof seed === 'number' ? seed : hashStringToSeed(seed);
    const rng = seed !== undefined ? createMulberry32(seedNum) : Math.random;

    // Relax all requested resting positions so no dice overlap
    const relaxedPositions = relaxRestingPositions(
        clampedItems.map(it => ({
            x: it.restingPosition?.x ?? 0,
            z: it.restingPosition?.z ?? 0,
            radius: it.die.radius,
        })),
    );

    // Setup shared Cannon physics world
    const world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -32.0, 0),
    });

    // Floor table plane
    const floorBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Plane(),
    });
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.addBody(floorBody);

    const diceBodies: Array<{
        body: CANNON.Body;
        die: DieDefinition;
        targetResult: number;
        relaxedRestingPos: { x: number; y: number; z: number };
    }> = [];

    // Table contact material
    const tableMat = new CANNON.Material('table');
    const dieMat = new CANNON.Material('die');
    world.addContactMaterial(
        new CANNON.ContactMaterial(tableMat, dieMat, { friction: 0.5, restitution: 0.35 }),
    );
    // Die-to-die collision contact material (bouncy clatter)
    world.addContactMaterial(
        new CANNON.ContactMaterial(dieMat, dieMat, { friction: 0.35, restitution: 0.6 }),
    );

    floorBody.material = tableMat;

    const count = clampedItems.length;
    for (let i = 0; i < count; i++) {
        const item = clampedItems[i];
        const targetPos = relaxedPositions[i];
        const shape = createCannonConvexPolyhedron(item.die.geometry);

        // Toss angles converging towards target resting position
        const baseAngle = (i / Math.max(1, count)) * Math.PI * 2 + (rng() - 0.5) * 0.4;
        const throwDist = 14.0 + rng() * 2.5;
        const startX = targetPos.x - Math.cos(baseAngle) * throwDist;
        const startZ = targetPos.z - Math.sin(baseAngle) * throwDist;
        const startY = item.die.radius + 1.2 + (i * 0.3); // Stagger height slightly so they don't spawn overlapping

        const initialQuat = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(rng() * Math.PI * 2, rng() * Math.PI * 2, rng() * Math.PI * 2),
        );

        const dieBody = new CANNON.Body({
            mass: 1.0,
            shape,
            position: new CANNON.Vec3(startX, startY, startZ),
            quaternion: new CANNON.Quaternion(initialQuat.x, initialQuat.y, initialQuat.z, initialQuat.w),
            material: dieMat,
            linearDamping: 0.16,
            angularDamping: 0.20,
        });

        // Throw impulse towards resting position
        const throwSpeed = 15.5 + rng() * 2.5;
        const velX = Math.cos(baseAngle) * throwSpeed + (rng() - 0.5) * 2.5;
        const velZ = Math.sin(baseAngle) * throwSpeed + (rng() - 0.5) * 2.5;
        const velY = 2.5 + rng() * 1.5;

        // Angular spin
        const spinSpeed = 20.0 + rng() * 6.0;
        const spinX = -Math.sin(baseAngle) * spinSpeed + (rng() - 0.5) * 4.0;
        const spinY = (rng() - 0.5) * 6.0;
        const spinZ = Math.cos(baseAngle) * spinSpeed + (rng() - 0.5) * 4.0;

        dieBody.velocity.set(velX, velY, velZ);
        dieBody.angularVelocity.set(spinX, spinY, spinZ);

        world.addBody(dieBody);
        diceBodies.push({
            body: dieBody,
            die: item.die,
            targetResult: item.targetResult,
            relaxedRestingPos: { x: targetPos.x, y: item.die.radius, z: targetPos.z },
        });
    }

    // Step physics forward until all dice naturally settle
    const simulationSteps = 110;
    const allRawFrames: Array<Array<{ pos: THREE.Vector3; quat: THREE.Quaternion }>> = diceBodies.map(() => []);

    for (let step = 0; step < simulationSteps; step++) {
        for (let d = 0; d < diceBodies.length; d++) {
            const b = diceBodies[d].body;
            allRawFrames[d].push({
                pos: new THREE.Vector3(b.position.x, b.position.y, b.position.z),
                quat: new THREE.Quaternion(b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w),
            });
        }
        world.step(stepDt);
    }

    const outputSteps = Math.max(30, Math.floor(durationSeconds / stepDt));
    const trajectories: DiceTrajectory[] = [];

    // Process each die's trajectory and align with its target result
    for (let d = 0; d < diceBodies.length; d++) {
        const { die, targetResult, relaxedRestingPos } = diceBodies[d];
        const rawFrames = allRawFrames[d];

        const finalRawQuat = rawFrames[rawFrames.length - 1].quat;
        const landed = getUpwardFaceForOrientation(die, finalRawQuat);

        const targetNormal = die.faceNormals.get(targetResult);
        if (!targetNormal) {
            throw new Error(`Face normal not found for target result ${targetResult}`);
        }

        const localDelta = new THREE.Quaternion().setFromUnitVectors(targetNormal, landed.normal);

        // Raw terminal orientation with delta
        const qBaseEnd = finalRawQuat.clone().multiply(localDelta);
        const currentWorldNormal = targetNormal.clone().applyQuaternion(qBaseEnd);
        const upVector = new THREE.Vector3(0, 1, 0);

        // Correction quaternion that strictly aligns target face normal with world UP (0, 1, 0)
        const qCorrection = new THREE.Quaternion().setFromUnitVectors(currentWorldNormal, upVector);
        const qPerfect = qCorrection.clone().multiply(qBaseEnd);
        const qIdentity = new THREE.Quaternion();

        // Calculate exact resting center height so die base rests precisely flush on the table (Y = 0)
        let minY = Infinity;
        const posAttr = die.geometry.getAttribute('position');
        const tempV = new THREE.Vector3();
        for (let v = 0; v < posAttr.count; v++) {
            tempV.fromBufferAttribute(posAttr, v).applyQuaternion(qPerfect);
            if (tempV.y < minY) {
                minY = tempV.y;
            }
        }
        const perfectRestingY = Math.max(0.05, -minY);

        // Position offset aligning with relaxed non-overlapping target position
        const finalRawPos = rawFrames[rawFrames.length - 1].pos;
        const posOffset = new THREE.Vector3(
            relaxedRestingPos.x - finalRawPos.x,
            perfectRestingY - finalRawPos.y,
            relaxedRestingPos.z - finalRawPos.z,
        );

        const finalFrames: DiceKeyframe[] = [];
        for (let i = 0; i <= outputSteps; i++) {
            const progress = i / outputSteps;
            const rawIdx = progress * (rawFrames.length - 1);
            const idx0 = Math.floor(rawIdx);
            const idx1 = Math.min(rawFrames.length - 1, idx0 + 1);
            const alpha = rawIdx - idx0;

            const f0 = rawFrames[idx0];
            const f1 = rawFrames[idx1];

            const p = new THREE.Vector3().lerpVectors(f0.pos, f1.pos, alpha).add(posOffset);

            // Base orientation along physics trajectory
            const qBase = new THREE.Quaternion().slerpQuaternions(f0.quat, f1.quat, alpha).multiply(localDelta);

            // Smoothly blend level alignment during final settle phase (last 35% of trajectory)
            let q: THREE.Quaternion;
            if (progress < 0.65) {
                q = qBase;
            } else {
                const u = (progress - 0.65) / 0.35;
                const blend = u * u * (3 - 2 * u); // smoothstep
                const currentCorrection = new THREE.Quaternion().slerpQuaternions(qIdentity, qCorrection, blend);
                q = currentCorrection.multiply(qBase);
            }

            finalFrames.push({
                position: [p.x, p.y, p.z],
                quaternion: [q.x, q.y, q.z, q.w],
                time: i * stepDt,
            });
        }

        trajectories.push({
            sides: die.sides,
            targetResult,
            keyframes: finalFrames,
            duration: durationSeconds,
        });
    }

    return trajectories;
}

/**
 * Single-die helper forwarding to generateMultiDiceTrajectories.
 */
export function generateTimeReversalTrajectory(options: TrajectoryOptions): DiceTrajectory {
    const trajectories = generateMultiDiceTrajectories({
        items: [{
            die: options.die,
            targetResult: options.targetResult,
            restingPosition: options.restingPosition,
        }],
        durationSeconds: options.durationSeconds,
        stepDt: options.stepDt,
        seed: options.seed,
    });
    return trajectories[0];
}
