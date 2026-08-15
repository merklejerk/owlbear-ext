import * as CANNON from 'cannon-es';
import * as THREE from 'three';

const shapeCache = new WeakMap<THREE.BufferGeometry, CANNON.ConvexPolyhedron>();

/**
 * Converts a Three.js non-indexed BufferGeometry into a CANNON.ConvexPolyhedron shape,
 * caching results to prevent repeated vertex reconstruction.
 */
export function createCannonConvexPolyhedron(geometry: THREE.BufferGeometry): CANNON.ConvexPolyhedron {
    const cached = shapeCache.get(geometry);
    if (cached) {
        return cached;
    }

    const posAttr = geometry.attributes.position;
    const vertexMap = new Map<string, number>();
    const vertices: CANNON.Vec3[] = [];
    const faces: number[][] = [];

    const triangleCount = posAttr.count / 3;
    const v = new THREE.Vector3();

    for (let i = 0; i < triangleCount; i++) {
        const faceIndices: number[] = [];
        for (let j = 0; j < 3; j++) {
            v.fromBufferAttribute(posAttr, i * 3 + j);
            // Precision key to merge identical vertices for Cannon
            const key = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;

            let idx = vertexMap.get(key);
            if (idx === undefined) {
                idx = vertices.length;
                vertexMap.set(key, idx);
                vertices.push(new CANNON.Vec3(v.x, v.y, v.z));
            }
            faceIndices.push(idx);
        }
        faces.push(faceIndices);
    }

    const shape = new CANNON.ConvexPolyhedron({
        vertices,
        faces,
    });

    shapeCache.set(geometry, shape);
    return shape;
}
