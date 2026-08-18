import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
    createD4Geometry,
    createD6Geometry,
    createD8Geometry,
    createD10Geometry,
    createD12Geometry,
    createD20Geometry,
} from './dice-geometries';
import {
    getRestingOrientationForFace,
    getUpwardFaceForOrientation,
    generateTimeReversalTrajectory,
    generateMultiDiceTrajectories,
    relaxRestingPositions,
} from './dice-physics';

describe('time-reversal dice physics generator', () => {
    it('accurately aligns all 4 apexes of D4 to world UP at rest', () => {
        const d4 = createD4Geometry(1.0);
        const targetUp = new THREE.Vector3(0, 1, 0);

        for (let apex = 1; apex <= 4; apex++) {
            const quat = getRestingOrientationForFace(d4, apex);
            const localNormal = d4.faceNormals.get(apex)!.clone();
            const worldNormal = localNormal.applyQuaternion(quat);

            expect(worldNormal.dot(targetUp)).toBeCloseTo(1.0, 4);
        }
    });

    it('accurately aligns all 20 faces of D20 to world UP at rest', () => {
        const d20 = createD20Geometry(1.0);
        const targetUp = new THREE.Vector3(0, 1, 0);

        for (let face = 1; face <= 20; face++) {
            const quat = getRestingOrientationForFace(d20, face);
            const localNormal = d20.faceNormals.get(face)!.clone();

            // Rotate local normal by resting orientation
            const worldNormal = localNormal.applyQuaternion(quat);

            expect(worldNormal.dot(targetUp)).toBeCloseTo(1.0, 4);
        }
    });

    it('accurately aligns all 6 faces of D6 to world UP at rest', () => {
        const d6 = createD6Geometry(1.0);
        const targetUp = new THREE.Vector3(0, 1, 0);

        for (let face = 1; face <= 6; face++) {
            const quat = getRestingOrientationForFace(d6, face);
            const localNormal = d6.faceNormals.get(face)!.clone();
            const worldNormal = localNormal.applyQuaternion(quat);

            expect(worldNormal.dot(targetUp)).toBeCloseTo(1.0, 4);
        }
    });

    it('generates a valid inverted trajectory ending on the target resting face', () => {
        const d20 = createD20Geometry(1.0);
        const trajectory = generateTimeReversalTrajectory({
            die: d20,
            targetResult: 18,
            restingPosition: { x: 2, y: 1.0, z: -1 },
            durationSeconds: 1.0,
        });

        expect(trajectory.sides).toBe(20);
        expect(trajectory.targetResult).toBe(18);
        expect(trajectory.keyframes.length).toBeGreaterThan(30);

        // Initial frame starts far horizontally across the table surface
        const firstFrame = trajectory.keyframes[0];
        const horizontalTravel = Math.hypot(firstFrame.position[0] - 2, firstFrame.position[2] - (-1));
        expect(horizontalTravel).toBeGreaterThan(4.0);
        expect(firstFrame.position[1]).toBeGreaterThan(0.5); // Stays on/near table surface

        // Final frame lands at exact resting position flush on the table surface
        const lastFrame = trajectory.keyframes[trajectory.keyframes.length - 1];
        expect(lastFrame.position[0]).toBeCloseTo(2.0, 2);
        expect(lastFrame.position[1]).toBeCloseTo(0.795, 2); // Exact D20 inradius resting height
        expect(lastFrame.position[2]).toBeCloseTo(-1.0, 2);

        // Final frame orientation points target face 18 straight UP with precision
        const finalQuat = new THREE.Quaternion(
            lastFrame.quaternion[0],
            lastFrame.quaternion[1],
            lastFrame.quaternion[2],
            lastFrame.quaternion[3],
        );
        const localNormal = d20.faceNormals.get(18)!.clone();
        const worldNormal = localNormal.applyQuaternion(finalQuat);
        expect(worldNormal.dot(new THREE.Vector3(0, 1, 0))).toBeCloseTo(1.0, 4);
    });

    it('simulates multiple dice with physical collisions and accurate target results', () => {
        const d20 = createD20Geometry(1.0);
        const d6 = createD6Geometry(1.0);
        const d4 = createD4Geometry(1.0);

        const trajectories = generateMultiDiceTrajectories({
            items: [
                { die: d20, targetResult: 20 },
                { die: d6, targetResult: 6 },
                { die: d4, targetResult: 3 },
            ],
            durationSeconds: 1.2,
        });

        expect(trajectories.length).toBe(3);
        expect(trajectories[0].targetResult).toBe(20);
        expect(trajectories[1].targetResult).toBe(6);
        expect(trajectories[2].targetResult).toBe(3);

        // Verify die 1 lands on 20
        const d20LastFrame = trajectories[0].keyframes[trajectories[0].keyframes.length - 1];
        const d20Quat = new THREE.Quaternion(...d20LastFrame.quaternion);
        const d20Normal = d20.faceNormals.get(20)!.clone().applyQuaternion(d20Quat);
        expect(d20Normal.dot(new THREE.Vector3(0, 1, 0))).toBeCloseTo(1.0, 4);

        // Verify die 2 lands on 6
        const d6LastFrame = trajectories[1].keyframes[trajectories[1].keyframes.length - 1];
        const d6Quat = new THREE.Quaternion(...d6LastFrame.quaternion);
        const d6Normal = d6.faceNormals.get(6)!.clone().applyQuaternion(d6Quat);
        expect(d6Normal.dot(new THREE.Vector3(0, 1, 0))).toBeCloseTo(1.0, 4);

        // Verify die 3 (D4) lands with apex 3 pointing straight UP
        const d4LastFrame = trajectories[2].keyframes[trajectories[2].keyframes.length - 1];
        const d4Quat = new THREE.Quaternion(...d4LastFrame.quaternion);
        const d4Apex = d4.faceNormals.get(3)!.clone().applyQuaternion(d4Quat);
        expect(d4Apex.dot(new THREE.Vector3(0, 1, 0))).toBeCloseTo(1.0, 4);
    });

    it('guarantees target face is face up across all polyhedral dice types (D4, D6, D8, D10, D12, D20)', () => {
        const d4 = createD4Geometry(1.0);
        const d6 = createD6Geometry(1.0);
        const d8 = createD8Geometry(1.0);
        const d10 = createD10Geometry(1.0);
        const d12 = createD12Geometry(1.0);
        const d20 = createD20Geometry(1.0);

        const testItems = [
            { die: d4, targetResult: 2 },
            { die: d6, targetResult: 5 },
            { die: d8, targetResult: 7 },
            { die: d10, targetResult: 9 },
            { die: d12, targetResult: 11 },
            { die: d20, targetResult: 19 },
        ];

        const trajectories = generateMultiDiceTrajectories({
            items: testItems,
            durationSeconds: 1.0,
            seed: 'multi-polyhedral-test',
        });

        for (let i = 0; i < trajectories.length; i++) {
            const traj = trajectories[i];
            const item = testItems[i];
            const lastFrame = traj.keyframes[traj.keyframes.length - 1];
            const q = new THREE.Quaternion(...lastFrame.quaternion);

            const upward = getUpwardFaceForOrientation(item.die, q);
            expect(upward.face).toBe(item.targetResult);
            expect(upward.dot).toBeCloseTo(1.0, 4);
        }
    });

    it('relaxes overlapping resting positions to guarantee physical clearance', () => {
        const overlapping = [
            { x: 0, z: 0, radius: 1.0 },
            { x: 0.1, z: 0.1, radius: 1.0 },
            { x: 0.2, z: 0, radius: 1.0 },
        ];

        const relaxed = relaxRestingPositions(overlapping, 40);
        expect(relaxed.length).toBe(3);

        for (let i = 0; i < relaxed.length; i++) {
            for (let j = i + 1; j < relaxed.length; j++) {
                const dist = Math.hypot(relaxed[i].x - relaxed[j].x, relaxed[i].z - relaxed[j].z);
                expect(dist).toBeGreaterThanOrEqual(1.8);
            }
        }
    });

    it('bounds simultaneous dice generation to MAX_3D_DICE', () => {
        const d6 = createD6Geometry(1.0);
        // Create 50 items
        const items = Array.from({ length: 50 }, () => ({ die: d6, targetResult: 4 }));
        const trajectories = generateMultiDiceTrajectories({
            items,
            durationSeconds: 0.5,
        });

        expect(trajectories.length).toBe(32);
    });

    it('produces 100% deterministic trajectories when given the same seed', () => {
        const d20 = createD20Geometry(1.0);
        const options = {
            items: [
                { die: d20, targetResult: 20 },
                { die: d20, targetResult: 1 },
            ],
            durationSeconds: 1.0,
            seed: 'roll-uuid-abc-123',
        };

        const run1 = generateMultiDiceTrajectories(options);
        const run2 = generateMultiDiceTrajectories(options);

        expect(run1).toEqual(run2);

        // Different seed produces different initial toss angles
        const run3 = generateMultiDiceTrajectories({
            ...options,
            seed: 'roll-uuid-xyz-999',
        });
        expect(run1[0].keyframes[0].position).not.toEqual(run3[0].keyframes[0].position);
    });
});
