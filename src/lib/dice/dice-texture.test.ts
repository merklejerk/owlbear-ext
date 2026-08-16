import { describe, it, expect } from 'vitest';
import { createPlayerDiceTheme, DEFAULT_THEME, getNormalMapForDie, getTextureForDie, getEmissiveMapForDie } from './dice-texture';

describe('dice theme generator', () => {
    it('returns default theme when no player info provided', () => {
        expect(createPlayerDiceTheme()).toEqual(DEFAULT_THEME);
        expect(createPlayerDiceTheme(null, null)).toEqual(DEFAULT_THEME);
    });

    it('generates a deterministic theme from player ID', () => {
        const theme1 = createPlayerDiceTheme('player-abc');
        const theme2 = createPlayerDiceTheme('player-abc');
        const theme3 = createPlayerDiceTheme('player-xyz');

        expect(theme1).toEqual(theme2);
        expect(theme1.backgroundColor).toContain('hsl(');
        expect(theme1.textColor).toBe('#ffffff');
        expect(theme1.backgroundColor).not.toEqual(theme3.backgroundColor);
    });

    it('generates a theme from player hex color', () => {
        const theme = createPlayerDiceTheme('player-123', '#ff0000');
        expect(theme.backgroundColor).toContain('hsl(0');
        expect(theme.textColor).toBe('#ffffff');
    });

    it('generates and memoizes a procedural normal map for dice', () => {
        const d6Values = [1, 2, 3, 4, 5, 6];
        const normal1 = getNormalMapForDie(6, d6Values);
        const normal2 = getNormalMapForDie(6, d6Values);

        expect(normal1).toBeDefined();
        expect(normal1).toBe(normal2); // verified memoized

        const d4Values = [1, 2, 3, 4];
        const d4Normal = getNormalMapForDie(4, d4Values);
        expect(d4Normal).toBeDefined();
    });

    it('generates and memoizes procedural texture atlas for D4', () => {
        const d4Values = [1, 2, 3, 4];
        const tex1 = getTextureForDie(4, d4Values, DEFAULT_THEME);
        const tex2 = getTextureForDie(4, d4Values, DEFAULT_THEME);

        expect(tex1).toBeDefined();
        expect(tex1).toBe(tex2);
    });

    it('generates and memoizes procedural emissive atlas for dice', () => {
        const d20Values = Array.from({ length: 20 }, (_, i) => i + 1);
        const em1 = getEmissiveMapForDie(20, d20Values);
        const em2 = getEmissiveMapForDie(20, d20Values);

        expect(em1).toBeDefined();
        expect(em1).toBe(em2);

        const d4Values = [1, 2, 3, 4];
        const d4Em = getEmissiveMapForDie(4, d4Values);
        expect(d4Em).toBeDefined();
    });
});
