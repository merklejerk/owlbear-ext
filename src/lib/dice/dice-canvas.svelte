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
    import { getTextureForDie, getNormalMapForDie, getEmissiveMapForDie, DEFAULT_THEME, type DiceTheme } from './dice-texture';
    import { generateMultiDiceTrajectories, type DiceTrajectory } from './dice-physics';

    export let dice: RollItem[] = [{ sides: 20, result: 20 }];
    export let theme: DiceTheme = DEFAULT_THEME;
    export let holdDuration: number = 2.5;
    export let onComplete: () => void = () => {};

    let container: HTMLDivElement;
    let animFrameId: number | null = null;

    interface ActiveDie {
        mesh: THREE.Mesh;
        edgeLines: THREE.LineSegments;
        edgeMaterial: THREE.LineBasicMaterial;
        definition: DieDefinition;
        trajectory: DiceTrajectory;
    }

    /**
     * Procedurally generates a detailed, textured arcane shockwave ring with
     * radial energy spokes, high-frequency caustic bands, and runic tick notches.
     */
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
        return tex;
    }

    /**
     * Procedurally generates a glowing diamond starburst ember texture.
     */
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
        return tex;
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
        renderer.autoClear = false;
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Lighting - directional key with restrained ambient for rich normal map relief
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        ambientLight.layers.enable(1);
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
        dirLight.layers.enable(1);
        scene.add(dirLight);

        const fillLight = new THREE.DirectionalLight(0xaac0e8, 0.45);
        fillLight.position.set(12, 14, 12);
        fillLight.layers.enable(1);
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
            const emissiveMap = getEmissiveMapForDie(item.sides, def.faceValues, theme.fontFamily);

            const mat = new THREE.MeshPhysicalMaterial({
                map: texture,
                normalMap,
                normalScale: new THREE.Vector2(0.85, 0.85),
                roughness: 0.20,
                metalness: 0.05,
                clearcoat: 1.0,
                clearcoatRoughness: 0.06,
                reflectivity: 0.95,
                emissiveMap,
                emissive: new THREE.Color(0xffd54f),
                emissiveIntensity: 0.0,
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

            if (item.sides === 20 && item.result === 20) {
                mesh.layers.set(1);
                edgeLines.layers.set(1);
            } else {
                mesh.layers.set(0);
                edgeLines.layers.set(0);
            }

            scene.add(mesh);

            activeDice.push({
                mesh,
                edgeLines,
                edgeMaterial: lineMat,
                definition: def,
                trajectory: trajectories[i],
            });
        }

        // Nat 20 Special Effects: Procedural textured shockwaves, spark burst, point lights & camera shake
        const shockwaveTexture = createShockwaveTexture();
        const sparkTexture = createSparkTexture();
        const shockwavePlaneGeo = new THREE.PlaneGeometry(1, 1);
        const shockwaveMeshes: Array<{
            mesh: THREE.Mesh;
            startTime: number;
            duration: number;
            startScale: number;
            endScale: number;
            maxOpacity: number;
            spinSpeed: number;
        }> = [];
        const shockwaveMaterials: THREE.MeshBasicMaterial[] = [];

        interface SparkBurst {
            points: THREE.Points;
            geo: THREE.BufferGeometry;
            mat: THREE.PointsMaterial;
            initialPositions: Float32Array;
            velocities: Float32Array;
            startTime: number;
            duration: number;
            count: number;
        }
        const sparkBursts: SparkBurst[] = [];
        const nat20Lights: Array<{
            epicenterLight: THREE.PointLight;
            glintLight: THREE.PointLight;
            restX: number;
            restZ: number;
            startTime: number;
        }> = [];

        for (let i = 0; i < count; i++) {
            const item = supportedDice[i];
            const def = multiItems[i].die;
            const traj = trajectories[i];
            const lastFrame = traj.keyframes[traj.keyframes.length - 1];

            if (item.sides === 20 && item.result === 20) {
                const restX = lastFrame.position[0];
                const restZ = lastFrame.position[2];
                const settleTime = traj.duration;
                const baseR = def.radius;

                // 1. Primary Textured Shockwave
                const mat1 = new THREE.MeshBasicMaterial({
                    map: shockwaveTexture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                });
                shockwaveMaterials.push(mat1);

                const mesh1 = new THREE.Mesh(shockwavePlaneGeo, mat1);
                mesh1.rotation.x = -Math.PI / 2;
                mesh1.position.set(restX, 0.015, restZ);
                mesh1.visible = false;
                scene.add(mesh1);

                shockwaveMeshes.push({
                    mesh: mesh1,
                    startTime: settleTime,
                    duration: 0.90,
                    startScale: baseR * 0.4,
                    endScale: baseR * 4.6,
                    maxOpacity: 0.98,
                    spinSpeed: 0.75,
                });

                // 2. Secondary Echo Wave (counter-rotating shimmer)
                const mat2 = new THREE.MeshBasicMaterial({
                    map: shockwaveTexture,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                });
                shockwaveMaterials.push(mat2);

                const mesh2 = new THREE.Mesh(shockwavePlaneGeo, mat2);
                mesh2.rotation.x = -Math.PI / 2;
                mesh2.position.set(restX, 0.018, restZ);
                mesh2.visible = false;
                scene.add(mesh2);

                shockwaveMeshes.push({
                    mesh: mesh2,
                    startTime: settleTime + 0.07,
                    duration: 0.70,
                    startScale: baseR * 0.2,
                    endScale: baseR * 3.0,
                    maxOpacity: 0.75,
                    spinSpeed: -1.2,
                });

                // 3. Golden Ember Spark Burst
                const sparkCount = 32;
                const sparkPositions = new Float32Array(sparkCount * 3);
                const sparkInitPositions = new Float32Array(sparkCount * 3);
                const sparkVelocities = new Float32Array(sparkCount * 3);

                for (let s = 0; s < sparkCount; s++) {
                    sparkPositions[s * 3] = restX;
                    sparkPositions[s * 3 + 1] = 0.08;
                    sparkPositions[s * 3 + 2] = restZ;

                    sparkInitPositions[s * 3] = restX;
                    sparkInitPositions[s * 3 + 1] = 0.08;
                    sparkInitPositions[s * 3 + 2] = restZ;

                    const angle = (s / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
                    const speed = (2.8 + Math.random() * 3.6) * baseR;
                    sparkVelocities[s * 3] = Math.cos(angle) * speed;
                    sparkVelocities[s * 3 + 1] = 2.2 + Math.random() * 3.2; // Upward loft
                    sparkVelocities[s * 3 + 2] = Math.sin(angle) * speed;
                }

                const sparkGeo = new THREE.BufferGeometry();
                sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));

                const sparkMat = new THREE.PointsMaterial({
                    map: sparkTexture,
                    size: baseR * 0.42,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                });

                const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
                sparkPoints.visible = false;
                scene.add(sparkPoints);

                sparkBursts.push({
                    points: sparkPoints,
                    geo: sparkGeo,
                    mat: sparkMat,
                    initialPositions: sparkInitPositions,
                    velocities: sparkVelocities,
                    startTime: settleTime,
                    duration: 0.85,
                    count: sparkCount,
                });

                // 4. Dynamic Epicenter Light & Close-Range Orbital Specular Glint Light (Layer 1 isolated)
                const pLight = new THREE.PointLight(0xffdf66, 0, 16, 1.6);
                pLight.position.set(restX, 1.4, restZ);
                pLight.layers.set(1);
                scene.add(pLight);

                const gLight = new THREE.PointLight(0xffffff, 0, 18, 1.2);
                gLight.position.set(restX, 3.0, restZ);
                gLight.layers.set(1);
                scene.add(gLight);

                nat20Lights.push({
                    epicenterLight: pLight,
                    glintLight: gLight,
                    restX,
                    restZ,
                    startTime: settleTime,
                });
            }
        }

        // Animation playback loop
        const startTime = performance.now();
        const maxDuration = Math.max(...activeDice.map(d => d.trajectory.duration));
        let completed = false;

        const pA = new THREE.Vector3();
        const pB = new THREE.Vector3();
        const qA = new THREE.Quaternion();
        const qB = new THREE.Quaternion();

        const animate = () => {
            const elapsed = (performance.now() - startTime) / 1000;

            // Camera Impact Punch (kinematic physical weight on Nat 20 landing)
            let maxCamShake = 0;
            for (let i = 0; i < count; i++) {
                const item = supportedDice[i];
                const die = activeDice[i];
                if (item.sides === 20 && item.result === 20) {
                    const dt = elapsed - die.trajectory.duration;
                    if (dt >= 0 && dt <= 0.38) {
                        const shake = Math.exp(-dt * 13) * Math.sin(dt * 36) * 0.38 * (baseRadius / 1.0);
                        if (Math.abs(shake) > Math.abs(maxCamShake)) {
                            maxCamShake = shake;
                        }
                    }
                }
            }

            if (Math.abs(maxCamShake) > 0.001) {
                camera.position.set(0, 18 - maxCamShake, 3.5 + maxCamShake * 0.4);
                camera.lookAt(0, 0, 0);
            } else {
                camera.position.set(0, 18, 3.5);
                camera.lookAt(0, 0, 0);
            }

            for (let i = 0; i < activeDice.length; i++) {
                const die = activeDice[i];
                const item = supportedDice[i];
                const traj = die.trajectory;
                const frames = traj.keyframes;

                if (elapsed >= traj.duration) {
                    // Resting state
                    const lastFrame = frames[frames.length - 1];
                    die.mesh.position.set(lastFrame.position[0], lastFrame.position[1], lastFrame.position[2]);
                    die.mesh.quaternion.set(lastFrame.quaternion[0], lastFrame.quaternion[1], lastFrame.quaternion[2], lastFrame.quaternion[3]);

                    // Nat 20 selective numeral ignition & facet flare (zero body tint wash)
                    if (item.sides === 20 && item.result === 20) {
                        const holdProgress = (elapsed - traj.duration) / holdDuration;
                        const impactFlash = Math.max(0, 1 - (elapsed - traj.duration) / 0.50);
                        const breathe = Math.sin(holdProgress * Math.PI * 2) * 0.15;

                        // Radiant engraved numerals via pitch-black background emissive map
                        const mat = die.mesh.material as THREE.MeshPhysicalMaterial;
                        mat.emissive.setHex(0xffdf77);
                        mat.emissiveIntensity = Math.min(2.5, 1.25 + 1.25 * impactFlash + breathe);

                        // Flash facet edges to brilliant white-gold on impact, then breathe in glowing solar gold
                        die.edgeMaterial.color.setRGB(
                            1.0,
                            0.82 + 0.18 * impactFlash,
                            0.35 + 0.65 * impactFlash,
                        );
                        die.edgeMaterial.opacity = Math.min(1.0, 0.85 + 0.15 * impactFlash + breathe);
                    }
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

            // Animate Nat 20 textured shockwaves
            for (const sw of shockwaveMeshes) {
                if (elapsed >= sw.startTime && elapsed <= sw.startTime + sw.duration) {
                    const t = (elapsed - sw.startTime) / sw.duration;
                    const ease = 1 - Math.pow(1 - t, 3); // Cubic ease out
                    const currentScale = sw.startScale + (sw.endScale - sw.startScale) * ease;
                    sw.mesh.scale.set(currentScale, currentScale, 1);
                    sw.mesh.rotation.z += sw.spinSpeed * 0.016; // Subtle energetic swirl
                    (sw.mesh.material as THREE.MeshBasicMaterial).opacity = sw.maxOpacity * (1 - t) * (1 - t);
                    sw.mesh.visible = true;
                } else {
                    sw.mesh.visible = false;
                }
            }

            // Animate Nat 20 spark particle bursts
            for (const sb of sparkBursts) {
                const dt = elapsed - sb.startTime;
                if (dt >= 0 && dt <= sb.duration) {
                    const posAttr = sb.geo.attributes.position;
                    const posArr = posAttr.array as Float32Array;
                    const gravity = 18.0;

                    for (let s = 0; s < sb.count; s++) {
                        const idx = s * 3;
                        posArr[idx] = sb.initialPositions[idx] + sb.velocities[idx] * dt;
                        const vy = sb.velocities[idx + 1];
                        posArr[idx + 1] = Math.max(0.02, sb.initialPositions[idx + 1] + vy * dt - 0.5 * gravity * dt * dt);
                        posArr[idx + 2] = sb.initialPositions[idx + 2] + sb.velocities[idx + 2] * dt;
                    }
                    posAttr.needsUpdate = true;
                    const progress = dt / sb.duration;
                    sb.mat.opacity = 0.95 * Math.pow(1 - progress, 1.8);
                    sb.points.visible = true;
                } else {
                    sb.points.visible = false;
                }
            }

            // Animate Nat 20 dynamic lights and orbital specular flourish sweep
            for (const nl of nat20Lights) {
                const dt = elapsed - nl.startTime;
                const sweepDuration = 1.0; // 1.0s full 360-degree flourishing pass
                if (dt >= 0 && dt <= sweepDuration) {
                    const progress = dt / sweepDuration;

                    // Epicenter ground flash
                    const flash = Math.max(0, 1 - dt / 0.75);
                    nl.epicenterLight.intensity = 5.5 * Math.pow(flash, 2.2);

                    // Orbit the specular light 360 degrees around the die at close range
                    // Starts from bottom-front (-135 deg), sweeps around back, and glints across top face
                    const angle = -Math.PI * 0.75 + progress * Math.PI * 2.0;
                    const orbitRadius = 2.8;
                    const orbitHeight = 2.2 + Math.sin(progress * Math.PI) * 1.4;

                    nl.glintLight.position.set(
                        nl.restX + Math.cos(angle) * orbitRadius,
                        orbitHeight,
                        nl.restZ + Math.sin(angle) * orbitRadius,
                    );

                    // Smooth intensity envelope: fast ease-in, sustained bright glint across the sweep, smooth ease-out
                    const fadeIn = Math.min(1.0, progress / 0.15);
                    const fadeOut = Math.min(1.0, (1.0 - progress) / 0.20);
                    const envelope = fadeIn * fadeOut;

                    nl.glintLight.intensity = 22.0 * envelope;
                } else {
                    nl.epicenterLight.intensity = 0;
                    nl.glintLight.intensity = 0;
                }
            }

            // Two-pass rendering: Pass 1 renders normal dice, floor, and particles on Layer 0.
            // Pass 2 renders ONLY Nat 20 dice on Layer 1 with their isolated orbital glint light.
            renderer.clear();
            camera.layers.set(0);
            renderer.render(scene, camera);

            if (nat20Lights.length > 0) {
                camera.layers.set(1);
                renderer.render(scene, camera);
            }

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
            shockwaveTexture.dispose();
            sparkTexture.dispose();
            shockwavePlaneGeo.dispose();
            for (const mat of shockwaveMaterials) {
                mat.dispose();
            }

            for (const sb of sparkBursts) {
                sb.geo.dispose();
                sb.mat.dispose();
            }

            for (const nl of nat20Lights) {
                scene.remove(nl.epicenterLight);
                nl.epicenterLight.dispose();
                scene.remove(nl.glintLight);
                nl.glintLight.dispose();
            }

            for (const die of activeDice) {
                die.mesh.geometry.dispose();
                die.edgeLines.geometry.dispose();
                die.edgeMaterial.dispose();
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
