import * as THREE from 'three';
import { D4_FACE_CORNERS, getDieDefinition } from './dice-geometries';

export interface DiceTheme {
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
    accentColor?: string;
    fontFamily?: string;
}

export const DEFAULT_THEME: DiceTheme = {
    backgroundColor: '#1c192b',
    textColor: '#ffffff',
    borderColor: '#4d3d75',
    accentColor: '#ffd700',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

// Texture caches to prevent redundant procedural canvas regeneration
const textureAtlasCache = new Map<string, THREE.CanvasTexture>();
const normalMapAtlasCache = new Map<number, THREE.CanvasTexture>();

/**
 * Creates a deterministic, polished dice theme based on player ID or OBR player color.
 */
export function createPlayerDiceTheme(playerId?: string | null, playerColor?: string | null): DiceTheme {
    if (!playerId && !playerColor) return DEFAULT_THEME;

    let h = 265;
    let s = 65;
    let l = 18;

    if (playerColor && /^#[0-9a-fA-F]{6}$/.test(playerColor)) {
        const r = parseInt(playerColor.slice(1, 3), 16) / 255;
        const g = parseInt(playerColor.slice(3, 5), 16) / 255;
        const b = parseInt(playerColor.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        const rawLightness = (max + min) / 2;

        if (d === 0) {
            h = 0;
            s = 0;
            l = Math.round(rawLightness * 100);
        } else {
            const rawSat = rawLightness > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h = Math.round(h * 60);
            s = Math.round(rawSat * 100);
            l = Math.round(rawLightness * 100);
        }

        // Faithfully preserve user's chosen lightness and saturation
        if (s < 5) {
            s = 0;
            l = Math.max(4, Math.min(95, l));
        } else {
            l = Math.max(6, Math.min(94, l));
        }
    } else if (playerId) {
        let hash = 0;
        for (let i = 0; i < playerId.length; i++) {
            hash = (hash << 5) - hash + playerId.charCodeAt(i);
            hash |= 0;
        }
        h = Math.abs(hash) % 360;
        s = 65;
        l = 18;
    }

    return {
        backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        textColor: '#ffffff',
        borderColor: `hsl(${h}, ${s}%, ${Math.min(90, Math.max(10, l > 50 ? l - 20 : l + 20))}%)`,
        accentColor: '#ffd700',
    };
}

/**
 * Extracts H, S, L components from a CSS HSL string.
 */
function parseHsl(hslStr: string): { h: number; s: number; l: number } {
    const match = hslStr.match(/hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/);
    if (match) {
        return {
            h: parseInt(match[1], 10),
            s: parseInt(match[2], 10),
            l: parseInt(match[3], 10),
        };
    }
    return { h: 265, s: 65, l: 18 };
}

// Deterministic permutation table for noise
const PERM = new Uint8Array(512);
const GRAD = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
];

// Seed noise table
for (let i = 0; i < 256; i++) {
    PERM[i] = (i * 151 + 73) & 255;
    PERM[i + 256] = PERM[i];
}

function dotGridGradient(ix: number, iy: number, x: number, y: number): number {
    const hash = PERM[(PERM[ix & 255] + iy) & 255] & 7;
    const [gx, gy] = GRAD[hash];
    const dx = x - ix;
    const dy = y - iy;
    return dx * gx + dy * gy;
}

function smoothstep(w: number): number {
    return w * w * (3 - 2 * w);
}

function perlin2D(x: number, y: number): number {
    const x0 = Math.floor(x);
    const x1 = x0 + 1;
    const y0 = Math.floor(y);
    const y1 = y0 + 1;

    const sx = smoothstep(x - x0);
    const sy = smoothstep(y - y0);

    const n0 = dotGridGradient(x0, y0, x, y);
    const n1 = dotGridGradient(x1, y0, x, y);
    const ix0 = n0 + sx * (n1 - n0);

    const n2 = dotGridGradient(x0, y1, x, y);
    const n3 = dotGridGradient(x1, y1, x, y);
    const ix1 = n2 + sx * (n3 - n2);

    return ix0 + sy * (ix1 - ix0);
}

function fbmTurbulence(x: number, y: number): number {
    let value = 0;
    let amplitude = 1.0;
    let frequency = 1.0;

    for (let o = 0; o < 3; o++) {
        value += amplitude * Math.abs(perlin2D(x * frequency, y * frequency));
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

/**
 * High-avalanche 32-bit integer hash returning float in [0, 1).
 */
function hash2D(x: number, y: number, seed: number): number {
    let h = Math.imul(x ^ seed, 0x27d4eb2d) ^ Math.imul(y ^ (seed * 31), 0x165667b1);
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/**
 * Generates natural, organic surface cavities and subtle tumbled waviness
 * with domain warping and irregular non-grid spacing.
 */
function stonePittingNoise(x: number, y: number, seed: number): number {
    // 1. Subtle broad surface undulation (tumbled orange-peel waviness)
    const undulation = (perlin2D(x * 1.6 + seed, y * 1.6) * 0.6 + perlin2D(x * 3.2, y * 3.2 + seed) * 0.4) * 4.5;

    // 2. Domain-warp coordinates to completely break grid alignment
    const warpX = perlin2D(x * 1.2 + seed * 1.7, y * 1.2) * 0.85;
    const warpY = perlin2D(x * 1.2 + 31.4, y * 1.2 + seed * 2.3) * 0.85;

    const wx = x + warpX;
    const wy = y + warpY;

    const scale = 2.4;
    const gx = Math.floor(wx * scale);
    const gy = Math.floor(wy * scale);

    let maxPitDepth = 0;

    for (let ox = -1; ox <= 1; ox++) {
        for (let oy = -1; oy <= 1; oy++) {
            const cx = gx + ox;
            const cy = gy + oy;

            // Pseudo-random selection with high-entropy hash
            const spawnVal = hash2D(cx, cy, seed + 101);
            // Only ~20% of cells have a micro-ding (sporadic natural distribution)
            if (spawnVal > 0.20) continue;

            const jx = cx + 0.15 + hash2D(cx, cy, seed + 202) * 0.70;
            const jy = cy + 0.15 + hash2D(cx, cy, seed + 303) * 0.70;
            const dx = wx * scale - jx;
            const dy = wy * scale - jy;
            const d = Math.hypot(dx, dy);

            // Variable pit radius and depth
            const pitRadius = 0.08 + hash2D(cx, cy, seed + 404) * 0.16;
            const pitDepth = 16 + hash2D(cx, cy, seed + 505) * 20;

            if (d < pitRadius) {
                const profile = Math.pow(1 - d / pitRadius, 1.8);
                const depth = profile * pitDepth;
                if (depth > maxPitDepth) {
                    maxPitDepth = depth;
                }
            }
        }
    }

    return undulation - maxPitDepth;
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    h = (h % 360) / 360;
    s = s / 100;
    l = l / 100;

    if (s === 0) {
        const val = Math.round(l * 255);
        return [val, val, val];
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const hue2rgb = (t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    return [
        Math.round(hue2rgb(h + 1 / 3) * 255),
        Math.round(hue2rgb(h) * 255),
        Math.round(hue2rgb(h - 1 / 3) * 255),
    ];
}

/**
 * Renders channel-masked numerals: Green (G=255) for numeral fill, Blue (B=255) for trench stroke.
 */
function drawFaceNumeralMask(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    fontSize: number,
    fontName: string,
    rotation: number = 0,
    showUnderline: boolean = false,
) {
    ctx.save();
    ctx.translate(x, y);
    if (rotation !== 0) {
        ctx.rotate(rotation);
    }
    ctx.font = `900 ${fontSize}px ${fontName}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Blue Channel: Engraved Trench Stroke (B = 255)
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    ctx.lineWidth = Math.max(4, fontSize * 0.14);
    ctx.strokeStyle = 'rgb(0, 0, 255)';
    ctx.strokeText(text, 0, 1);
    ctx.restore();

    // Green Channel: Inlaid Enamel Numeral Fill (G = 255)
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillText(text, 0, 0);

    if (showUnderline) {
        const underlineWidth = fontSize * 0.42;
        const underlineHeight = Math.max(3, fontSize * 0.10);
        const underlineY = fontSize * 0.36;
        const underlineX = -underlineWidth / 2;

        ctx.save();
        ctx.fillStyle = 'rgb(0, 0, 255)';
        ctx.fillRect(underlineX - 2, underlineY - 1, underlineWidth + 4, underlineHeight + 3);
        ctx.restore();

        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(underlineX, underlineY, underlineWidth, underlineHeight);
    }
    ctx.restore();
}

/**
 * Procedurally generates a single shared channel-masked 2D canvas texture atlas.
 * R Channel: Normalized grayscale marble resin turbulence.
 * G Channel: Crisp inlaid numeral mask.
 * B Channel: Engraved border trench shadow mask.
 */
export function createDiceTextureAtlas(
    faceValues: number[],
    cols: number,
    rows: number,
    fontName: string = 'Inter, sans-serif',
    cellSize: number = 256,
    sides?: number,
): THREE.CanvasTexture {
    if (typeof document === 'undefined') {
        return new THREE.CanvasTexture({} as HTMLCanvasElement);
    }

    const canvas = document.createElement('canvas');
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Failed to create 2D canvas context for dice texture');
    }

    // Reuse low-res offscreen canvas for super fast noise generation (16x faster)
    const noiseRes = 64;
    const offscreen = document.createElement('canvas');
    offscreen.width = noiseRes;
    offscreen.height = noiseRes;
    const offCtx = offscreen.getContext('2d')!;
    const noiseImgData = offCtx.createImageData(noiseRes, noiseRes);
    const data = noiseImgData.data;

    for (let f = 0; f < faceValues.length; f++) {
        const val = faceValues[f];
        const col = f % cols;
        const row = Math.floor(f / cols);

        const startX = col * cellSize;
        const startY = row * cellSize;
        const centerX = startX + cellSize / 2;
        const centerY = startY + cellSize / 2;

        // 1. Fast Noise Generation onto offscreen buffer: R channel only
        const seedAngle = (f * 1.618) % (Math.PI * 2);
        const cosA = Math.cos(seedAngle);
        const sinA = Math.sin(seedAngle);
        const seedOffset = f * 13.7;

        for (let py = 0; py < noiseRes; py++) {
            const ny = (py - noiseRes / 2) / (noiseRes * 0.5);
            for (let px = 0; px < noiseRes; px++) {
                const nx = (px - noiseRes / 2) / (noiseRes * 0.5);

                const rx = (nx * cosA - ny * sinA) * 2.2 + seedOffset;
                const ry = (nx * sinA + ny * cosA) * 2.2 + seedOffset;

                // Subtle marble signal with restrained turbulence
                const turb = fbmTurbulence(rx, ry);
                const marbleSignal = Math.sin(rx * 1.8 + ry * 0.6 + 3.0 * turb);
                const normMarble = (marbleSignal + 1) * 0.5;

                const veinRaw = Math.pow(normMarble, 3.8);
                const distFromCenter = Math.sqrt(nx * nx + ny * ny);
                const vignette = Math.max(0, 1 - Math.pow(distFromCenter * 0.9, 3.0));

                const cloudVal = Math.min(255, Math.max(0, Math.round(normMarble * 255 * (0.60 + 0.40 * vignette))));
                const veinVal = Math.min(255, Math.max(0, Math.round(veinRaw * 255)));

                const pIdx = (py * noiseRes + px) * 4;
                data[pIdx] = cloudVal;                                        // R: subtle translucent cloud swirl
                data[pIdx + 1] = 0;                                           // G: numeral mask
                data[pIdx + 2] = 0;                                           // B: trench mask
                data[pIdx + 3] = veinVal;                                     // A: delicate mineral vein mask
            }
        }

        offCtx.putImageData(noiseImgData, 0, 0);

        // Draw smoothly interpolated into the main canvas cell
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(offscreen, startX, startY, cellSize, cellSize);

        // 2. Crisp Inlaid Numerals & Trench Masks (G & B channels)
        if (sides === 4 && f < D4_FACE_CORNERS.length) {
            const [topVal, blVal, brVal] = D4_FACE_CORNERS[f];
            const fontSize = Math.floor(cellSize * 0.30);

            drawFaceNumeralMask(ctx, topVal.toString(), centerX, centerY - cellSize * 0.30, fontSize, fontName, 0);
            drawFaceNumeralMask(ctx, blVal.toString(), centerX - cellSize * 0.26, centerY + cellSize * 0.15, fontSize, fontName, (-2 * Math.PI) / 3);
            drawFaceNumeralMask(ctx, brVal.toString(), centerX + cellSize * 0.26, centerY + cellSize * 0.15, fontSize, fontName, (2 * Math.PI) / 3);
        } else {
            const text = val.toString();
            const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.36 : 0.46));
            drawFaceNumeralMask(ctx, text, centerX, centerY, fontSize, fontName, 0, val === 6 || val === 9);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 8;
    return texture;
}

/**
 * Engraves a recessed numeral groove into the normal heightmap buffer.
 */
function engraveHeightmapNumeral(
    hCtx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    fontSize: number,
    rotation: number = 0,
    showUnderline: boolean = false,
) {
    hCtx.save();
    hCtx.translate(x, y);
    if (rotation !== 0) {
        hCtx.rotate(rotation);
    }
    hCtx.font = `900 ${fontSize}px Inter, sans-serif`;
    hCtx.textAlign = 'center';
    hCtx.textBaseline = 'middle';

    hCtx.save();
    hCtx.lineJoin = 'round';
    hCtx.lineWidth = Math.max(4, fontSize * 0.12);
    hCtx.strokeStyle = 'rgba(15, 15, 15, 0.90)';
    hCtx.strokeText(text, 0, 1);

    hCtx.fillStyle = 'rgba(25, 25, 25, 0.95)';
    hCtx.fillText(text, 0, 1);
    hCtx.restore();

    if (showUnderline) {
        const underlineWidth = fontSize * 0.42;
        const underlineHeight = Math.max(4, fontSize * 0.10);
        const underlineY = fontSize * 0.36;
        const underlineX = -underlineWidth / 2;
        hCtx.fillStyle = 'rgba(25, 25, 25, 0.95)';
        hCtx.fillRect(underlineX - 2, underlineY - 1, underlineWidth + 4, underlineHeight + 2);
    }
    hCtx.restore();
}

/**
 * Procedurally generates a tangent-space normal map atlas featuring authentic tiny worn stone pits,
 * random tumbling hairline scratches, and engraved numeral bevels.
 */
export function createDiceNormalMapAtlas(
    faceValues: number[],
    cols: number,
    rows: number,
    cellSize: number = 256,
    sides?: number,
): THREE.CanvasTexture {
    if (typeof document === 'undefined') {
        return new THREE.CanvasTexture({} as HTMLCanvasElement);
    }

    const width = cols * cellSize;
    const height = rows * cellSize;

    // Step 1: Render heightmap with worn stone micro-pits and engraved numeral bevels
    const hCanvas = document.createElement('canvas');
    hCanvas.width = width;
    hCanvas.height = height;
    const hCtx = hCanvas.getContext('2d');
    if (!hCtx) {
        throw new Error('Failed to create heightmap canvas context');
    }

    // Neutral base height = 128
    hCtx.fillStyle = '#808080';
    hCtx.fillRect(0, 0, width, height);

    // Step 1a: Synthesize stone micro-pits on pixel heightmap
    for (let f = 0; f < faceValues.length; f++) {
        const col = f % cols;
        const row = Math.floor(f / cols);
        const startX = col * cellSize;
        const startY = row * cellSize;
        const seedOffset = f * 23.3;

        const cellHImg = hCtx.createImageData(cellSize, cellSize);
        const cData = cellHImg.data;

        for (let py = 0; py < cellSize; py++) {
            const ny = (py - cellSize / 2) / (cellSize * 0.5);
            for (let px = 0; px < cellSize; px++) {
                const nx = (px - cellSize / 2) / (cellSize * 0.5);

                const u = nx * 4.5 + seedOffset;
                const v = ny * 4.5 + seedOffset;

                // Micro-pits
                const pit = stonePittingNoise(u, v, f * 17);

                const baseH = 128 + pit;
                const idx = (py * cellSize + px) * 4;
                cData[idx] = Math.min(255, Math.max(0, baseH));
                cData[idx + 1] = Math.min(255, Math.max(0, baseH));
                cData[idx + 2] = Math.min(255, Math.max(0, baseH));
                cData[idx + 3] = 255;
            }
        }
        hCtx.putImageData(cellHImg, startX, startY);

        // Step 1b: Draw fine tumbling hairline scratches with organic random trajectories
        hCtx.save();
        hCtx.lineCap = 'round';
        const scratchCount = 14;
        for (let s = 0; s < scratchCount; s++) {
            const sx = startX + 15 + hash2D(s, f, 11) * (cellSize - 30);
            const sy = startY + 15 + hash2D(s, f, 22) * (cellSize - 30);
            const angle = hash2D(s, f, 33) * Math.PI * 2;
            const len = 6 + hash2D(s, f, 44) * 20;
            const isDeep = hash2D(s, f, 55) < 0.20;

            hCtx.beginPath();
            hCtx.moveTo(sx, sy);
            hCtx.lineTo(sx + Math.cos(angle) * len, sy + Math.sin(angle) * len);
            hCtx.lineWidth = isDeep ? 1.8 : 1.1;
            hCtx.strokeStyle = isDeep ? 'rgba(25, 25, 25, 0.70)' : 'rgba(45, 45, 45, 0.45)';
            hCtx.stroke();
        }
        hCtx.restore();
    }

    // Step 1c: Engrave recessed numerals into the heightmap
    for (let f = 0; f < faceValues.length; f++) {
        const val = faceValues[f];
        const col = f % cols;
        const row = Math.floor(f / cols);
        const centerX = col * cellSize + cellSize / 2;
        const centerY = row * cellSize + cellSize / 2;

        if (sides === 4 && f < D4_FACE_CORNERS.length) {
            const [topVal, blVal, brVal] = D4_FACE_CORNERS[f];
            const fontSize = Math.floor(cellSize * 0.30);

            // Top apex numeral
            engraveHeightmapNumeral(hCtx, topVal.toString(), centerX, centerY - cellSize * 0.30, fontSize, 0);

            // Bottom-left apex numeral
            engraveHeightmapNumeral(hCtx, blVal.toString(), centerX - cellSize * 0.26, centerY + cellSize * 0.15, fontSize, (-2 * Math.PI) / 3);

            // Bottom-right apex numeral
            engraveHeightmapNumeral(hCtx, brVal.toString(), centerX + cellSize * 0.26, centerY + cellSize * 0.15, fontSize, (2 * Math.PI) / 3);
        } else {
            const text = val.toString();
            const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.36 : 0.46));
            engraveHeightmapNumeral(hCtx, text, centerX, centerY, fontSize, 0, val === 6 || val === 9);
        }
    }

    const hData = hCtx.getImageData(0, 0, width, height).data;

    // Step 2: Convert heightmap into tangent-space normal map via Sobel filter
    const nCanvas = document.createElement('canvas');
    nCanvas.width = width;
    nCanvas.height = height;
    const nCtx = nCanvas.getContext('2d')!;
    const nImgData = nCtx.createImageData(width, height);
    const nData = nImgData.data;

    const normalStrength = 2.4;

    for (let y = 0; y < height; y++) {
        const yAbove = Math.max(0, y - 1);
        const yBelow = Math.min(height - 1, y + 1);

        for (let x = 0; x < width; x++) {
            const xLeft = Math.max(0, x - 1);
            const xRight = Math.min(width - 1, x + 1);

            // Read height from continuous heightmap
            const hL = hData[(y * width + xLeft) * 4] / 255;
            const hR = hData[(y * width + xRight) * 4] / 255;
            const hU = hData[(yAbove * width + x) * 4] / 255;
            const hD = hData[(yBelow * width + x) * 4] / 255;

            // Central difference gradient
            const dx = (hR - hL) * normalStrength;
            const dy = (hD - hU) * normalStrength;

            // Tangent space normal vector: (-dx, -dy, 1) normalized
            let nx = -dx;
            let ny = -dy;
            let nz = 1.0;
            const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
            nx /= len;
            ny /= len;
            nz /= len;

            const idx = (y * width + x) * 4;
            nData[idx] = Math.round((nx * 0.5 + 0.5) * 255);
            nData[idx + 1] = Math.round((ny * 0.5 + 0.5) * 255);
            nData[idx + 2] = Math.round((nz * 0.5 + 0.5) * 255);
            nData[idx + 3] = 255;
        }
    }

    nCtx.putImageData(nImgData, 0, 0);

    const normalTexture = new THREE.CanvasTexture(nCanvas);
    normalTexture.generateMipmaps = true;
    normalTexture.minFilter = THREE.LinearMipmapLinearFilter;
    normalTexture.magFilter = THREE.LinearFilter;
    normalTexture.anisotropy = 8;
    return normalTexture;
}

/**
 * Generates or retrieves cached normal map atlas for a given side count.
 */
export function getNormalMapForDie(
    sides: number,
    faceValues: number[],
): THREE.CanvasTexture {
    const cached = normalMapAtlasCache.get(sides);
    if (cached) {
        return cached;
    }

    let normalMap: THREE.CanvasTexture;
    switch (sides) {
        case 4:
            normalMap = createDiceNormalMapAtlas(faceValues, 2, 2, 256, 4);
            break;
        case 6:
            normalMap = createDiceNormalMapAtlas(faceValues, 3, 2);
            break;
        case 8:
            normalMap = createDiceNormalMapAtlas(faceValues, 4, 2);
            break;
        case 10:
            normalMap = createDiceNormalMapAtlas(faceValues, 5, 2);
            break;
        case 12:
            normalMap = createDiceNormalMapAtlas(faceValues, 4, 3);
            break;
        case 20:
        default:
            normalMap = createDiceNormalMapAtlas(faceValues, 5, 4);
            break;
    }

    normalMapAtlasCache.set(sides, normalMap);
    return normalMap;
}

/**
 * Generates or retrieves cached channel-masked texture atlas for a given side count.
 */
export function getTextureForDie(
    sides: number,
    faceValues: number[],
    fontName: string = 'Inter, sans-serif',
): THREE.CanvasTexture {
    const key = `${sides}_${fontName}`;
    const cached = textureAtlasCache.get(key);
    if (cached) {
        return cached;
    }

    let texture: THREE.CanvasTexture;
    switch (sides) {
        case 4:
            texture = createDiceTextureAtlas(faceValues, 2, 2, fontName, 256, 4);
            break;
        case 6:
            texture = createDiceTextureAtlas(faceValues, 3, 2, fontName);
            break;
        case 8:
            texture = createDiceTextureAtlas(faceValues, 4, 2, fontName);
            break;
        case 10:
            texture = createDiceTextureAtlas(faceValues, 5, 2, fontName);
            break;
        case 12:
            texture = createDiceTextureAtlas(faceValues, 4, 3, fontName);
            break;
        case 20:
        default:
            texture = createDiceTextureAtlas(faceValues, 5, 4, fontName);
            break;
    }

    textureAtlasCache.set(key, texture);
    return texture;
}

/**
 * Calculates a harmonic, high-contrast numeral and trench color palette tailored
 * to the die's body resin color rather than a generic binary black/white.
 */
export function getComplementaryNumeralPalette(h: number, s: number, l: number): {
    numeralColor: THREE.Color;
    trenchColor: THREE.Color;
} {
    let rNum: number, gNum: number, bNum: number;
    let rTr: number, gTr: number, bTr: number;

    if (s < 8) {
        // Achromatic (Obsidian Black to Carrara White)
        if (l > 55) {
            // White / Alabaster: Inlaid deep midnight slate ink
            [rNum, gNum, bNum] = hslToRgb(230, 25, 12);
            [rTr, gTr, bTr] = hslToRgb(230, 20, 4);
        } else {
            // Black / Charcoal: Inlaid radiant warm gold
            [rNum, gNum, bNum] = hslToRgb(46, 90, 78);
            [rTr, gTr, bTr] = hslToRgb(0, 0, 2);
        }
    } else if (l > 52) {
        // Light / Pastel / Solar Yellow: Inlaid complementary deep jewel tone
        const compHue = (h + 180) % 360;
        const compSat = Math.max(45, Math.min(75, s));
        [rNum, gNum, bNum] = hslToRgb(compHue, compSat, 13); // Deep rich complementary ink (e.g. midnight sapphire on yellow)
        [rTr, gTr, bTr] = hslToRgb(compHue, compSat, 4);
    } else {
        // Dark / Mid Jewel Resin: Inlaid radiant gilded solar gold or champagne gold
        let goldHue = 45;
        if (h >= 330 || h <= 35) {
            // Red / Ruby / Crimson: warm gilded champagne
            goldHue = 48;
        } else if (h >= 85 && h <= 175) {
            // Green / Emerald: imperial solar gold
            goldHue = 42;
        } else if (h > 175 && h < 330) {
            // Blue / Purple: brilliant celestial gold
            goldHue = 46;
        } else {
            // Amber / Orange / Golden: rich burnished gold
            goldHue = 45;
        }
        [rNum, gNum, bNum] = hslToRgb(goldHue, 90, 80);
        [rTr, gTr, bTr] = hslToRgb(h, Math.max(0, s - 15), 3);
    }

    return {
        numeralColor: new THREE.Color(rNum / 255, gNum / 255, bNum / 255),
        trenchColor: new THREE.Color(rTr / 255, gTr / 255, bTr / 255),
    };
}

/**
 * Calculates a high-contrast harmonious metallic facet edge trim color based on the die base color.
 * Enforces strong visual delineation across both light pastel and dark jewel resins.
 */
export function getFacetEdgeColor(theme: DiceTheme = DEFAULT_THEME): THREE.Color {
    if (theme.borderColor) {
        return new THREE.Color(theme.borderColor);
    }
    const { h, s, l } = parseHsl(theme.backgroundColor);

    if (s < 10) {
        // Achromatic / Neutral (Black to White)
        if (l > 50) {
            // Alabaster / White: High-contrast midnight obsidian slate edge trim
            const [r, g, b] = hslToRgb(230, 30, 10);
            return new THREE.Color(r / 255, g / 255, b / 255);
        } else {
            // Obsidian / Black: Brilliant radiant bright gold edge trim
            const [r, g, b] = hslToRgb(46, 95, 80);
            return new THREE.Color(r / 255, g / 255, b / 255);
        }
    }

    if (l > 50) {
        // Light / Pastel / Solar Yellow: High-contrast deep complementary midnight ink/metal trim
        const compHue = (h + 180) % 360;
        const compSat = Math.max(45, Math.min(80, s));
        const [r, g, b] = hslToRgb(compHue, compSat, 11);
        return new THREE.Color(r / 255, g / 255, b / 255);
    }

    // Dark / Mid Jewel tones: Gilded radiant solar / champagne gold trim with high luminous contrast
    let goldHue = 45;
    if (h >= 330 || h <= 35) {
        goldHue = 48; // Ruby -> warm champagne gold
    } else if (h >= 85 && h <= 175) {
        goldHue = 42; // Emerald -> solar imperial gold
    } else if (h > 175 && h < 330) {
        goldHue = 46; // Sapphire / Amethyst -> celestial gold
    } else {
        goldHue = 45; // Amber / Golden -> rich burnished gold
    }
    const [r, g, b] = hslToRgb(goldHue, 95, 80);
    return new THREE.Color(r / 255, g / 255, b / 255);
}

/**
 * Creates a high-performance MeshStandardMaterial with player color tinting injected via shader uniforms.
 * Shares the same single texture atlas across all players without redundant texture allocations.
 */
export function createDiceMaterial(
    sides: number,
    faceValues: number[],
    theme: DiceTheme = DEFAULT_THEME,
): THREE.MeshStandardMaterial {
    const fontName = theme.fontFamily ?? DEFAULT_THEME.fontFamily ?? 'Inter, sans-serif';
    const baseTexture = getTextureForDie(sides, faceValues, fontName);
    const normalMap = getNormalMapForDie(sides, faceValues);
    const emissiveMap = getEmissiveMapForDie(sides, faceValues, fontName);

    const { h, s, l } = parseHsl(theme.backgroundColor);

    let r1: number, g1: number, b1: number;
    let r2: number, g2: number, b2: number;
    let r3: number, g3: number, b3: number;

    const isLight = l > 50;

    if (s === 0) {
        // Achromatic / Monochromatic (Obsidian Black to Carrara White)
        const lCloud = isLight ? Math.max(5, l - 6) : Math.min(95, l + 6);
        const lVein = isLight ? Math.max(5, l - 16) : Math.min(95, l + 14);

        [r1, g1, b1] = hslToRgb(0, 0, l);
        [r2, g2, b2] = hslToRgb(0, 0, lCloud);
        [r3, g3, b3] = hslToRgb(0, 0, lVein);
    } else {
        // Saturated Tones (Deep Jewel, Mid, or Pastel)
        const lCloud = isLight ? Math.max(5, l - 6) : Math.min(95, l + 6);
        const lVein = isLight ? Math.max(5, l - 14) : Math.min(95, l + 14);
        const hVein = (h + (isLight ? -10 : 12) + 360) % 360;

        [r1, g1, b1] = hslToRgb(h, s, l);
        [r2, g2, b2] = hslToRgb(h, Math.max(0, s - 7), lCloud);
        [r3, g3, b3] = hslToRgb(hVein, Math.min(100, s + 5), lVein);
    }

    const bodyColor = new THREE.Color(r1 / 255, g1 / 255, b1 / 255);
    const cloudColor = new THREE.Color(r2 / 255, g2 / 255, b2 / 255);
    const veinColor = new THREE.Color(r3 / 255, g3 / 255, b3 / 255);

    // Compute harmonic complementary numeral & trench palette based on resin color
    const { numeralColor, trenchColor } = getComplementaryNumeralPalette(h, s, l);

    const mat = new THREE.MeshStandardMaterial({
        map: baseTexture,
        normalMap,
        normalScale: new THREE.Vector2(0.85, 0.85),
        roughness: 0.18,
        metalness: 0.05,
        transparent: true,
        opacity: 1.0,
        emissiveMap,
        emissive: new THREE.Color(0xffd54f),
        emissiveIntensity: 0.0,
    });

    mat.onBeforeCompile = (shader) => {
        shader.uniforms.uBodyColor = { value: bodyColor };
        shader.uniforms.uCloudColor = { value: cloudColor };
        shader.uniforms.uVeinColor = { value: veinColor };
        shader.uniforms.uNumeralColor = { value: numeralColor };
        shader.uniforms.uTrenchColor = { value: trenchColor };

        shader.fragmentShader = `
            uniform vec3 uBodyColor;
            uniform vec3 uCloudColor;
            uniform vec3 uVeinColor;
            uniform vec3 uNumeralColor;
            uniform vec3 uTrenchColor;
        ` + shader.fragmentShader;

        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <map_fragment>',
            `
            #ifdef USE_MAP
                vec4 sampledMap = texture2D(map, vMapUv);
                float cloudNoise  = sampledMap.r; // 0.0 - 1.0 soft translucent cloud swirl
                float numeralMask = sampledMap.g; // 1.0 inside numeral, 0.0 outside
                float trenchMask  = sampledMap.b; // 1.0 inside engraved trench
                float veinNoise   = sampledMap.a; // 0.0 - 1.0 delicate mineral vein

                // 1. Subtle translucent resin body with organic cloud variation
                vec3 resinCol = mix(uBodyColor, uCloudColor, cloudNoise * 0.40);

                // 2. Soft, delicate mineral vein wisps
                float veinFactor = smoothstep(0.35, 0.95, veinNoise);
                resinCol = mix(resinCol, uVeinColor, veinFactor * 0.40);

                // 3. Dark engraved trench shadow
                vec3 finalCol = mix(resinCol, uTrenchColor, trenchMask * (1.0 - numeralMask));

                // 4. Inlaid high-contrast numerals
                finalCol = mix(finalCol, uNumeralColor, numeralMask);

                diffuseColor = vec4(finalCol, opacity);
            #endif
            `,
        );
    };

    return mat;
}

/**
 * Draws a luminous white/gold numeral on a pitch-black emissive map canvas.
 */
function drawEmissiveNumeral(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    fontSize: number,
    fontName: string,
    rotation: number = 0,
    showUnderline: boolean = false,
) {
    ctx.save();
    ctx.translate(x, y);
    if (rotation !== 0) {
        ctx.rotate(rotation);
    }
    ctx.font = `900 ${fontSize}px ${fontName}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Radiant outer glow
    ctx.save();
    ctx.shadowColor = '#ffd54f';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 0, 0);
    ctx.restore();

    // Incandescent solid white-gold core
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 0, 0);

    if (showUnderline) {
        const underlineWidth = fontSize * 0.42;
        const underlineHeight = Math.max(3, fontSize * 0.10);
        const underlineY = fontSize * 0.36;
        const underlineX = -underlineWidth / 2;

        ctx.save();
        ctx.shadowColor = '#ffd54f';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(underlineX, underlineY, underlineWidth, underlineHeight);
        ctx.restore();
    }
    ctx.restore();
}

/**
 * Procedurally generates an emissive atlas with a pitch-black background (#000000)
 * where only the engraved numerals and facet inlays emit light.
 */
export function createDiceEmissiveAtlas(
    faceValues: number[],
    cols: number,
    rows: number,
    fontName: string = 'Inter, sans-serif',
    cellSize: number = 256,
    sides?: number,
): THREE.CanvasTexture {
    if (typeof document === 'undefined') {
        return new THREE.CanvasTexture({} as HTMLCanvasElement);
    }

    const canvas = document.createElement('canvas');
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Failed to create 2D canvas context for dice emissive atlas');
    }

    // Pitch black background (zero emissive tint on marble resin body)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let f = 0; f < faceValues.length; f++) {
        const val = faceValues[f];
        const col = f % cols;
        const row = Math.floor(f / cols);

        const startX = col * cellSize;
        const startY = row * cellSize;
        const centerX = startX + cellSize / 2;
        const centerY = startY + cellSize / 2;

        if (sides === 4 && f < D4_FACE_CORNERS.length) {
            const [topVal, blVal, brVal] = D4_FACE_CORNERS[f];
            const fontSize = Math.floor(cellSize * 0.30);

            // Top apex numeral
            drawEmissiveNumeral(ctx, topVal.toString(), centerX, centerY - cellSize * 0.30, fontSize, fontName, 0);

            // Bottom-left apex numeral
            drawEmissiveNumeral(ctx, blVal.toString(), centerX - cellSize * 0.26, centerY + cellSize * 0.15, fontSize, fontName, (-2 * Math.PI) / 3);

            // Bottom-right apex numeral
            drawEmissiveNumeral(ctx, brVal.toString(), centerX + cellSize * 0.26, centerY + cellSize * 0.15, fontSize, fontName, (2 * Math.PI) / 3);
        } else {
            const text = val.toString();
            const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.36 : 0.46));
            drawEmissiveNumeral(ctx, text, centerX, centerY, fontSize, fontName, 0, val === 6 || val === 9);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 8;
    return texture;
}

const emissiveAtlasCache = new Map<string, THREE.CanvasTexture>();

/**
 * Generates or retrieves cached emissive atlas for a given side count.
 */
export function getEmissiveMapForDie(
    sides: number,
    faceValues: number[],
    fontName: string = 'Inter, sans-serif',
): THREE.CanvasTexture {
    const key = `${sides}_${fontName}`;
    const cached = emissiveAtlasCache.get(key);
    if (cached) {
        return cached;
    }

    let emissiveMap: THREE.CanvasTexture;
    switch (sides) {
        case 4:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 2, 2, fontName, 256, 4);
            break;
        case 6:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 3, 2, fontName);
            break;
        case 8:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 4, 2, fontName);
            break;
        case 10:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 5, 2, fontName);
            break;
        case 12:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 4, 3, fontName);
            break;
        case 20:
        default:
            emissiveMap = createDiceEmissiveAtlas(faceValues, 5, 4, fontName);
            break;
    }

    emissiveAtlasCache.set(key, emissiveMap);
    return emissiveMap;
}

/**
 * Eagerly pre-warms geometries, channel-masked texture atlases, normal maps, and emissive maps
 * for all 6 standard tabletop polyhedral dice (D4, D6, D8, D10, D12, D20).
 */
export function prewarmDiceAssets(fontName?: string): void {
    const sidesList = [4, 6, 8, 10, 12, 20];
    for (const sides of sidesList) {
        const def = getDieDefinition(sides);
        if (def) {
            getTextureForDie(sides, def.faceValues, fontName);
            getNormalMapForDie(sides, def.faceValues);
            getEmissiveMapForDie(sides, def.faceValues, fontName);
        }
    }
}
