import * as THREE from 'three';

export interface DieDefinition {
    sides: number;
    radius: number;
    geometry: THREE.BufferGeometry;
    faceNormals: Map<number, THREE.Vector3>;
    faceValues: number[];
}

/**
 * Computes face normals for a non-indexed BufferGeometry where every 3 vertices form a triangle.
 */
export function computeTriangleFaceNormals(geometry: THREE.BufferGeometry): THREE.Vector3[] {
    const pos = geometry.attributes.position;
    const normals: THREE.Vector3[] = [];
    const pA = new THREE.Vector3();
    const pB = new THREE.Vector3();
    const pC = new THREE.Vector3();
    const cb = new THREE.Vector3();
    const ab = new THREE.Vector3();

    const triangleCount = pos.count / 3;
    for (let i = 0; i < triangleCount; i++) {
        pA.fromBufferAttribute(pos, i * 3);
        pB.fromBufferAttribute(pos, i * 3 + 1);
        pC.fromBufferAttribute(pos, i * 3 + 2);

        cb.subVectors(pC, pB);
        ab.subVectors(pA, pB);
        cb.cross(ab).normalize();

        normals.push(cb.clone());
    }
    return normals;
}

/**
 * Projects 3D triangle vertices onto the local 2D face plane and maps them into atlas cells.
 * This guarantees the texture center is always at the geometric face center with upright orientation.
 */
export function computeProjectedTriangleUVs(
    geometry: THREE.BufferGeometry,
    cols: number,
    rows: number,
    padding: number = 0.1,
): number[] {
    const pos = geometry.attributes.position;
    const triangleCount = pos.count / 3;
    const uvs: number[] = [];

    const p0 = new THREE.Vector3();
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();
    const center = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const edge01 = new THREE.Vector3();
    const edge02 = new THREE.Vector3();
    const yLocal = new THREE.Vector3();
    const xLocal = new THREE.Vector3();

    for (let f = 0; f < triangleCount; f++) {
        p0.fromBufferAttribute(pos, f * 3);
        p1.fromBufferAttribute(pos, f * 3 + 1);
        p2.fromBufferAttribute(pos, f * 3 + 2);

        center.set(0, 0, 0).add(p0).add(p1).add(p2).divideScalar(3);

        edge01.subVectors(p1, p0);
        edge02.subVectors(p2, p0);
        normal.crossVectors(edge01, edge02).normalize();

        // Local Up vector: median line from midpoint(p1, p2) to p0
        const midBase = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
        yLocal.subVectors(p0, midBase).normalize();

        // Local Right vector
        xLocal.crossVectors(yLocal, normal).normalize();

        const pts = [p0, p1, p2];
        const localPts = pts.map(p => {
            const rel = new THREE.Vector3().subVectors(p, center);
            return {
                x: rel.dot(xLocal),
                y: rel.dot(yLocal),
            };
        });

        const maxDist = Math.max(...localPts.map(pt => Math.sqrt(pt.x * pt.x + pt.y * pt.y)));
        const scale = (0.5 - padding) / (maxDist || 1);

        const col = f % cols;
        const row = Math.floor(f / cols);
        const uMid = (col + 0.5) / cols;
        const vMid = 1 - (row + 0.5) / rows;
        const uSpan = 1 / cols;
        const vSpan = 1 / rows;

        for (const pt of localPts) {
            const u = uMid + pt.x * scale * uSpan * 2;
            const v = vMid + pt.y * scale * vSpan * 2;
            uvs.push(u, v);
        }
    }
    return uvs;
}

/**
 * Creates D6 Cube Geometry with UV coordinates mapped to a 3x2 texture atlas.
 */
