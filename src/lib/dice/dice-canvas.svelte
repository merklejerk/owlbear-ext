<script context="module" lang="ts">
    export interface RollItem {
        sides: number;
        result: number;
    }
</script>

<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { getDieDefinition, isSupportedDieSize, type DieDefinition } from './dice-geometries';
    import { getTextureForDie, getNormalMapForDie, DEFAULT_THEME, type DiceTheme } from './dice-texture';
    import { generateMultiDiceTrajectories, type DiceTrajectory } from './dice-physics';

    export let dice: RollItem[] = [{ sides: 20, result: 20 }];
    export let theme: DiceTheme = DEFAULT_THEME;
    export let onComplete: () => void = () => {};

    let container: HTMLDivElement;
    let animFrameId: number | null = null;

    interface ActiveDie {
        mesh: THREE.Mesh;
        definition: DieDefinition;
        trajectory: DiceTrajectory;
    }

    onMount(() => {
        if (!container) return;

        // Filter out unsupported dice before rendering or simulating
        const supportedDice = dice.filter(d => isSupportedDieSize(d.sides));
        const count = supportedDice.length;
        if (count === 0) {
            onComplete();
            return;
        }

        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        const aspect = width / height;

        // Scene & Transparent Renderer
        const scene = new THREE.Scene();
        const fov = 38;
        const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100);
        camera.position.set(0, 18, 3.5);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Lighting - directional key with restrained ambient for rich normal map relief
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.85);
        dirLight.position.set(-8, 22, -10); // Angled key light creates crisp micro-shadows along normals
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 55;
        const shadowExtent = 18;
        dirLight.shadow.camera.left = -shadowExtent;
        dirLight.shadow.camera.right = shadowExtent;
        dirLight.shadow.camera.top = shadowExtent;
        dirLight.shadow.camera.bottom = -shadowExtent;
        dirLight.shadow.bias = -0.0003;
        dirLight.shadow.radius = 2.5;
        scene.add(dirLight);

        const fillLight = new THREE.DirectionalLight(0xaac0e8, 0.45);
        fillLight.position.set(12, 14, 12);
        scene.add(fillLight);

        // Transparent tabletop shadow receiver (casts soft shadows onto map)
        const shadowPlaneGeo = new THREE.PlaneGeometry(80, 80);
        const shadowPlaneMat = new THREE.ShadowMaterial({
            opacity: 0.42,
        });
        const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = 0;
        shadowPlane.receiveShadow = true;
        scene.add(shadowPlane);

        // Compute die radius dynamically so diameter is ~15% of viewport's minimum dimension
        const fovRad = (fov * Math.PI) / 180;
        const visibleHeightAtTable = 2 * 18 * Math.tan(fovRad / 2);
        const visibleMinWorld = visibleHeightAtTable * Math.min(1, aspect);
        const targetDiameterPercent = 0.15; // 15% of viewport min dimension
        const baseRadius = (visibleMinWorld * targetDiameterPercent) / 2;

        // Prepare multi-dice specifications with central cluster placement
        const clusterRadius = count === 1 ? 0 : Math.min(visibleMinWorld * 0.22, baseRadius * (1.2 + count * 0.35));
        const multiItems = supportedDice.map((item, idx) => {
            const def = getDieDefinition(item.sides, baseRadius)!;
            let restX = 0;
            let restZ = 0;
            if (count === 1) {
                restX = (Math.random() - 0.5) * (baseRadius * 0.5);
                restZ = (Math.random() - 0.5) * (baseRadius * 0.4);
            } else {
                const angle = (idx / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
                const r = clusterRadius * (0.85 + Math.random() * 0.3);
                restX = Math.cos(angle) * r;
                restZ = Math.sin(angle) * (r * 0.75);
            }
            return {
                die: def,
                targetResult: item.result,
                restingPosition: { x: restX, y: def.radius, z: restZ },
            };
        });

        // Generate shared physics simulation trajectories with die-to-die collisions
        const trajectories = generateMultiDiceTrajectories({
            items: multiItems,
            durationSeconds: 1.3,
        });

        const activeDice: ActiveDie[] = [];
        for (let i = 0; i < count; i++) {
            const item = dice[i];
            const def = multiItems[i].die;
            const texture = getTextureForDie(item.sides, def.faceValues, theme);
            const normalMap = getNormalMapForDie(item.sides, def.faceValues);

            const mat = new THREE.MeshStandardMaterial({
                map: texture,
                normalMap,
                normalScale: new THREE.Vector2(0.85, 0.85),
                roughness: 0.28,
                metalness: 0.04,
            });

            const mesh = new THREE.Mesh(def.geometry, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Metallic gold facet edge trim
            const edges = new THREE.EdgesGeometry(def.geometry, 15);
            const lineMat = new THREE.LineBasicMaterial({
                color: 0xf6d365,
                transparent: true,
                opacity: 0.85,
            });
            const edgeLines = new THREE.LineSegments(edges, lineMat);
            mesh.add(edgeLines);

            scene.add(mesh);

            activeDice.push({
                mesh,
                definition: def,
                trajectory: trajectories[i],
            });
        }

        // Animation playback loop
        const startTime = performance.now();
        const maxDuration = Math.max(...activeDice.map(d => d.trajectory.duration));
        const holdDuration = 1.8; // Stay at rest for 1.8s so players can read the result
        let completed = false;

        const pA = new THREE.Vector3();
        const pB = new THREE.Vector3();
        const qA = new THREE.Quaternion();
        const qB = new THREE.Quaternion();

        const animate = () => {
            const elapsed = (performance.now() - startTime) / 1000;

            for (const die of activeDice) {
                const traj = die.trajectory;
                const frames = traj.keyframes;

                if (elapsed >= traj.duration) {
                    // Resting state
                    const lastFrame = frames[frames.length - 1];
                    die.mesh.position.set(lastFrame.position[0], lastFrame.position[1], lastFrame.position[2]);
                    die.mesh.quaternion.set(lastFrame.quaternion[0], lastFrame.quaternion[1], lastFrame.quaternion[2], lastFrame.quaternion[3]);
                } else {
                    // Interpolate between keyframes
                    const progress = elapsed / traj.duration;
                    const exactIdx = progress * (frames.length - 1);
                    const idx0 = Math.floor(exactIdx);
                    const idx1 = Math.min(frames.length - 1, idx0 + 1);
                    const alpha = exactIdx - idx0;

                    const f0 = frames[idx0];
                    const f1 = frames[idx1];

                    pA.set(f0.position[0], f0.position[1], f0.position[2]);
                    pB.set(f1.position[0], f1.position[1], f1.position[2]);
                    die.mesh.position.lerpVectors(pA, pB, alpha);

                    qA.set(f0.quaternion[0], f0.quaternion[1], f0.quaternion[2], f0.quaternion[3]);
                    qB.set(f1.quaternion[0], f1.quaternion[1], f1.quaternion[2], f1.quaternion[3]);
                    die.mesh.quaternion.slerpQuaternions(qA, qB, alpha);
                }
            }

            renderer.render(scene, camera);

            if (elapsed >= maxDuration + holdDuration) {
                if (!completed) {
                    completed = true;
                    onComplete();
                }
            } else {
                animFrameId = requestAnimationFrame(animate);
            }
        };

        animFrameId = requestAnimationFrame(animate);

        const handleResize = () => {
            if (!container) return;
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animFrameId) cancelAnimationFrame(animFrameId);

            // Resource cleanup
            for (const die of activeDice) {
                die.mesh.geometry.dispose();
                if (Array.isArray(die.mesh.material)) {
                    die.mesh.material.forEach(m => m.dispose());
                } else {
                    die.mesh.material.dispose();
                }
            }
            renderer.dispose();
            if (renderer.domElement.parentElement) {
                renderer.domElement.parentElement.removeChild(renderer.domElement);
            }
        };
    });
</script>

<style>
    .dice-canvas-container {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
    }
</style>

<div class="dice-canvas-container" bind:this={container}></div>
