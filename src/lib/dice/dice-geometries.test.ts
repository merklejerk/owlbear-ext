import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import {
    createD4Geometry,
    createD6Geometry,
    createD8Geometry,
    createD12Geometry,
    createD20Geometry,
    getDieDefinition,
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

    it('creates valid D4, D8, D12 geometries', () => {
        const d4 = createD4Geometry(1.0);
        expect(d4.sides).toBe(4);
        expect(d4.faceNormals.size).toBe(4);

        const d8 = createD8Geometry(1.0);
        expect(d8.sides).toBe(8);
        expect(d8.faceNormals.size).toBe(8);

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

    it('factory getDieDefinition returns requested dice specs', () => {
        expect(getDieDefinition(20).sides).toBe(20);
        expect(getDieDefinition(6).sides).toBe(6);
        expect(getDieDefinition(8).sides).toBe(8);
        expect(getDieDefinition(4).sides).toBe(4);
        expect(getDieDefinition(12).sides).toBe(12);
    });
});
