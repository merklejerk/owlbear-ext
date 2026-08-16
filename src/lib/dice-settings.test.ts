import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import { is3dDiceEnabled, set3dDiceEnabled, toggle3dDice, normalizeHexColor, getDiceColorOverride, setDiceColorOverride } from './dice-settings';

describe('dice-settings', () => {
    let mockStorage: Record<string, string> = {};

    beforeEach(() => {
        mockStorage = {};
        const localStorageMock = {
            getItem: (k: string) => mockStorage[k] ?? null,
            setItem: (k: string, v: string) => { mockStorage[k] = v; },
            removeItem: (k: string) => { delete mockStorage[k]; },
            clear: () => { mockStorage = {}; },
        };
        (globalThis as any).window = {
            localStorage: localStorageMock,
        };
    });

    afterAll(() => {
        delete (globalThis as any).window;
    });

    it('defaults to true when no preference is set', () => {
        expect(is3dDiceEnabled()).toBe(true);
    });

    it('sets and gets preference accurately', () => {
        set3dDiceEnabled(false);
        expect(is3dDiceEnabled()).toBe(false);

        set3dDiceEnabled(true);
        expect(is3dDiceEnabled()).toBe(true);
    });

    it('toggles preference correctly', () => {
        expect(is3dDiceEnabled()).toBe(true);
        const state1 = toggle3dDice();
        expect(state1).toBe(false);
        expect(is3dDiceEnabled()).toBe(false);

        const state2 = toggle3dDice();
        expect(state2).toBe(true);
        expect(is3dDiceEnabled()).toBe(true);
    });

    describe('hex color normalization and override', () => {
        it('normalizes 6-digit hex colors with and without hash', () => {
            expect(normalizeHexColor('#ff4400')).toBe('#ff4400');
            expect(normalizeHexColor('FF4400')).toBe('#ff4400');
            expect(normalizeHexColor('  #00bbff  ')).toBe('#00bbff');
        });

        it('normalizes 3-digit shorthand hex colors', () => {
            expect(normalizeHexColor('#f00')).toBe('#ff0000');
            expect(normalizeHexColor('abc')).toBe('#aabbcc');
        });

        it('returns null for invalid color formats', () => {
            expect(normalizeHexColor('')).toBeNull();
            expect(normalizeHexColor('blue')).toBeNull();
            expect(normalizeHexColor('#12345')).toBeNull();
            expect(normalizeHexColor('#1234567')).toBeNull();
            expect(normalizeHexColor('#gggggg')).toBeNull();
        });

        it('gets, sets, and clears dice color override globally and per-player', () => {
            expect(getDiceColorOverride()).toBeNull();
            expect(getDiceColorOverride('player-1')).toBeNull();

            // Set for player-1
            setDiceColorOverride('#4488ff', 'player-1');
            expect(getDiceColorOverride('player-1')).toBe('#4488ff');
            // player-2 has no override
            expect(getDiceColorOverride('player-2')).toBeNull();

            // Set for player-2
            setDiceColorOverride('#ff00aa', 'player-2');
            expect(getDiceColorOverride('player-1')).toBe('#4488ff');
            expect(getDiceColorOverride('player-2')).toBe('#ff00aa');

            // Clear player-1
            setDiceColorOverride(null, 'player-1');
            expect(getDiceColorOverride('player-1')).toBeNull();
            expect(getDiceColorOverride('player-2')).toBe('#ff00aa');
        });
    });
});
