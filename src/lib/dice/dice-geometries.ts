import * as THREE from 'three';

export interface DieDefinition {
    sides: number;
    radius: number;
    geometry: THREE.BufferGeometry;
    faceNormals: Map<number, THREE.Vector3>;
    faceValues: number[];
}

export const SUPPORTED_DICE_SIDES = [4, 6, 8, 10, 12, 20] as const;
export type SupportedDieSide = (typeof SUPPORTED_DICE_SIDES)[number];

export function isSupportedDieSize(sides: number): sides is SupportedDieSide {
    return (SUPPORTED_DICE_SIDES as readonly number[]).includes(sides);
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

        // Local Right vector: yLocal x normal gives +X pointing right
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
 * Creates D4 Tetrahedron Geometry (4 triangular faces).
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
    rawGeom.computeVertexNormals();

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
 * Creates D6 Cube Geometry (6 square faces).
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
    geom.computeVertexNormals();

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
 * Creates D8 Octahedron Geometry (8 triangular faces).
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
    rawGeom.computeVertexNormals();

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
 * Creates D10 Pentagonal Trapezohedron Geometry (10 congruent, symmetric kite-shaped faces).
 */
export function createD10Geometry(radius: number = 1.0): DieDefinition {
    const faceValues = Array.from({ length: 10 }, (_, i) => i + 1);
    const cols = 5;
    const rows = 2;

    const hPole = radius * 1.12;
    const hEquator = radius * 0.18;
    const rEquator = radius * 0.88;

    const topPole = new THREE.Vector3(0, hPole, 0);
    const bottomPole = new THREE.Vector3(0, -hPole, 0);

    // 10 alternating vertices around the equator (even = +hEquator, odd = -hEquator)
    const eqVertices: THREE.Vector3[] = [];
    for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const y = i % 2 === 0 ? hEquator : -hEquator;
        eqVertices.push(new THREE.Vector3(
            Math.cos(angle) * rEquator,
            y,
            Math.sin(angle) * rEquator,
        ));
    }

    const positions: number[] = [];
    const uvs: number[] = [];
    const faceNormals = new Map<number, THREE.Vector3>();

    function addWoundTriangle(
        vA: THREE.Vector3,
        vB: THREE.Vector3,
        vC: THREE.Vector3,
        center: THREE.Vector3,
        xLocal: THREE.Vector3,
        yLocal: THREE.Vector3,
        scale: number,
        uMid: number,
        vMid: number,
        uSpan: number,
        vSpan: number,
    ) {
        const edge1 = new THREE.Vector3().subVectors(vB, vA);
        const edge2 = new THREE.Vector3().subVectors(vC, vA);
        const triNormal = new THREE.Vector3().crossVectors(edge1, edge2);
        const triCentroid = new THREE.Vector3().add(vA).add(vB).add(vC).divideScalar(3);

        // Enforce outward CCW winding
        let p0 = vA;
        let p1 = vB;
        let p2 = vC;
        if (triNormal.dot(triCentroid) < 0) {
            p1 = vC;
            p2 = vB;
        }

        for (const v of [p0, p1, p2]) {
            positions.push(v.x, v.y, v.z);
            const rel = new THREE.Vector3().subVectors(v, center);
            const u = uMid + rel.dot(xLocal) * scale * uSpan * 2;
            const vCoord = vMid + rel.dot(yLocal) * scale * vSpan * 2;
            uvs.push(u, vCoord);
        }
    }

    // 10 congruent kite faces: 5 upper kites (f = 0..4) and 5 lower kites (f = 5..9)
    for (let f = 0; f < 10; f++) {
        const col = f % cols;
        const row = Math.floor(f / cols);
        const uMid = (col + 0.5) / cols;
        const vMid = 1 - (row + 0.5) / rows;
        const uSpan = 1 / cols;
        const vSpan = 1 / rows;

        if (f < 5) {
            // Upper kite face: apex at topPole, anchored at even index k
            const k = f * 2;
            const pApex = topPole;
            const pLeft = eqVertices[k];
            const pBottom = eqVertices[(k + 1) % 10];
            const pRight = eqVertices[(k + 2) % 10];

            const center = new THREE.Vector3().add(pApex).add(pLeft).add(pBottom).add(pRight).multiplyScalar(0.25);
            const normal = center.clone().normalize();

            const yLocal = new THREE.Vector3().subVectors(pApex, center).normalize();
            const xLocal = new THREE.Vector3().crossVectors(yLocal, normal).normalize();

            const maxDist = Math.max(...[pApex, pLeft, pBottom, pRight].map(p => {
                const rel = new THREE.Vector3().subVectors(p, center);
                return Math.sqrt(Math.pow(rel.dot(xLocal), 2) + Math.pow(rel.dot(yLocal), 2));
            }));
            const scale = 0.38 / (maxDist || 1);

            addWoundTriangle(pApex, pLeft, pBottom, center, xLocal, yLocal, scale, uMid, vMid, uSpan, vSpan);
            addWoundTriangle(pApex, pBottom, pRight, center, xLocal, yLocal, scale, uMid, vMid, uSpan, vSpan);

            faceNormals.set(faceValues[f], normal);
        } else {
            // Lower kite face: apex at bottomPole, anchored at odd index k
            const k = (f - 5) * 2 + 1;
            const pApex = bottomPole;
            const pLeft = eqVertices[k];
            const pTop = eqVertices[(k + 1) % 10];
            const pRight = eqVertices[(k + 2) % 10];

            const center = new THREE.Vector3().add(pApex).add(pLeft).add(pTop).add(pRight).multiplyScalar(0.25);
            const normal = center.clone().normalize();

            // For lower kites, point yLocal towards top edge so numerals read upright
            const yLocal = new THREE.Vector3().subVectors(pTop, center).normalize();
            const xLocal = new THREE.Vector3().crossVectors(yLocal, normal).normalize();

            const maxDist = Math.max(...[pApex, pLeft, pTop, pRight].map(p => {
                const rel = new THREE.Vector3().subVectors(p, center);
                return Math.sqrt(Math.pow(rel.dot(xLocal), 2) + Math.pow(rel.dot(yLocal), 2));
            }));
            const scale = 0.38 / (maxDist || 1);

            addWoundTriangle(pApex, pRight, pTop, center, xLocal, yLocal, scale, uMid, vMid, uSpan, vSpan);
            addWoundTriangle(pApex, pTop, pLeft, center, xLocal, yLocal, scale, uMid, vMid, uSpan, vSpan);

            faceNormals.set(faceValues[f], normal);
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.computeVertexNormals();

    return {
        sides: 10,
        radius,
        geometry,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D12 Dodecahedron Geometry (12 regular pentagonal faces).
 */
export function createD12Geometry(radius: number = 1.0): DieDefinition {
    const raw = new THREE.DodecahedronGeometry(radius, 0);
    const rawGeom = raw.index ? raw.toNonIndexed() : raw;
    const pos = rawGeom.attributes.position;

    const faceValues = Array.from({ length: 12 }, (_, i) => i + 1);
    const cols = 4;
    const rows = 3;
    const uvs: number[] = [];
    const faceNormals = new Map<number, THREE.Vector3>();

    const p = new THREE.Vector3();
    const pentagonCount = 12;

    for (let f = 0; f < pentagonCount; f++) {
        const center = new THREE.Vector3();
        const verts: THREE.Vector3[] = [];

        for (let v = 0; v < 9; v++) {
            p.fromBufferAttribute(pos, f * 9 + v);
            verts.push(p.clone());
            center.add(p);
        }
        center.divideScalar(9);

        const normal = center.clone().normalize();
        const topVert = verts[0];
        const yLocal = new THREE.Vector3().subVectors(topVert, center).normalize();
        const xLocal = new THREE.Vector3().crossVectors(yLocal, normal).normalize();

        const col = f % cols;
        const row = Math.floor(f / cols);
        const uMid = (col + 0.5) / cols;
        const vMid = 1 - (row + 0.5) / rows;
        const uSpan = 1 / cols;
        const vSpan = 1 / rows;

        const maxDist = Math.max(...verts.map(v => {
            const rel = new THREE.Vector3().subVectors(v, center);
            return Math.sqrt(Math.pow(rel.dot(xLocal), 2) + Math.pow(rel.dot(yLocal), 2));
        }));
        const scale = 0.40 / (maxDist || 1);

        for (const v of verts) {
            const rel = new THREE.Vector3().subVectors(v, center);
            const u = uMid + rel.dot(xLocal) * scale * uSpan * 2;
            const vCoord = vMid + rel.dot(yLocal) * scale * vSpan * 2;
            uvs.push(u, vCoord);
        }

        faceNormals.set(faceValues[f], normal);
    }

    rawGeom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    rawGeom.computeVertexNormals();

    return {
        sides: 12,
        radius,
        geometry: rawGeom,
        faceNormals,
        faceValues,
    };
}

/**
 * Creates D20 Icosahedron Geometry (20 triangular faces).
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
    rawGeom.computeVertexNormals();

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
 * Factory to get a die definition by side count, or null if unsupported.
 */
export function getDieDefinition(sides: number, radius: number = 1.0): DieDefinition | null {
    switch (sides) {
        case 4:
            return createD4Geometry(radius * 1.22);
        case 6:
            return createD6Geometry(radius * 1.40);
        case 8:
            return createD8Geometry(radius * 1.12);
        case 10:
            return createD10Geometry(radius * 0.95);
        case 12:
            return createD12Geometry(radius * 0.95);
        case 20:
            return createD20Geometry(radius * 1.00);
        default:
            return null;
    }
}
