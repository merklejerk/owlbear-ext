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
    import { createDiceMaterial, DEFAULT_THEME, type DiceTheme } from './dice-texture';
    import { generateMultiDiceTrajectories, type DiceTrajectory, MAX_3D_DICE, createMulberry32, hashStringToSeed } from './dice-physics';

    export let dice: RollItem[] = [{ sides: 20, result: 20 }];
    export let theme: DiceTheme = DEFAULT_THEME;
    export let holdDuration: number = 2.5;
    export let seed: string | number | null | undefined = undefined;
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

    /**
     * Procedurally generates a soft, wispy smoke puff / ash particle texture.
     */
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

        // Multiple overlapping soft radial puffs for cloudy volume
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
        return tex;
    }

    onMount(() => {
        if (!container) return;

        // Filter out unsupported dice and enforce MAX_3D_DICE ceiling
        const supportedDice = dice.filter(d => isSupportedDieSize(d.sides)).slice(0, MAX_3D_DICE);
        const count = supportedDice.length;
        if (count === 0) {
            onComplete();
            return;
        }

        const rng = seed !== undefined ? createMulberry32(hashStringToSeed(seed)) : Math.random;

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
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // Lighting - directional key with restrained ambient for rich normal map relief
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        ambientLight.layers.enable(1);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1.85);
        dirLight.position.set(-8, 22, -10); // Angled key light creates crisp micro-shadows along normals
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

        // Secondary soft fill light from opposite angle
        const fillLight = new THREE.DirectionalLight(0xaaccff, 0.50);
        fillLight.position.set(10, 12, 10);
        fillLight.layers.enable(1);
        scene.add(fillLight);

        // Transparent shadow receiver plane (floor table)
        const shadowPlaneGeo = new THREE.PlaneGeometry(80, 80);
        const shadowPlaneMat = new THREE.ShadowMaterial({
            opacity: 0.38,
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
            seed,
        });

        const activeDice: ActiveDie[] = [];
        for (let i = 0; i < count; i++) {
            const item = dice[i];
            const def = multiItems[i].die;
            const mat = createDiceMaterial(item.sides, def.faceValues, theme);

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

            mesh.layers.set(0);
            edgeLines.layers.set(0);

            scene.add(mesh);

            activeDice.push({
                mesh,
                edgeLines,
                edgeMaterial: lineMat,
                definition: def,
                trajectory: trajectories[i],
            });
        }

        // Special Effects: Nat 20 radiance & Nat 1 sad smoke puff
        const shockwaveTexture = createShockwaveTexture();
        const sparkTexture = createSparkTexture();
        const smokeTexture = createSmokeTexture();
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

        interface SmokeBurst {
            points: THREE.Points;
            geo: THREE.BufferGeometry;
            mat: THREE.PointsMaterial;
            initialPositions: Float32Array;
            velocities: Float32Array;
            startTime: number;
            duration: number;
            count: number;
            baseSize: number;
        }
        const smokeBursts: SmokeBurst[] = [];

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

            if (item.sides === 20 && item.result === 1) {
                const restX = lastFrame.position[0];
                const restY = lastFrame.position[1];
                const restZ = lastFrame.position[2];
                const settleTime = traj.duration;
                const baseR = def.radius;

                // 1. Billowing Volumetric Smoke Plume
                const smokeCount = 36;
                const smokePositions = new Float32Array(smokeCount * 3);
                const smokeInitPositions = new Float32Array(smokeCount * 3);
                const smokeVelocities = new Float32Array(smokeCount * 3);

                for (let s = 0; s < smokeCount; s++) {
                    const angle = Math.random() * Math.PI * 2;
                    const rOffset = Math.random() * baseR * 0.5;
                    const ox = Math.cos(angle) * rOffset;
                    const oy = restY + baseR * 0.2 + Math.random() * 0.2;
                    const oz = Math.sin(angle) * rOffset;

                    smokePositions[s * 3] = restX + ox;
                    smokePositions[s * 3 + 1] = oy;
                    smokePositions[s * 3 + 2] = restZ + oz;

                    smokeInitPositions[s * 3] = restX + ox;
                    smokeInitPositions[s * 3 + 1] = oy;
                    smokeInitPositions[s * 3 + 2] = restZ + oz;

                    const speed = 0.35 + Math.random() * 0.75;
                    smokeVelocities[s * 3] = Math.cos(angle) * speed;
                    smokeVelocities[s * 3 + 1] = 1.4 + Math.random() * 2.0; // Vigorous upward plume
                    smokeVelocities[s * 3 + 2] = Math.sin(angle) * speed;
                }

                const smokeGeo = new THREE.BufferGeometry();
                smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePositions, 3));

                const smokeMat = new THREE.PointsMaterial({
                    map: smokeTexture,
                    size: baseR * 1.8,
                    transparent: true,
                    opacity: 0,
                    depthWrite: false,
                });

                const smokePoints = new THREE.Points(smokeGeo, smokeMat);
                smokePoints.visible = false;
                scene.add(smokePoints);

                smokeBursts.push({
                    points: smokePoints,
                    geo: smokeGeo,
                    mat: smokeMat,
                    initialPositions: smokeInitPositions,
                    velocities: smokeVelocities,
                    startTime: settleTime,
                    duration: 1.55,
                    count: smokeCount,
                    baseSize: baseR * 1.8,
                });

                // 2. Dying Red/Orange Ember Sparks Sputtering Upward
                const emberCount = 14;
                const emberPositions = new Float32Array(emberCount * 3);
                const emberInitPositions = new Float32Array(emberCount * 3);
                const emberVelocities = new Float32Array(emberCount * 3);

                for (let e = 0; e < emberCount; e++) {
                    emberPositions[e * 3] = restX;
                    emberPositions[e * 3 + 1] = restY + baseR * 0.3;
                    emberPositions[e * 3 + 2] = restZ;

                    emberInitPositions[e * 3] = restX;
                    emberInitPositions[e * 3 + 1] = restY + baseR * 0.3;
                    emberInitPositions[e * 3 + 2] = restZ;

                    const angle = Math.random() * Math.PI * 2;
                    const speed = 0.5 + Math.random() * 1.0;
                    emberVelocities[e * 3] = Math.cos(angle) * speed;
                    emberVelocities[e * 3 + 1] = 1.0 + Math.random() * 1.6;
                    emberVelocities[e * 3 + 2] = Math.sin(angle) * speed;
                }

                const emberGeo = new THREE.BufferGeometry();
                emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));

                const emberMat = new THREE.PointsMaterial({
                    map: sparkTexture,
                    size: baseR * 0.32,
                    color: 0xff3b11,
                    transparent: true,
                    opacity: 0,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                });

                const emberPoints = new THREE.Points(emberGeo, emberMat);
                emberPoints.visible = false;
                scene.add(emberPoints);

                sparkBursts.push({
                    points: emberPoints,
                    geo: emberGeo,
                    mat: emberMat,
                    initialPositions: emberInitPositions,
                    velocities: emberVelocities,
                    startTime: settleTime,
                    duration: 0.85,
                    count: emberCount,
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

            camera.position.set(0, 18, 3.5);
            camera.lookAt(0, 0, 0);

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
                        const dt = elapsed - traj.duration;
                        const holdProgress = dt / holdDuration;
                        const impactFlash = Math.max(0, 1 - dt / 0.50);
                        const breathe = Math.sin(holdProgress * Math.PI * 2) * 0.15;

                        // Die is on Layer 1 during the isolated 1.0s glint sweep, Layer 0 otherwise
                        if (dt >= 0 && dt <= 1.0) {
                            die.mesh.layers.set(1);
                            die.edgeLines.layers.set(1);
                        } else {
                            die.mesh.layers.set(0);
                            die.edgeLines.layers.set(0);
                        }

                        // Radiant engraved numerals via pitch-black background emissive map
                        const mat = die.mesh.material as THREE.MeshStandardMaterial;
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

                    // Nat 1 resting state: sputtering ember numeral flicker, shudder, then cold desaturation
                    if (item.sides === 20 && item.result === 1) {
                        const dt = elapsed - traj.duration;
                        const fade = Math.max(0, 1 - dt / 0.85);

                        // Sputtering, dying red ember numeral flicker (like a dying neon sign / match)
                        const flicker = Math.sin(dt * 38) > 0 ? (0.7 + Math.random() * 0.3) : 0.1;
                        const mat = die.mesh.material as THREE.MeshStandardMaterial;
                        mat.emissive.setHex(0xef4444);
                        mat.emissiveIntensity = 2.2 * flicker * fade;

                        // Edge lines sputter crimson then extinguish into cold charcoal
                        die.edgeMaterial.color.setRGB(
                            0.75 * fade + 0.15,
                            0.15 * fade + 0.15,
                            0.15 * fade + 0.20,
                        );
                        die.edgeMaterial.opacity = 0.85 * fade + 0.25;

                        // Disappointed shudder on impact
                        if (dt >= 0 && dt <= 0.35) {
                            const quiver = Math.sin(dt * 42) * Math.exp(-dt * 12) * 0.04;
                            die.mesh.rotation.z += quiver;
                        }
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

            // Animate Nat 1 gentle smoke puff
            for (const smk of smokeBursts) {
                const dt = elapsed - smk.startTime;
                if (dt >= 0 && dt <= smk.duration) {
                    const posAttr = smk.geo.attributes.position;
                    const posArr = posAttr.array as Float32Array;

                    for (let s = 0; s < smk.count; s++) {
                        const idx = s * 3;
                        posArr[idx] = smk.initialPositions[idx] + smk.velocities[idx] * dt * 0.85;
                        const vy = smk.velocities[idx + 1];
                        posArr[idx + 1] = smk.initialPositions[idx + 1] + vy * dt * (1 - 0.3 * (dt / smk.duration));
                        posArr[idx + 2] = smk.initialPositions[idx + 2] + smk.velocities[idx + 2] * dt * 0.85;
                    }
                    posAttr.needsUpdate = true;
                    const progress = dt / smk.duration;
                    smk.mat.size = smk.baseSize * (1.0 + progress * 0.8);
                    const fadeIn = Math.min(1.0, progress / 0.15);
                    const fadeOut = Math.pow(1 - progress, 1.5);
                    smk.mat.opacity = 0.65 * fadeIn * fadeOut;
                    smk.points.visible = true;
                } else {
                    smk.points.visible = false;
                }
            }

            // Animate Nat 20 dynamic lights and orbital specular flourish sweep
            let isGlintActive = false;
            for (const nl of nat20Lights) {
                const dt = elapsed - nl.startTime;
                const sweepDuration = 1.0; // 1.0s full 360-degree flourishing pass
                if (dt >= 0 && dt <= sweepDuration) {
                    isGlintActive = true;
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
            // Pass 2 renders ONLY Nat 20 dice on Layer 1 during the active glint flourish window.
            renderer.clear();
            camera.layers.set(0);
            renderer.render(scene, camera);

            if (isGlintActive) {
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
            smokeTexture.dispose();
            shockwavePlaneGeo.dispose();
            for (const mat of shockwaveMaterials) {
                mat.dispose();
            }

            for (const sb of sparkBursts) {
                sb.geo.dispose();
                sb.mat.dispose();
            }

            for (const smk of smokeBursts) {
                smk.geo.dispose();
                smk.mat.dispose();
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
