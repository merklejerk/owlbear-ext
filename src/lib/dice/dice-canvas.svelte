<script context="module" lang="ts">
    export interface RollItem {
        sides: number;
        result: number;
    }
</script>

<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from 'three';
    import { getDieDefinition, type DieDefinition } from './dice-geometries';
    import { getTextureForDie, DEFAULT_THEME, type DiceTheme } from './dice-texture';
    import { generateTimeReversalTrajectory, type DiceTrajectory } from './dice-physics';

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

        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;

        // Scene & Transparent Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
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
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
        dirLight.position.set(5, 22, 8);
        scene.add(dirLight);

        const fillLight = new THREE.DirectionalLight(0x99aacc, 0.5);
        fillLight.position.set(-8, 12, -6);
        scene.add(fillLight);

        // Build dice and generate trajectories across full viewport
        const activeDice: ActiveDie[] = [];
        const count = dice.length;

        // Calculate visible floor bounds based on camera aspect
        const aspect = width / height;
        const boundX = Math.min(8.0, 4.5 * Math.max(1, aspect));
        const boundZ = 3.5;
        const minDist = 2.8;

        const positions: Array<{ x: number; z: number }> = [];
        for (let i = 0; i < count; i++) {
            let placed = false;
            for (let attempts = 0; attempts < 60 && !placed; attempts++) {
                const rx = (Math.random() - 0.5) * boundX * 1.8;
                const rz = (Math.random() - 0.5) * boundZ * 1.8;
                const tooClose = positions.some(p => {
                    const dx = p.x - rx;
                    const dz = p.z - rz;
                    return Math.sqrt(dx * dx + dz * dz) < minDist;
                });
                if (!tooClose) {
                    positions.push({ x: rx, z: rz });
                    placed = true;
                }
            }
            if (!placed) {
                const angle = (i / Math.max(1, count)) * Math.PI * 2;
                positions.push({
                    x: Math.cos(angle) * (boundX * 0.5),
                    z: Math.sin(angle) * (boundZ * 0.5),
                });
            }
        }

        for (let i = 0; i < count; i++) {
            const item = dice[i];
            const def = getDieDefinition(item.sides, 1.2);
            const texture = getTextureForDie(item.sides, def.faceValues, theme);

            const mat = new THREE.MeshStandardMaterial({
                map: texture,
                roughness: 0.25,
                metalness: 0.15,
            });

            const mesh = new THREE.Mesh(def.geometry, mat);
            scene.add(mesh);

            const restPos = positions[i];
            const randomThrowAngle = Math.random() * Math.PI * 2;

            const trajectory = generateTimeReversalTrajectory({
                die: def,
                targetResult: item.result,
                restingPosition: { x: restPos.x, y: def.radius, z: restPos.z },
                throwAngleRadians: randomThrowAngle,
                durationSeconds: 1.15 + Math.random() * 0.2,
            });

            activeDice.push({
                mesh,
                definition: def,
                trajectory,
            });
        }

        // Animation playback loop
        const startTime = performance.now();
        const maxDuration = Math.max(...activeDice.map(d => d.trajectory.duration));
        const holdDuration = 0.4; // Stay at rest for 0.4s
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
