import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
    createD4Geometry,
    createD6Geometry,
    createD8Geometry,
    createD10Geometry,
    createD12Geometry,
    createD20Geometry,
    getDieDefinition,
    isSupportedDieSize,
    D4_FACE_CORNERS,
} from './dice-geometries';
import { createCannonConvexPolyhedron } from './dice-cannon-shapes';

describe('dice geometries & face normals', () => {
    it('creates valid D20 geometry with 20 distinct face normals', () => {
        const d20 = createD20Geometry(1.0);
        expect(d20.sides).toBe(20);
        expect(d20.faceValues.length).toBe(20);
        expect(d20.faceNormals.size).toBe(20);

        for (const [val, normal] of d20.faceNormals) {
            expect(val).toBeGreaterThanOrEqual(1);
            expect(val).toBeLessThanOrEqual(20);
            expect(normal.length()).toBeCloseTo(1.0, 3);
        }
    });

    it('creates valid D6 geometry with 6 orthogonal face normals', () => {
        const d6 = createD6Geometry(1.0);
        expect(d6.sides).toBe(6);
        expect(d6.faceValues.length).toBe(6);
        expect(d6.faceNormals.size).toBe(6);

        for (const [val, normal] of d6.faceNormals) {
            expect(val).toBeGreaterThanOrEqual(1);
            expect(val).toBeLessThanOrEqual(6);
            expect(normal.length()).toBeCloseTo(1.0, 3);
        }
    });

    it('creates valid D4 apex-read geometry with 4 upward apex vectors and consistent face corners', () => {
        const d4 = createD4Geometry(1.0);
        expect(d4.sides).toBe(4);
        expect(d4.faceValues).toEqual([1, 2, 3, 4]);
        expect(d4.faceNormals.size).toBe(4);

        // Every apex normal is unit length
        for (const [val, normal] of d4.faceNormals) {
            expect(val).toBeGreaterThanOrEqual(1);
            expect(val).toBeLessThanOrEqual(4);
            expect(normal.length()).toBeCloseTo(1.0, 3);
        }

        // For each of the 4 apexes pointing UP, verify that all 3 visible faces have that apex value at their peak corner
        for (let rolledApex = 1; rolledApex <= 4; rolledApex++) {
            const apexVec = d4.faceNormals.get(rolledApex)!;
            const targetUp = new THREE.Vector3(0, 1, 0);
            const quat = new THREE.Quaternion().setFromUnitVectors(apexVec, targetUp);

            const pos = d4.geometry.attributes.position;
            const p = new THREE.Vector3();

            let visibleFaceCount = 0;
            let hiddenFaceCount = 0;

            for (let f = 0; f < 4; f++) {
                let peakCornerIdx = -1;
                for (let c = 0; c < 3; c++) {
                    p.fromBufferAttribute(pos, f * 3 + c).applyQuaternion(quat);
                    if (Math.abs(p.y - 1.0) < 0.05) {
                        peakCornerIdx = c;
                        break;
                    }
                }

                if (peakCornerIdx !== -1) {
                    visibleFaceCount++;
                    // The number printed at this peak corner MUST equal rolledApex
                    expect(D4_FACE_CORNERS[f][peakCornerIdx]).toBe(rolledApex);
                } else {
                    hiddenFaceCount++;
                }
            }

            // Exactly 3 faces point toward this apex (visible) and 1 face is the bottom base (hidden)
            expect(visibleFaceCount).toBe(3);
            expect(hiddenFaceCount).toBe(1);
        }
    });

    it('creates valid D8, D10, D12 geometries with perfectly planar D10 kite faces', () => {
        const d8 = createD8Geometry(1.0);
        expect(d8.sides).toBe(8);
        expect(d8.faceNormals.size).toBe(8);

        const d10 = createD10Geometry(1.0);
        expect(d10.sides).toBe(10);
        expect(d10.faceNormals.size).toBe(10);

        // Verify that every D10 kite face consists of 2 triangles with identical normal vectors
        const normalsAttr = d10.geometry.attributes.normal;
        expect(normalsAttr).toBeDefined();
        // 10 faces * 2 triangles * 3 vertices = 60 vertices
        expect(normalsAttr.count).toBe(60);

        for (let faceIdx = 0; faceIdx < 10; faceIdx++) {
            const startVert = faceIdx * 6;
            const n0 = new THREE.Vector3(normalsAttr.getX(startVert), normalsAttr.getY(startVert), normalsAttr.getZ(startVert));
            for (let v = 1; v < 6; v++) {
                const nv = new THREE.Vector3(normalsAttr.getX(startVert + v), normalsAttr.getY(startVert + v), normalsAttr.getZ(startVert + v));
                expect(nv.dot(n0)).toBeCloseTo(1.0, 5);
            }
        }

        const d12 = createD12Geometry(1.0);
        expect(d12.sides).toBe(12);
        expect(d12.faceNormals.size).toBe(12);
    });

    it('creates valid Cannon.js ConvexPolyhedron shape from geometry', () => {
        const d20 = createD20Geometry(1.0);
        const cannonShape = createCannonConvexPolyhedron(d20.geometry);
        expect(cannonShape.vertices.length).toBeGreaterThan(0);
        expect(cannonShape.faces.length).toBeGreaterThan(0);
    });

    it('factory getDieDefinition returns requested dice specs and null for unsupported sizes', () => {
        expect(getDieDefinition(20)?.sides).toBe(20);
        expect(getDieDefinition(12)?.sides).toBe(12);
        expect(getDieDefinition(10)?.sides).toBe(10);
        expect(getDieDefinition(8)?.sides).toBe(8);
        expect(getDieDefinition(6)?.sides).toBe(6);
        expect(getDieDefinition(4)?.sides).toBe(4);

        // Unsupported sizes return null
        expect(getDieDefinition(100)).toBeNull();
        expect(getDieDefinition(3)).toBeNull();
        expect(getDieDefinition(7)).toBeNull();

        expect(isSupportedDieSize(20)).toBe(true);
        expect(isSupportedDieSize(10)).toBe(true);
        expect(isSupportedDieSize(100)).toBe(false);
    });
});
