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
    import { createDiceMaterial, DEFAULT_THEME, type DiceTheme, prewarmDiceAssets, getFacetEdgeColor } from './dice-texture';
    import { generateMultiDiceTrajectories, type DiceTrajectory, MAX_3D_DICE, createMulberry32, hashStringToSeed } from './dice-physics';

    export let dice: RollItem[] = [];
    export let theme: DiceTheme = DEFAULT_THEME;
    export let holdDuration: number = 2.5;
    export let seed: string | number | null | undefined = undefined;
    export let width: number = 1200;
    export let height: number = 800;
    export let onComplete: () => void = () => {};

    let container: HTMLDivElement;
    let animFrameId: number | null = null;
    let mounted = false;

    // Persistent Three.js Infrastructure
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    const fov = 38;

    // Persistent Textures & Particle Geometries (Allocated once at startup)
    let shockwaveTexture: THREE.CanvasTexture;
    let sparkTexture: THREE.CanvasTexture;
    let smokeTexture: THREE.CanvasTexture;
    let shockwavePlaneGeo: THREE.PlaneGeometry;
    let shadowPlaneMat: THREE.ShadowMaterial;

    interface ActiveDie {
        mesh: THREE.Mesh;
        edgeLines: THREE.LineSegments;
        edgeMaterial: THREE.LineBasicMaterial;
        definition: DieDefinition;
        trajectory: DiceTrajectory;
    }

    interface SparkBurst {
        points: THREE.Points;
        geo: THREE.BufferGeometry;
        mat: THREE.PointsMaterial;
        velocities: Float32Array;
        basePositions: Float32Array;
        startTime: number;
        duration: number;
        active: boolean;
    }

    interface SmokeBurst {
        mesh: THREE.Mesh;
        geo: THREE.BufferGeometry;
        mat: THREE.MeshBasicMaterial;
        startTime: number;
        duration: number;
        active: boolean;
    }

    interface Nat20GlintLight {
        epicenterLight: THREE.PointLight;
        glintLight: THREE.PointLight;
        startTime: number;
        restX: number;
        restZ: number;
    }

    // Active animation state for the current roll
    let activeDice: ActiveDie[] = [];
    let shockwavePlanes: Array<{ mesh: THREE.Mesh; startTime: number; maxRadius: number; duration: number }> = [];
    let shockwaveMaterials: THREE.MeshBasicMaterial[] = [];
    let sparkBursts: SparkBurst[] = [];
    let smokeBursts: SmokeBurst[] = [];
    let nat20Lights: Nat20GlintLight[] = [];

    // Reusable math scratchpads for zero-allocation animation ticks
    const tempPos0 = new THREE.Vector3();
    const tempPos1 = new THREE.Vector3();
    const tempQuat0 = new THREE.Quaternion();
    const tempQuat1 = new THREE.Quaternion();

    function createShockwaveTexture(): THREE.CanvasTexture {
        if (typeof document === 'undefined') {
            return new THREE.CanvasTexture({} as HTMLCanvasElement);
        }
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return new THREE.CanvasTexture(canvas);
        }
        const center = 256;
        const radius = 250;

        // 1. Radial Base Gradient with high-contrast caustic ring
        const grad = ctx.createRadialGradient(center, center, radius * 0.30, center, center, radius);
        grad.addColorStop(0.00, 'rgba(255, 215, 0, 0.0)');
        grad.addColorStop(0.42, 'rgba(255, 215, 0, 0.0)');
        grad.addColorStop(0.68, 'rgba(255, 255, 255, 0.98)'); // Intense white-hot ridge
        grad.addColorStop(0.78, 'rgba(255, 210, 40, 0.90)');  // Solar gold
        grad.addColorStop(0.88, 'rgba(255, 140, 10, 0.40)');  // Fiery amber
        grad.addColorStop(1.00, 'rgba(255, 80, 0, 0.0)');   // Feathered outer halo
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 512);

        // 2. High-Texture Radial Energy Rays / Fractures (Spokes)
        ctx.save();
        ctx.translate(center, center);
        const spokeCount = 36;
        for (let i = 0; i < spokeCount; i++) {
            const angle = (i / spokeCount) * Math.PI * 2;
            const spokeLen = radius * (0.65 + (i % 3 === 0 ? 0.28 : i % 2 === 0 ? 0.18 : 0.08));
            const innerR = radius * (0.44 + (i % 2) * 0.06);

            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(innerR, 0);
            ctx.lineTo(spokeLen, 0);
            ctx.lineWidth = i % 3 === 0 ? 3.5 : 1.8;
            ctx.strokeStyle = i % 3 === 0 ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 210, 50, 0.55)';
            ctx.stroke();
            ctx.restore();
        }

        // 3. Concentric Arcane Runic Ticks & Orbital Notches
        const notchCount = 48;
        for (let i = 0; i < notchCount; i++) {
            const angle = (i / notchCount) * Math.PI * 2;
            ctx.save();
            ctx.rotate(angle);
            ctx.fillStyle = (i % 4 === 0) ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 220, 80, 0.65)';
            ctx.fillRect(radius * 0.74, -1.5, (i % 4 === 0) ? 9 : 4, 3);
            ctx.restore();
        }
        ctx.restore();

        const tex = new THREE.CanvasTexture(canvas);
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 8;
        return tex;
    }

    function createSparkTexture(): THREE.CanvasTexture {
        if (typeof document === 'undefined') {
            return new THREE.CanvasTexture({} as HTMLCanvasElement);
        }
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return new THREE.CanvasTexture(canvas);
        }
        const center = 32;

        const grad = ctx.createRadialGradient(center, center, 0, center, center, 30);
        grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
        grad.addColorStop(0.2, 'rgba(255, 230, 100, 0.9)');
        grad.addColorStop(0.5, 'rgba(255, 160, 20, 0.4)');
        grad.addColorStop(1.0, 'rgba(255, 100, 0, 0.0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);

        // 4-point star cross glint
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(center - 1, 4, 2, 56);
        ctx.fillRect(4, center - 1, 56, 2);

        const tex = new THREE.CanvasTexture(canvas);
        tex.anisotropy = 8;
        return tex;
    }

    function createSmokeTexture(): THREE.CanvasTexture {
        if (typeof document === 'undefined') {
            return new THREE.CanvasTexture({} as HTMLCanvasElement);
        }
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return new THREE.CanvasTexture(canvas);
        }

        const puffs = [
            { x: 64, y: 64, r: 56, a: 0.85 },
            { x: 50, y: 52, r: 42, a: 0.55 },
            { x: 78, y: 54, r: 40, a: 0.55 },
            { x: 58, y: 76, r: 44, a: 0.55 },
            { x: 74, y: 72, r: 42, a: 0.45 },
        ];

        for (const p of puffs) {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            grad.addColorStop(0.0, `rgba(235, 235, 250, ${p.a})`);
            grad.addColorStop(0.35, `rgba(180, 180, 205, ${p.a * 0.7})`);
            grad.addColorStop(0.7, `rgba(120, 120, 140, ${p.a * 0.3})`);
            grad.addColorStop(1.0, 'rgba(60, 60, 80, 0.0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.anisotropy = 8;
        return tex;
    }

    function updateDimensions(w: number, h: number) {
        if (!camera || !renderer) return;
        const renderW = Math.max(1, w);
        const renderH = Math.max(1, h);
        camera.aspect = renderW / renderH;
        camera.updateProjectionMatrix();
        renderer.setSize(renderW, renderH);
    }

    function clearRoll() {
        if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
        }

        for (const die of activeDice) {
            scene.remove(die.mesh);
            die.edgeLines.geometry.dispose();
            die.edgeMaterial.dispose();
            if (Array.isArray(die.mesh.material)) {
                die.mesh.material.forEach(m => m.dispose());
            } else {
                die.mesh.material.dispose();
            }
        }
        activeDice = [];

        for (const sw of shockwavePlanes) {
            scene.remove(sw.mesh);
        }
        shockwavePlanes = [];

        for (const mat of shockwaveMaterials) {
            mat.dispose();
        }
        shockwaveMaterials = [];

        for (const sb of sparkBursts) {
            scene.remove(sb.points);
            sb.geo.dispose();
            sb.mat.dispose();
        }
        sparkBursts = [];

        for (const smk of smokeBursts) {
            scene.remove(smk.mesh);
            smk.geo.dispose();
            smk.mat.dispose();
        }
        smokeBursts = [];

        for (const nl of nat20Lights) {
            scene.remove(nl.epicenterLight);
            nl.epicenterLight.dispose();
            scene.remove(nl.glintLight);
            nl.glintLight.dispose();
        }
        nat20Lights = [];

        if (renderer) {
            renderer.clear();
        }
    }

    function startRoll(rollItems: RollItem[], rollTheme: DiceTheme, rollSeed?: string | number | null) {
        clearRoll();
        if (shadowPlaneMat) {
            shadowPlaneMat.opacity = 0.38;
        }

        const supportedDice = rollItems.filter(d => isSupportedDieSize(d.sides)).slice(0, MAX_3D_DICE);
        const count = supportedDice.length;
        if (count === 0) {
            onComplete();
            return;
        }

        const rng = rollSeed !== undefined ? createMulberry32(hashStringToSeed(rollSeed)) : Math.random;

        const renderW = (container?.clientWidth > 0 ? container.clientWidth : (width > 0 ? width : window.innerWidth)) || 1200;
        const renderH = (container?.clientHeight > 0 ? container.clientHeight : (height > 0 ? height : window.innerHeight)) || 800;
        updateDimensions(renderW, renderH);

        const aspect = renderW / renderH;
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
                restX = (rng() - 0.5) * (baseRadius * 0.5);
                restZ = (rng() - 0.5) * (baseRadius * 0.4);
            } else {
                const angle = (idx / count) * Math.PI * 2 + (rng() - 0.5) * 0.3;
                const r = clusterRadius * (0.85 + rng() * 0.3);
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
            seed: rollSeed,
        });

        activeDice = [];
        for (let i = 0; i < count; i++) {
            const item = supportedDice[i];
            const def = multiItems[i].die;
            const mat = createDiceMaterial(item.sides, def.faceValues, rollTheme);

            // Reuse memoized BufferGeometry directly across all dice instances
            const mesh = new THREE.Mesh(def.geometry, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            // Harmonic metallic facet edge trim tailored to die base color
            const edgesGeo = new THREE.EdgesGeometry(def.geometry, 15);
            const edgeMat = new THREE.LineBasicMaterial({
                color: getFacetEdgeColor(rollTheme),
                linewidth: 2,
                transparent: true,
                opacity: 0.90,
            });
            const edgeLines = new THREE.LineSegments(edgesGeo, edgeMat);
            mesh.add(edgeLines);

            scene.add(mesh);

            activeDice.push({
                mesh,
                edgeLines,
                edgeMaterial: edgeMat,
                definition: def,
                trajectory: trajectories[i],
            });
        }

        // Prepare particle effects and Nat 20 flourishes
        shockwavePlanes = [];
        shockwaveMaterials = [];
        sparkBursts = [];
        smokeBursts = [];
        nat20Lights = [];

        for (let i = 0; i < count; i++) {
            const item = supportedDice[i];
            const traj = trajectories[i];
            const restPos = multiItems[i].restingPosition;

            if (item.sides === 20 && item.result === 20) {
                // Shockwave Ring on Nat 20 Impact
                const swMat = new THREE.MeshBasicMaterial({
                    map: shockwaveTexture,
                    transparent: true,
                    opacity: 0.0,
                    depthWrite: false,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                });
                shockwaveMaterials.push(swMat);

                const swMesh = new THREE.Mesh(shockwavePlaneGeo, swMat);
                swMesh.rotation.x = -Math.PI / 2;
                swMesh.position.set(restPos.x, 0.02, restPos.z);
                swMesh.scale.set(0.1, 0.1, 1);
                scene.add(swMesh);

                shockwavePlanes.push({
                    mesh: swMesh,
                    startTime: traj.duration,
                    maxRadius: baseRadius * 6.5,
                    duration: 0.85,
                });

                // Spark Particles Burst
                const sparkCount = 80;
                const sparkPositions = new Float32Array(sparkCount * 3);
                const sparkVelocities = new Float32Array(sparkCount * 3);
                const sparkBasePos = new Float32Array(sparkCount * 3);

                for (let p = 0; p < sparkCount; p++) {
                    sparkPositions[p * 3] = restPos.x;
                    sparkPositions[p * 3 + 1] = 0.05;
                    sparkPositions[p * 3 + 2] = restPos.z;

                    sparkBasePos[p * 3] = restPos.x;
                    sparkBasePos[p * 3 + 1] = 0.05;
                    sparkBasePos[p * 3 + 2] = restPos.z;

                    const theta = (p / sparkCount) * Math.PI * 2 + (rng() - 0.5) * 0.4;
                    const speed = 4.5 + rng() * 6.0;
                    const vUp = 2.0 + rng() * 4.5;
                    sparkVelocities[p * 3] = Math.cos(theta) * speed;
                    sparkVelocities[p * 3 + 1] = vUp;
                    sparkVelocities[p * 3 + 2] = Math.sin(theta) * speed;
                }

                const sparkGeo = new THREE.BufferGeometry();
                sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
                const sparkMat = new THREE.PointsMaterial({
                    map: sparkTexture,
                    size: 0.75,
                    transparent: true,
                    opacity: 0.0,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    color: new THREE.Color(0xfff0aa),
                });
                const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
                scene.add(sparkPoints);

                sparkBursts.push({
                    points: sparkPoints,
                    geo: sparkGeo,
                    mat: sparkMat,
                    velocities: sparkVelocities,
                    basePositions: sparkBasePos,
                    startTime: traj.duration,
                    duration: 0.95,
                    active: false,
                });

                // Soft Radial Smoke / Dust Puff
                const smokeGeo = new THREE.PlaneGeometry(baseRadius * 4.5, baseRadius * 4.5);
                const smokeMat = new THREE.MeshBasicMaterial({
                    map: smokeTexture,
                    transparent: true,
                    opacity: 0.0,
                    depthWrite: false,
                    blending: THREE.NormalBlending,
                    side: THREE.DoubleSide,
                });
                const smokeMesh = new THREE.Mesh(smokeGeo, smokeMat);
                smokeMesh.rotation.x = -Math.PI / 2;
                smokeMesh.position.set(restPos.x, 0.015, restPos.z);
                scene.add(smokeMesh);

                smokeBursts.push({
                    mesh: smokeMesh,
                    geo: smokeGeo,
                    mat: smokeMat,
                    startTime: traj.duration,
                    duration: 1.15,
                    active: false,
                });

                // Epicenter Burst Light & Dynamic Glint Orbit Light
                const epicLight = new THREE.PointLight(0xffdf77, 0, 16, 2.0);
                epicLight.position.set(restPos.x, 0.8, restPos.z);
                scene.add(epicLight);

                const glint = new THREE.PointLight(0xffffff, 0, 10, 2.0);
                glint.layers.set(1);
                scene.add(glint);

                nat20Lights.push({
                    epicenterLight: epicLight,
                    glintLight: glint,
                    startTime: traj.duration,
                    restX: restPos.x,
                    restZ: restPos.z,
                });
            }
        }

        const maxDuration = Math.max(...trajectories.map(t => t.duration));
        const startTime = performance.now();
        let completed = false;

        const animate = () => {
            const now = performance.now();
            const elapsed = (now - startTime) / 1000;

            for (let i = 0; i < count; i++) {
                const die = activeDice[i];
                const traj = die.trajectory;
                const progress = Math.min(1.0, elapsed / traj.duration);

                const indexFloat = progress * (traj.keyframes.length - 1);
                const i0 = Math.floor(indexFloat);
                const i1 = Math.min(traj.keyframes.length - 1, i0 + 1);
                const t = indexFloat - i0;

                const k0 = traj.keyframes[i0];
                const k1 = traj.keyframes[i1];

                tempPos0.set(k0.position[0], k0.position[1], k0.position[2]);
                tempPos1.set(k1.position[0], k1.position[1], k1.position[2]);
                die.mesh.position.lerpVectors(tempPos0, tempPos1, t);

                tempQuat0.set(k0.quaternion[0], k0.quaternion[1], k0.quaternion[2], k0.quaternion[3]);
                tempQuat1.set(k1.quaternion[0], k1.quaternion[1], k1.quaternion[2], k1.quaternion[3]);
                die.mesh.quaternion.slerpQuaternions(tempQuat0, tempQuat1, t);

                if (supportedDice[i].sides === 20 && supportedDice[i].result === 20 && elapsed >= traj.duration) {
                    const postT = elapsed - traj.duration;
                    const pulse = (Math.sin(postT * 6) + 1) / 2;
                    const mat = die.mesh.material as THREE.MeshStandardMaterial;
                    mat.emissiveIntensity = 0.85 + pulse * 0.95;
                }
            }

            // Animate Shockwaves
            for (let i = 0; i < shockwavePlanes.length; i++) {
                const sw = shockwavePlanes[i];
                const mat = shockwaveMaterials[i];
                const dt = elapsed - sw.startTime;
                if (dt >= 0 && dt <= sw.duration) {
                    const progress = dt / sw.duration;
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentRadius = sw.maxRadius * easeProgress;
                    sw.mesh.scale.set(currentRadius, currentRadius, 1);
                    mat.opacity = Math.sin(progress * Math.PI) * 0.95;
                } else {
                    mat.opacity = 0;
                }
            }

            // Animate Spark Bursts
            const gravity = -9.8;
            for (const sb of sparkBursts) {
                const dt = elapsed - sb.startTime;
                if (dt >= 0 && dt <= sb.duration) {
                    const progress = dt / sb.duration;
                    sb.mat.opacity = Math.sin(progress * Math.PI);

                    const posAttr = sb.geo.getAttribute('position') as THREE.BufferAttribute;
                    const posArray = posAttr.array as Float32Array;
                    const particleCount = posArray.length / 3;

                    for (let p = 0; p < particleCount; p++) {
                        posArray[p * 3] = sb.basePositions[p * 3] + sb.velocities[p * 3] * dt;
                        posArray[p * 3 + 1] = Math.max(0.02, sb.basePositions[p * 3 + 1] + sb.velocities[p * 3 + 1] * dt + 0.5 * gravity * dt * dt);
                        posArray[p * 3 + 2] = sb.basePositions[p * 3 + 2] + sb.velocities[p * 3 + 2] * dt;
                    }
                    posAttr.needsUpdate = true;
                } else {
                    sb.mat.opacity = 0;
                }
            }

            // Animate Smoke Bursts
            for (const smk of smokeBursts) {
                const dt = elapsed - smk.startTime;
                if (dt >= 0 && dt <= smk.duration) {
                    const progress = dt / smk.duration;
                    const scale = 1.0 + progress * 1.5;
                    smk.mesh.scale.set(scale, scale, 1);
                    smk.mat.opacity = (1 - progress) * 0.45;
                } else {
                    smk.mat.opacity = 0;
                }
            }

            // Animate Nat 20 dynamic lights and orbital specular flourish sweep
            let isGlintActive = false;
            for (const nl of nat20Lights) {
                const dt = elapsed - nl.startTime;
                const sweepDuration = 1.0;
                if (dt >= 0 && dt <= sweepDuration) {
                    isGlintActive = true;
                    const progress = dt / sweepDuration;

                    const flash = Math.max(0, 1 - dt / 0.75);
                    nl.epicenterLight.intensity = 5.5 * Math.pow(flash, 2.2);

                    const angle = -Math.PI * 0.75 + progress * Math.PI * 2.0;
                    const orbitRadius = 2.8;
                    const orbitHeight = 2.2 + Math.sin(progress * Math.PI) * 1.4;

                    nl.glintLight.position.set(
                        nl.restX + Math.cos(angle) * orbitRadius,
                        orbitHeight,
                        nl.restZ + Math.sin(angle) * orbitRadius,
                    );

                    const fadeIn = Math.min(1.0, progress / 0.15);
                    const fadeOut = Math.min(1.0, (1.0 - progress) / 0.20);
                    const envelope = fadeIn * fadeOut;

                    nl.glintLight.intensity = 22.0 * envelope;
                } else {
                    nl.epicenterLight.intensity = 0;
                    nl.glintLight.intensity = 0;
                }
            }

            renderer.clear();
            camera.layers.set(0);
            renderer.render(scene, camera);

            if (isGlintActive) {
                camera.layers.set(1);
                renderer.render(scene, camera);
            }

            const totalDuration = maxDuration + holdDuration;
            const fadeDuration = 0.5;
            if (elapsed >= totalDuration - fadeDuration) {
                const fadeProgress = Math.min(1.0, (elapsed - (totalDuration - fadeDuration)) / fadeDuration);
                const fadeOpacity = Math.max(0.0, 1.0 - fadeProgress);

                for (const die of activeDice) {
                    const mat = die.mesh.material as THREE.MeshStandardMaterial;
                    mat.opacity = fadeOpacity;
                    die.edgeMaterial.opacity = 0.90 * fadeOpacity;
                }
                if (shadowPlaneMat) {
                    shadowPlaneMat.opacity = 0.38 * fadeOpacity;
                }
            }

            if (elapsed >= totalDuration) {
                if (!completed) {
                    completed = true;
                    onComplete();
                    clearRoll();
                }
            } else {
                animFrameId = requestAnimationFrame(animate);
            }
        };

        animFrameId = requestAnimationFrame(animate);
    }

    $: if (mounted) {
        if (dice && dice.length > 0) {
            startRoll(dice, theme, seed);
        } else {
            clearRoll();
        }
    }

    $: if (mounted && camera && renderer && (width > 0 || height > 0)) {
        updateDimensions(width, height);
    }

    onMount(() => {
        if (!container) return;

        const initialW = (width > 0 ? width : window.innerWidth) || 1200;
        const initialH = (height > 0 ? height : window.innerHeight) || 800;
        const aspect = initialW / initialH;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100);
        camera.position.set(0, 18, 3.5);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
        });
        renderer.autoClear = false;
        renderer.setSize(initialW, initialH);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        ambientLight.layers.enable(1);
        scene.add(ambientLight);

        // Directional Key Light
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.85);
        dirLight.position.set(-8, 22, -10);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 55;
        const shadowExtent = 18;
        dirLight.shadow.camera.left = -shadowExtent;
        dirLight.shadow.camera.right = shadowExtent;
        dirLight.shadow.camera.top = shadowExtent;
        dirLight.shadow.camera.bottom = -shadowExtent;
        dirLight.shadow.bias = -0.0008;
        dirLight.layers.enable(1);
        scene.add(dirLight);

        // Fill Light
        const fillLight = new THREE.DirectionalLight(0xaaccff, 0.50);
        fillLight.position.set(10, 12, 10);
        fillLight.layers.enable(1);
        scene.add(fillLight);

        // Transparent shadow receiver plane (floor table)
        const shadowPlaneGeo = new THREE.PlaneGeometry(80, 80);
        shadowPlaneMat = new THREE.ShadowMaterial({
            opacity: 0.38,
        });
        const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = 0;
        shadowPlane.receiveShadow = true;
        scene.add(shadowPlane);

        // Reusable Particle Textures
        shockwaveTexture = createShockwaveTexture();
        sparkTexture = createSparkTexture();
        smokeTexture = createSmokeTexture();
        shockwavePlaneGeo = new THREE.PlaneGeometry(1, 1);

        // Eager Pre-warming: Generate all polyhedral textures and pre-compile shader pipelines ahead of time
        prewarmDiceAssets();
        const d20Def = getDieDefinition(20);
        if (d20Def) {
            const dummyMat = createDiceMaterial(20, d20Def.faceValues, DEFAULT_THEME);
            const dummyMesh = new THREE.Mesh(d20Def.geometry, dummyMat);
            scene.add(dummyMesh);
            renderer.compile(scene, camera);
            scene.remove(dummyMesh);
            dummyMat.dispose();
        }

        const handleResize = () => {
            if (!container) return;
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;
            updateDimensions(w, h);
        };
        window.addEventListener('resize', handleResize);

        mounted = true;

        if (dice && dice.length > 0) {
            startRoll(dice, theme, seed);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            clearRoll();

            shockwaveTexture.dispose();
            sparkTexture.dispose();
            smokeTexture.dispose();
            shockwavePlaneGeo.dispose();

            renderer.dispose();
            if (renderer.domElement.parentElement) {
                renderer.domElement.parentElement.removeChild(renderer.domElement);
            }
        };
    });

    onDestroy(() => {
        clearRoll();
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
