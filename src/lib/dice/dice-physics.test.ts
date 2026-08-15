import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { createD20Geometry, createD6Geometry } from './dice-geometries';
import {
    getRestingOrientationForFace,
    generateTimeReversalTrajectory,
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

        // Initial frame is thrown high in the air
        const firstFrame = trajectory.keyframes[0];
        expect(firstFrame.position[1]).toBeGreaterThan(1.0);

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
        expect(worldNormal.dot(new THREE.Vector3(0, 1, 0))).toBeCloseTo(1.0, 4);
    });
});
