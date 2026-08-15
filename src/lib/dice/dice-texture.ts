import * as THREE from 'three';

export interface DiceTheme {
    backgroundColor: string;
    textColor: string;
    borderColor?: string;
    fontFamily?: string;
}

export const DEFAULT_THEME: DiceTheme = {
    backgroundColor: '#1c192b',
    textColor: '#e2d9f3',
    borderColor: '#4d3d75',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
};

/**
 * Procedurally generates a 2D canvas texture atlas with numbered cells for die faces.
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

    // Fill background
    ctx.fillStyle = theme.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fontName = theme.fontFamily ?? DEFAULT_THEME.fontFamily;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let f = 0; f < faceValues.length; f++) {
        const val = faceValues[f];
        const col = f % cols;
        const row = Math.floor(f / cols);

        const x = col * cellSize;
        const y = row * cellSize;
        const centerX = x + cellSize / 2;
        const centerY = y + cellSize / 2;

        // Draw solid cell background
        ctx.fillStyle = theme.backgroundColor;
        ctx.fillRect(x, y, cellSize, cellSize);

        // Draw face numeral
        const text = val.toString();
        const fontSize = Math.floor(cellSize * (text.length > 2 ? 0.35 : 0.45));
        ctx.font = `bold ${fontSize}px ${fontName}`;
        ctx.fillStyle = theme.textColor;
        ctx.fillText(text, centerX, centerY);

        // Add dot/underline for 6 and 9
        if (val === 6 || val === 9) {
            const underlineWidth = fontSize * 0.4;
            const underlineY = centerY + fontSize * 0.35;
            ctx.fillRect(centerX - underlineWidth / 2, underlineY, underlineWidth, Math.max(3, fontSize * 0.08));
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
        case 12:
            return createDiceTextureAtlas(faceValues, 4, 3, theme);
        case 20:
        default:
            return createDiceTextureAtlas(faceValues, 5, 4, theme);
    }
}
