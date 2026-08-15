import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { type DieDefinition } from './dice-geometries';
import { createCannonConvexPolyhedron } from './dice-cannon-shapes';

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
 * Generates a physically realistic 3D dice trajectory using time-reversal simulation in Cannon.js.
 * Guarantees the die comes to rest exactly on the target result face, with omnidirectional throws
 * and natural damped edge settling/micro-wobble.
 */
export function generateTimeReversalTrajectory(options: TrajectoryOptions): DiceTrajectory {
    const {
        die,
        targetResult,
        restingPosition = { x: 0, y: die.radius, z: 0 },
        throwAngleRadians = Math.random() * Math.PI * 2,
        durationSeconds = 1.25,
        stepDt = 1 / 60,
    } = options;

    const restingQuat = getRestingOrientationForFace(die, targetResult);

    // Setup headless Cannon simulation world
    const world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -20.0, 0),
    });

    // Floor table plane (normal pointing +Y)
    const floorBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Plane(),
    });
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.addBody(floorBody);

    // Convex collision hull for the die
    const shape = createCannonConvexPolyhedron(die.geometry);
    const dieBody = new CANNON.Body({
        mass: 1.0,
        shape,
        position: new CANNON.Vec3(restingPosition.x, restingPosition.y, restingPosition.z),
        quaternion: new CANNON.Quaternion(restingQuat.x, restingQuat.y, restingQuat.z, restingQuat.w),
        linearDamping: 0.08,
        angularDamping: 0.08,
    });
    world.addBody(dieBody);

    // Contact material for tabletop bounciness & friction
    const contactMat = new CANNON.ContactMaterial(
        new CANNON.Material({ friction: 0.4, restitution: 0.55 }),
        new CANNON.Material({ friction: 0.4, restitution: 0.55 }),
        { friction: 0.4, restitution: 0.5 },
    );
    world.addContactMaterial(contactMat);

    // Apply omnidirectional reverse launch impulse
    const randRange = (min: number, max: number) => min + Math.random() * (max - min);
    const speed = randRange(11.0, 16.0);
    const kickX = Math.cos(throwAngleRadians) * speed;
    const kickZ = Math.sin(throwAngleRadians) * speed;
    const kickY = randRange(12.0, 16.5);

    const torqueX = randRange(-16.0, 16.0);
    const torqueY = randRange(-16.0, 16.0);
    const torqueZ = randRange(-16.0, 16.0);

    dieBody.velocity.set(kickX, kickY, kickZ);
    dieBody.angularVelocity.set(torqueX, torqueY, torqueZ);

    const totalSteps = Math.max(30, Math.floor(durationSeconds / stepDt));
    const recordedFrames: DiceKeyframe[] = [];

    // First frame is the exact resting target state
    recordedFrames.push({
        position: [dieBody.position.x, dieBody.position.y, dieBody.position.z],
        quaternion: [dieBody.quaternion.x, dieBody.quaternion.y, dieBody.quaternion.z, dieBody.quaternion.w],
        time: 0,
    });

    for (let step = 1; step <= totalSteps; step++) {
        world.step(stepDt);
        recordedFrames.push({
            position: [dieBody.position.x, dieBody.position.y, dieBody.position.z],
            quaternion: [dieBody.quaternion.x, dieBody.quaternion.y, dieBody.quaternion.z, dieBody.quaternion.w],
            time: step * stepDt,
        });
    }

    // Invert the timeline: now frame 0 is throw, last frame is landing
    recordedFrames.reverse();

    // Apply realistic micro-wobble settling in the final 0.3s of forward playback
    const settleFramesCount = Math.min(20, Math.floor(0.3 / stepDt));
    const wobbleAxisAngle = Math.random() * Math.PI * 2;
    const wobbleAxis = new THREE.Vector3(Math.cos(wobbleAxisAngle), 0, Math.sin(wobbleAxisAngle)).normalize();
    const finalQuat = new THREE.Quaternion(restingQuat.x, restingQuat.y, restingQuat.z, restingQuat.w);

    const finalFrames: DiceKeyframe[] = recordedFrames.map((frame, idx) => {
        const remaining = recordedFrames.length - 1 - idx;
        let [px, py, pz] = frame.position;
        let q = new THREE.Quaternion(frame.quaternion[0], frame.quaternion[1], frame.quaternion[2], frame.quaternion[3]);

        if (remaining <= settleFramesCount && remaining > 0) {
            const u = 1 - remaining / settleFramesCount; // 0 to 1
            const decay = Math.pow(1 - u, 2.2);
            const angle = decay * 0.28 * Math.sin(u * Math.PI * 3.5);
            const hop = decay * 0.12 * Math.abs(Math.sin(u * Math.PI * 3.5));

            py = restingPosition.y + hop;
            const wobbleQuat = new THREE.Quaternion().setFromAxisAngle(wobbleAxis, angle);
            q.multiplyQuaternions(wobbleQuat, finalQuat);
        } else if (remaining === 0) {
            px = restingPosition.x;
            py = restingPosition.y;
            pz = restingPosition.z;
            q.copy(finalQuat);
        }

        return {
            position: [px, py, pz],
            quaternion: [q.x, q.y, q.z, q.w],
            time: idx * stepDt,
        };
    });

    return {
        sides: die.sides,
        targetResult,
        keyframes: finalFrames,
        duration: durationSeconds,
    };
}
