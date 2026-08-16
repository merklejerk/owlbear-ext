import * as THREE from 'three';
import { D4_FACE_CORNERS } from './dice-geometries';

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

    let hue = 265; // Default purple/indigo

    if (playerColor && /^#[0-9a-fA-F]{6}$/.test(playerColor)) {
        const r = parseInt(playerColor.slice(1, 3), 16) / 255;
        const g = parseInt(playerColor.slice(3, 5), 16) / 255;
        const b = parseInt(playerColor.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        if (max !== min) {
            const d = max - min;
            switch (max) {
                case r: hue = (g - b) / d + (g < b ? 6 : 0); break;
                case g: hue = (b - r) / d + 2; break;
                case b: hue = (r - g) / d + 4; break;
            }
            hue = Math.round(hue * 60);
        }
    } else if (playerId) {
        let hash = 0;
        for (let i = 0; i < playerId.length; i++) {
            hash = (hash << 5) - hash + playerId.charCodeAt(i);
            hash |= 0;
        }
        hue = Math.abs(hash) % 360;
    }

    return {
        backgroundColor: `hsl(${hue}, 65%, 18%)`,
        textColor: '#ffffff',
        borderColor: `hsl(${hue}, 70%, 35%)`,
        accentColor: '#ffd700',
    };
}

/**
 * Extracts HSL components from a CSS HSL string or falls back.
 */
function parseHueFromHsl(hslStr: string, fallback: number = 260): number {
    const match = hslStr.match(/hsl\((\d+)/);
    return match ? parseInt(match[1], 10) : fallback;
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
 * Renders a crisp engraved numeral with drop shadow, border, and gradient fill.
 */
function drawFaceNumeral(
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

    // Dark Engraved Trench Stroke
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    ctx.lineWidth = Math.max(3, fontSize * 0.12);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;
    ctx.strokeText(text, 0, 1);
    ctx.restore();

    // Inlaid Enamel/Gold Fill
    const textGrad = ctx.createLinearGradient(0, -fontSize * 0.45, 0, fontSize * 0.45);
    textGrad.addColorStop(0, '#ffffff');
    textGrad.addColorStop(0.5, '#ffffff');
    textGrad.addColorStop(1, '#f0ede0');

    ctx.fillStyle = textGrad;
    ctx.fillText(text, 0, 0);

    if (showUnderline) {
        const underlineWidth = fontSize * 0.42;
        const underlineHeight = Math.max(3, fontSize * 0.10);
        const underlineY = fontSize * 0.36;
        const underlineX = -underlineWidth / 2;

        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
        ctx.fillRect(underlineX - 2, underlineY - 1, underlineWidth + 4, underlineHeight + 3);
        ctx.restore();

        ctx.fillStyle = textGrad;
        ctx.fillRect(underlineX, underlineY, underlineWidth, underlineHeight);
    }
    ctx.restore();
}

/**
 * Procedurally generates a 2D canvas texture atlas with subtle marble resin
 * and high-contrast engraved inlaid numerals.
 */
export function createDiceTextureAtlas(
    faceValues: number[],
    cols: number,
    rows: number,
    theme: DiceTheme = DEFAULT_THEME,
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

    const baseHue = parseHueFromHsl(theme.backgroundColor, 265);
    const fontName = theme.fontFamily ?? DEFAULT_THEME.fontFamily ?? 'Inter, sans-serif';

    // Palette: Deep, saturated base tone + subtle translucent cloud + soft delicate vein
    const [rBase, gBase, bBase] = hslToRgb(baseHue, 65, 17);
    const [rMid, gMid, bMid] = hslToRgb(baseHue, 60, 24);
    const [rVein, gVein, bVein] = hslToRgb((baseHue + 20) % 360, 45, 42);

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

        // 1. Fast Noise Generation onto offscreen buffer
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

                const vein = Math.pow(normMarble, 2.5) * 0.35;
                const cloud = normMarble * 0.25;

                const distFromCenter = Math.sqrt(nx * nx + ny * ny);
                const vignette = Math.max(0, 1 - Math.pow(distFromCenter * 0.9, 3.0));

                let r = rBase + (rMid - rBase) * cloud + (rVein - rMid) * vein;
                let g = gBase + (gMid - gBase) * cloud + (gVein - gMid) * vein;
                let b = bBase + (bMid - bBase) * cloud + (bVein - bMid) * vein;

                r = r * (0.60 + 0.40 * vignette);
                g = g * (0.60 + 0.40 * vignette);
                b = b * (0.60 + 0.40 * vignette);

                const pIdx = (py * noiseRes + px) * 4;
                data[pIdx] = Math.min(255, Math.max(0, r));
                data[pIdx + 1] = Math.min(255, Math.max(0, g));
                data[pIdx + 2] = Math.min(255, Math.max(0, b));
                data[pIdx + 3] = 255;
            }
        }

        offCtx.putImageData(noiseImgData, 0, 0);

        // Draw smoothly interpolated into the main canvas cell
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(offscreen, startX, startY, cellSize, cellSize);

        // 2. High-Contrast, Crisp Inlaid Numerals
        if (sides === 4 && f < D4_FACE_CORNERS.length) {
            const [topVal, blVal, brVal] = D4_FACE_CORNERS[f];
            const fontSize = Math.floor(cellSize * 0.22);

            // Top apex numeral
            drawFaceNumeral(ctx, topVal.toString(), centerX, centerY - cellSize * 0.22, fontSize, fontName, 0);

            // Bottom-left apex numeral
            drawFaceNumeral(ctx, blVal.toString(), centerX - cellSize * 0.19, centerY + cellSize * 0.11, fontSize, fontName, (-2 * Math.PI) / 3);

            // Bottom-right apex numeral
            drawFaceNumeral(ctx, brVal.toString(), centerX + cellSize * 0.19, centerY + cellSize * 0.11, fontSize, fontName, (2 * Math.PI) / 3);
        } else {
            const text = val.toString();
            const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.36 : 0.46));
            drawFaceNumeral(ctx, text, centerX, centerY, fontSize, fontName, 0, val === 6 || val === 9);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
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
            const fontSize = Math.floor(cellSize * 0.22);

            // Top apex numeral
            engraveHeightmapNumeral(hCtx, topVal.toString(), centerX, centerY - cellSize * 0.22, fontSize, 0);

            // Bottom-left apex numeral
            engraveHeightmapNumeral(hCtx, blVal.toString(), centerX - cellSize * 0.19, centerY + cellSize * 0.11, fontSize, (-2 * Math.PI) / 3);

            // Bottom-right apex numeral
            engraveHeightmapNumeral(hCtx, brVal.toString(), centerX + cellSize * 0.19, centerY + cellSize * 0.11, fontSize, (2 * Math.PI) / 3);
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
 * Generates or retrieves cached texture atlas for a given side count.
 */
