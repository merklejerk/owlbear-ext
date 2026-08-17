import { describe, it, expect } from 'vitest';
import {
    createPlayerDiceTheme,
    DEFAULT_THEME,
    getNormalMapForDie,
    getTextureForDie,
    getEmissiveMapForDie,
    createDiceMaterial,
    getComplementaryNumeralPalette,
} from './dice-texture';

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

    it('generates an obsidian black theme from #000000', () => {
        const theme = createPlayerDiceTheme('player-black', '#000000');
        expect(theme.backgroundColor).toBe('hsl(0, 0%, 4%)');
        expect(theme.textColor).toBe('#ffffff');
    });

    it('generates an alabaster white theme from #ffffff', () => {
        const theme = createPlayerDiceTheme('player-white', '#ffffff');
        expect(theme.backgroundColor).toBe('hsl(0, 0%, 95%)');
        expect(theme.textColor).toBe('#ffffff');
    });

    it('preserves pastel and bright color lightness', () => {
        const theme = createPlayerDiceTheme('player-pink', '#ff8888');
        expect(theme.backgroundColor).toBe('hsl(0, 100%, 77%)');
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

    it('generates and memoizes shared procedural texture atlas for D4', () => {
        const d4Values = [1, 2, 3, 4];
        const tex1 = getTextureForDie(4, d4Values);
        const tex2 = getTextureForDie(4, d4Values);

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

    it('creates MeshStandardMaterial with shader tinting hooks', () => {
        const d20Values = Array.from({ length: 20 }, (_, i) => i + 1);
        const theme = createPlayerDiceTheme('player-test', '#4488ff');
        const mat = createDiceMaterial(20, d20Values, theme);

        expect(mat).toBeDefined();
        expect(mat.map).toBeDefined();
        expect(mat.normalMap).toBeDefined();
        expect(typeof mat.onBeforeCompile).toBe('function');
    });

    describe('harmonic complementary numeral palette', () => {
        it('inlays deep sapphire ink on bright yellow dice', () => {
            // Yellow hue = 60, high lightness
            const { numeralColor, trenchColor } = getComplementaryNumeralPalette(60, 100, 65);
            // Complementary hue (240 = blue) -> blue channel dominates
            expect(numeralColor.b).toBeGreaterThan(numeralColor.r);
            expect(numeralColor.b).toBeGreaterThan(numeralColor.g);
            expect(trenchColor).toBeDefined();
        });

        it('inlays gilded gold on deep ruby and sapphire dice', () => {
            // Ruby red hue = 0, low lightness
            const ruby = getComplementaryNumeralPalette(0, 90, 40);
            expect(ruby.numeralColor.r).toBeGreaterThan(0.6); // warm gold
            expect(ruby.numeralColor.g).toBeGreaterThan(0.6);

            // Sapphire blue hue = 220, low lightness
            const sapphire = getComplementaryNumeralPalette(220, 90, 40);
            expect(sapphire.numeralColor.r).toBeGreaterThan(0.6); // radiant gold
            expect(sapphire.numeralColor.g).toBeGreaterThan(0.6);
        });

        it('inlays radiant gold on obsidian black and deep slate ink on alabaster white', () => {
            const black = getComplementaryNumeralPalette(0, 0, 4);
            expect(black.numeralColor.r).toBeGreaterThan(0.6); // gold on black

            const white = getComplementaryNumeralPalette(0, 0, 95);
            expect(white.numeralColor.r).toBeLessThan(0.3); // deep slate on white
        });
    });
});