export function createD6Geometry(size: number = 1.0): DieDefinition {
    const faceValues = [1, 6, 2, 5, 3, 4];
    const raw = new THREE.BoxGeometry(size, size, size);
    const geom = raw.index ? raw.toNonIndexed() : raw;

    const uvs: number[] = [];
    const cols = 3;
    const rows = 2;

    for (let f = 0; f < 6; f++) {
        const col = f % cols;
        const row = Math.floor(f / cols);

        const uMin = col / cols;
        const uMax = (col + 1) / cols;
        const vMin = 1 - (row + 1) / rows;
        const vMax = 1 - row / rows;

        uvs.push(
            uMin, vMax,
            uMin, vMin,
            uMax, vMax,
            uMin, vMin,
            uMax, vMin,
            uMax, vMax,
        );
    }
    geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const normals = computeTriangleFaceNormals(geom);
    const faceNormals = new Map<number, THREE.Vector3>();

    for (let f = 0; f < 6; f++) {
        const value = faceValues[f];
        faceNormals.set(value, normals[f * 2]);
    }

    return {
        sides: 6,
        radius: size * 0.5,
        geometry: geom,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D20 Icosahedron Geometry with projected face UV coordinates.
 */
export function createD20Geometry(radius: number = 1.0): DieDefinition {
    const raw = new THREE.IcosahedronGeometry(radius, 0);
    const rawGeom = raw.index ? raw.toNonIndexed() : raw;
    const triangleCount = rawGeom.attributes.position.count / 3;

    const faceValues = Array.from({ length: 20 }, (_, i) => i + 1);
    const cols = 5;
    const rows = 4;

    const uvs = computeProjectedTriangleUVs(rawGeom, cols, rows, 0.08);
    rawGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const normals = computeTriangleFaceNormals(rawGeom);
    const faceNormals = new Map<number, THREE.Vector3>();

    for (let f = 0; f < triangleCount; f++) {
        const value = faceValues[f];
        faceNormals.set(value, normals[f]);
    }

    return {
        sides: 20,
        radius,
        geometry: rawGeom,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D4 Tetrahedron Geometry with projected face UV coordinates.
 */
export function createD4Geometry(radius: number = 1.0): DieDefinition {
    const raw = new THREE.TetrahedronGeometry(radius, 0);
    const rawGeom = raw.index ? raw.toNonIndexed() : raw;
    const triangleCount = rawGeom.attributes.position.count / 3;

    const faceValues = [1, 2, 3, 4];
    const cols = 2;
    const rows = 2;

    const uvs = computeProjectedTriangleUVs(rawGeom, cols, rows, 0.08);
    rawGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const normals = computeTriangleFaceNormals(rawGeom);
    const faceNormals = new Map<number, THREE.Vector3>();

    for (let f = 0; f < triangleCount; f++) {
        const value = faceValues[f];
        faceNormals.set(value, normals[f]);
    }

    return {
        sides: 4,
        radius,
        geometry: rawGeom,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D8 Octahedron Geometry with projected face UV coordinates.
 */
export function createD8Geometry(radius: number = 1.0): DieDefinition {
    const raw = new THREE.OctahedronGeometry(radius, 0);
    const rawGeom = raw.index ? raw.toNonIndexed() : raw;
    const triangleCount = rawGeom.attributes.position.count / 3;

    const faceValues = Array.from({ length: 8 }, (_, i) => i + 1);
    const cols = 4;
    const rows = 2;

    const uvs = computeProjectedTriangleUVs(rawGeom, cols, rows, 0.08);
    rawGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const normals = computeTriangleFaceNormals(rawGeom);
    const faceNormals = new Map<number, THREE.Vector3>();

    for (let f = 0; f < triangleCount; f++) {
        const value = faceValues[f];
        faceNormals.set(value, normals[f]);
    }

    return {
        sides: 8,
        radius,
        geometry: rawGeom,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D12 Dodecahedron Geometry with planar projected UV coordinates.
 */
export function createD12Geometry(radius: number = 1.0): DieDefinition {
    const raw = new THREE.DodecahedronGeometry(radius, 0);
    const rawGeom = raw.index ? raw.toNonIndexed() : raw;

    const faceValues = Array.from({ length: 12 }, (_, i) => i + 1);
    const cols = 4;
    const rows = 3;

    const uvs = computeProjectedTriangleUVs(rawGeom, cols, rows, 0.08);
    rawGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

    const normals = computeTriangleFaceNormals(rawGeom);
    const faceNormals = new Map<number, THREE.Vector3>();

    for (let f = 0; f < 12; f++) {
        const value = faceValues[f];
        faceNormals.set(value, normals[f * 3]);
    }

    return {
        sides: 12,
        radius,
        geometry: rawGeom,
        faceNormals,
        faceValues,
    };
}

/**
 * Factory to get or create a die definition by side count.
 */
export function getDieDefinition(sides: number, radius: number = 1.0): DieDefinition {
    switch (sides) {
        case 4:
            return createD4Geometry(radius);
        case 6:
            return createD6Geometry(radius * 1.5);
        case 8:
            return createD8Geometry(radius);
        case 12:
            return createD12Geometry(radius);
        case 20:
        default:
            return createD20Geometry(radius);
    }
}