export function getTextureForDie(
    sides: number,
    faceValues: number[],
    theme: DiceTheme = DEFAULT_THEME,
): THREE.CanvasTexture {
    const key = `${sides}_${theme.backgroundColor}_${theme.textColor}_${theme.fontFamily ?? ''}`;
    const cached = textureAtlasCache.get(key);
    if (cached) {
        return cached;
    }

    let texture: THREE.CanvasTexture;
    switch (sides) {
        case 4:
            texture = createDiceTextureAtlas(faceValues, 2, 2, theme, 256, 4);
            break;
        case 6:
            texture = createDiceTextureAtlas(faceValues, 3, 2, theme);
            break;
        case 8:
            texture = createDiceTextureAtlas(faceValues, 4, 2, theme);
            break;
        case 10:
            texture = createDiceTextureAtlas(faceValues, 5, 2, theme);
            break;
        case 12:
            texture = createDiceTextureAtlas(faceValues, 4, 3, theme);
            break;
        case 20:
        default:
            texture = createDiceTextureAtlas(faceValues, 5, 4, theme);
            break;
    }

    textureAtlasCache.set(key, texture);
    return texture;
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
            const fontSize = Math.floor(cellSize * 0.22);

            // Top apex numeral
            drawEmissiveNumeral(ctx, topVal.toString(), centerX, centerY - cellSize * 0.22, fontSize, fontName, 0);

            // Bottom-left apex numeral
            drawEmissiveNumeral(ctx, blVal.toString(), centerX - cellSize * 0.19, centerY + cellSize * 0.11, fontSize, fontName, (-2 * Math.PI) / 3);

            // Bottom-right apex numeral
            drawEmissiveNumeral(ctx, brVal.toString(), centerX + cellSize * 0.19, centerY + cellSize * 0.11, fontSize, fontName, (2 * Math.PI) / 3);
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
