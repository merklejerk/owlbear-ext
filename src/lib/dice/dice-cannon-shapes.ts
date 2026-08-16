import * as CANNON from 'cannon-es';
import * as THREE from 'three';

const shapeCache = new Map<string, CANNON.ConvexPolyhedron>();

/**
 * Converts a Three.js non-indexed BufferGeometry into a CANNON.ConvexPolyhedron shape,
 * caching results by geometry vertex signature to prevent repeated vertex reconstruction.
 */
export function createCannonConvexPolyhedron(geometry: THREE.BufferGeometry): CANNON.ConvexPolyhedron {
    const posAttr = geometry.attributes.position;
    if (!posAttr || posAttr.count === 0) {
        return new CANNON.ConvexPolyhedron();
    }

    // Fast deterministic key: vertex count + first & last vertex positions
    const count = posAttr.count;
    const key = `${count}_${posAttr.getX(0).toFixed(4)},${posAttr.getY(0).toFixed(4)},${posAttr.getZ(0).toFixed(4)}_${posAttr.getX(count - 1).toFixed(4)},${posAttr.getY(count - 1).toFixed(4)},${posAttr.getZ(count - 1).toFixed(4)}`;

    const cached = shapeCache.get(key);
    if (cached) {
        return cached;
    }

    const vertexMap = new Map<string, number>();
    const vertices: CANNON.Vec3[] = [];
    const faces: number[][] = [];

    const triangleCount = count / 3;
    const v = new THREE.Vector3();

    for (let i = 0; i < triangleCount; i++) {
        const faceIndices: number[] = [];
        for (let j = 0; j < 3; j++) {
            v.fromBufferAttribute(posAttr, i * 3 + j);
            // Precision key to merge identical vertices for Cannon
            const vKey = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;

            let idx = vertexMap.get(vKey);
            if (idx === undefined) {
                idx = vertices.length;
                vertexMap.set(vKey, idx);
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

    shapeCache.set(key, shape);
    return shape;
}
