import * as THREE from 'three';

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

// Deterministic gradient noise table
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
 * Procedurally generates a 2D canvas texture atlas with subtle, elegant marble resin
 * and high-contrast engraved inlaid numerals.
 */
export function createDiceTextureAtlas(
    faceValues: number[],
    cols: number,
    rows: number,
    theme: DiceTheme = DEFAULT_THEME,
    cellSize: number = 256,
): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Failed to create 2D canvas context for dice texture');
    }

    const baseHue = parseHueFromHsl(theme.backgroundColor, 265);
    const fontName = theme.fontFamily ?? DEFAULT_THEME.fontFamily;

    // Palette: Deep, saturated base tone + subtle translucent cloud + soft delicate vein
    const [rBase, gBase, bBase] = hslToRgb(baseHue, 65, 17);
    const [rMid, gMid, bMid] = hslToRgb(baseHue, 60, 24);
    const [rVein, gVein, bVein] = hslToRgb((baseHue + 20) % 360, 45, 42); // subtle smoky vein (not blinding white)

    for (let f = 0; f < faceValues.length; f++) {
        const val = faceValues[f];
        const col = f % cols;
        const row = Math.floor(f / cols);

        const startX = col * cellSize;
        const startY = row * cellSize;
        const centerX = startX + cellSize / 2;
        const centerY = startY + cellSize / 2;

        // 1. Subtle, Deep Marble Resin Background
        const imgData = ctx.createImageData(cellSize, cellSize);
        const data = imgData.data;

        const seedAngle = (f * 1.618) % (Math.PI * 2);
        const cosA = Math.cos(seedAngle);
        const sinA = Math.sin(seedAngle);
        const seedOffset = f * 13.7;

        for (let py = 0; py < cellSize; py++) {
            const ny = (py - cellSize / 2) / (cellSize * 0.5);
            for (let px = 0; px < cellSize; px++) {
                const nx = (px - cellSize / 2) / (cellSize * 0.5);

                const rx = (nx * cosA - ny * sinA) * 2.2 + seedOffset;
                const ry = (nx * sinA + ny * cosA) * 2.2 + seedOffset;

                // Subtle marble signal with restrained turbulence
                const turb = fbmTurbulence(rx, ry);
                const marbleSignal = Math.sin(rx * 1.8 + ry * 0.6 + 3.0 * turb);
                const normMarble = (marbleSignal + 1) * 0.5;

                // Soft vein curve
                const vein = Math.pow(normMarble, 2.5) * 0.35; // delicate 35% max vein opacity
                const cloud = normMarble * 0.25;

                // Facet edge shading
                const distFromCenter = Math.sqrt(nx * nx + ny * ny);
                const vignette = Math.max(0, 1 - Math.pow(distFromCenter * 0.9, 3.0));

                let r = rBase + (rMid - rBase) * cloud + (rVein - rMid) * vein;
                let g = gBase + (gMid - gBase) * cloud + (gVein - gMid) * vein;
                let b = bBase + (bMid - bBase) * cloud + (bVein - bMid) * vein;

                // Darken edges slightly for 3D bevel look
                r = r * (0.60 + 0.40 * vignette);
                g = g * (0.60 + 0.40 * vignette);
                b = b * (0.60 + 0.40 * vignette);

                const pIdx = (py * cellSize + px) * 4;
                data[pIdx] = Math.min(255, Math.max(0, r));
                data[pIdx + 1] = Math.min(255, Math.max(0, g));
                data[pIdx + 2] = Math.min(255, Math.max(0, b));
                data[pIdx + 3] = 255;
            }
        }

        ctx.putImageData(imgData, startX, startY);

        // 2. High-Contrast, Crisp Inlaid Numerals
        const text = val.toString();
        const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.36 : 0.46));
        ctx.font = `900 ${fontSize}px ${fontName}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Dark Engraved Trench Stroke (Guarantees 100% legibility on any surface)
        ctx.save();
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.lineWidth = Math.max(4, fontSize * 0.12);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.95)';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetY = 2.5;
        ctx.strokeText(text, centerX, centerY + 1);
        ctx.restore();

        // Inlaid Enamel/Gold Fill
        const textGrad = ctx.createLinearGradient(
            centerX,
            centerY - fontSize * 0.45,
            centerX,
            centerY + fontSize * 0.45,
        );
        textGrad.addColorStop(0, '#ffffff');
        textGrad.addColorStop(0.5, '#ffffff');
        textGrad.addColorStop(1, '#f0ede0');

        ctx.fillStyle = textGrad;
        ctx.fillText(text, centerX, centerY);

        // Underline for 6 and 9
        if (val === 6 || val === 9) {
            const underlineWidth = fontSize * 0.42;
            const underlineHeight = Math.max(4, fontSize * 0.10);
            const underlineY = centerY + fontSize * 0.36;
            const underlineX = centerX - underlineWidth / 2;

            // Trench outline
            ctx.save();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
            ctx.fillRect(underlineX - 2, underlineY - 1, underlineWidth + 4, underlineHeight + 3);
            ctx.restore();

            // Fill
            ctx.fillStyle = textGrad;
            ctx.fillRect(underlineX, underlineY, underlineWidth, underlineHeight);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
}

/**
 * Generates appropriate texture atlas for a given side count.
 */
export function getTextureForDie(
    sides: number,
    faceValues: number[],
    theme: DiceTheme = DEFAULT_THEME,
): THREE.CanvasTexture {
    switch (sides) {
        case 4:
            return createDiceTextureAtlas(faceValues, 2, 2, theme);
        case 6:
            return createDiceTextureAtlas(faceValues, 3, 2, theme);
        case 8:
            return createDiceTextureAtlas(faceValues, 4, 2, theme);
        case 10:
            return createDiceTextureAtlas(faceValues, 5, 2, theme);
        case 12:
            return createDiceTextureAtlas(faceValues, 4, 3, theme);
        case 20:
        default:
            return createDiceTextureAtlas(faceValues, 5, 4, theme);
    }
}
