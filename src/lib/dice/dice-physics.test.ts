import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { createD20Geometry, createD6Geometry } from './dice-geometries';
import {
    getRestingOrientationForFace,
    generateTimeReversalTrajectory,
    generateMultiDiceTrajectories,
    relaxRestingPositions,
} from './dice-physics';

describe('time-reversal dice physics generator', () => {
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

        // Final frame lands at exact resting position
        const lastFrame = trajectory.keyframes[trajectory.keyframes.length - 1];
        expect(lastFrame.position[0]).toBeCloseTo(2.0, 2);
        expect(lastFrame.position[1]).toBeCloseTo(1.0, 2);
        expect(lastFrame.position[2]).toBeCloseTo(-1.0, 2);

        // Final frame orientation points target face 18 straight UP
        const finalQuat = new THREE.Quaternion(
            lastFrame.quaternion[0],
            lastFrame.quaternion[1],
            lastFrame.quaternion[2],
            lastFrame.quaternion[3],
        );
        const localNormal = d20.faceNormals.get(18)!.clone();
        const worldNormal = localNormal.applyQuaternion(finalQuat);
        expect(worldNormal.dot(new THREE.Vector3(0, 1, 0))).toBeGreaterThan(0.80);
    });

    it('simulates multiple dice with physical collisions and accurate target results', () => {
        const d20 = createD20Geometry(1.0);
        const d6 = createD6Geometry(1.0);

        const trajectories = generateMultiDiceTrajectories({
            items: [
                { die: d20, targetResult: 20 },
                { die: d6, targetResult: 6 },
            ],
            durationSeconds: 1.2,
        });

        expect(trajectories.length).toBe(2);
        expect(trajectories[0].targetResult).toBe(20);
        expect(trajectories[1].targetResult).toBe(6);

        // Verify die 1 lands on 20
        const d20LastFrame = trajectories[0].keyframes[trajectories[0].keyframes.length - 1];
        const d20Quat = new THREE.Quaternion(...d20LastFrame.quaternion);
        const d20Normal = d20.faceNormals.get(20)!.clone().applyQuaternion(d20Quat);
        expect(d20Normal.dot(new THREE.Vector3(0, 1, 0))).toBeGreaterThan(0.70);

        // Verify die 2 lands on 6
        const d6LastFrame = trajectories[1].keyframes[trajectories[1].keyframes.length - 1];
        const d6Quat = new THREE.Quaternion(...d6LastFrame.quaternion);
        const d6Normal = d6.faceNormals.get(6)!.clone().applyQuaternion(d6Quat);
        expect(d6Normal.dot(new THREE.Vector3(0, 1, 0))).toBeGreaterThan(0.70);
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
});
