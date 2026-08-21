import { describe, it, expect } from 'vitest';
import {
    parseRollSpec,
    getRollResult,
    isDiceGroup,
    isBinaryRoll,
    BinaryRollMode,
    type DiceGroup,
    type BinaryRoll,
    ParseRollError,
    extractDiceItems,
    extractRollBreakdown,
    normalizeRollExpression,
    deleteLastTerm,
} from './rolls';

describe('rolls parser & evaluator', () => {
    describe('basic literals & dice', () => {
        it('parses numeric literal', () => {
            const rolls = parseRollSpec('42');
            expect(rolls).toEqual([42]);
            expect(getRollResult(rolls[0])).toBe(42);
        });

        it('parses single die', () => {
            const rolls = parseRollSpec('d20');
            expect(rolls.length).toBe(1);
            expect(isDiceGroup(rolls[0])).toBe(true);
            const dg = rolls[0] as DiceGroup;
            expect(dg.sides).toBe(20);
            expect(dg.results.length).toBe(1);
        });

        it('parses multiple dice', () => {
            const rolls = parseRollSpec('3d6');
            expect(rolls.length).toBe(1);
            expect(isDiceGroup(rolls[0])).toBe(true);
            const dg = rolls[0] as DiceGroup;
            expect(dg.sides).toBe(6);
            expect(dg.results.length).toBe(3);
        });

        it('parses advantage and disadvantage', () => {
            const adv = parseRollSpec('d20a');
            expect(adv.length).toBe(1);
            expect(isBinaryRoll(adv[0])).toBe(true);
            expect((adv[0] as BinaryRoll).mode).toBe(BinaryRollMode.MAX);

            const dis = parseRollSpec('d20d');
            expect(dis.length).toBe(1);
            expect(isBinaryRoll(dis[0])).toBe(true);
            expect((dis[0] as BinaryRoll).mode).toBe(BinaryRollMode.MIN);
        });

        it('parses min and max functions', () => {
            const minRoll = parseRollSpec('min(10, 20)');
            expect(getRollResult(minRoll[0])).toBe(10);

            const maxRoll = parseRollSpec('max(10, 20)');
            expect(getRollResult(maxRoll[0])).toBe(20);
        });
    });

    describe('arithmetic & associativity', () => {
        it('evaluates simple addition', () => {
            const rolls = parseRollSpec('10+5');
            expect(getRollResult(rolls[0])).toBe(15);
        });

        it('evaluates simple subtraction', () => {
            const rolls = parseRollSpec('10-4');
            expect(getRollResult(rolls[0])).toBe(6);
        });

        it('correctly evaluates left-associative subtraction and addition (14-10+1 = 5)', () => {
            const rolls = parseRollSpec('14-10+1');
            expect(getRollResult(rolls[0])).toBe(5);
        });

        it('correctly evaluates multiple chained subtractions (10-5-2 = 3)', () => {
            const rolls = parseRollSpec('10-5-2');
            expect(getRollResult(rolls[0])).toBe(3);
        });

        it('correctly evaluates complex mixed arithmetic (20-10+5-2 = 13)', () => {
            const rolls = parseRollSpec('20-10+5-2');
            expect(getRollResult(rolls[0])).toBe(13);
        });

        it('handles dice with arithmetic expressions', () => {
            const rolls = parseRollSpec('1d20+5-2');
            expect(rolls.length).toBe(1);
            expect(isBinaryRoll(rolls[0])).toBe(true);

            const dieRoll: DiceGroup = { sides: 20, results: [10] };
            const testRoll: BinaryRoll = {
                mode: BinaryRollMode.SUB,
                rolls: [
                    {
                        mode: BinaryRollMode.ADD,
                        rolls: [dieRoll, 5],
                    },
                    2,
                ],
            };
            expect(getRollResult(testRoll)).toBe(13);
        });
    });

    describe('multiple specs and error handling', () => {
        it('parses multiple roll specs separated by commas or spaces', () => {
            const rollsComma = parseRollSpec('d20, 2d6+3');
            expect(rollsComma.length).toBe(2);

            const rollsSpace = parseRollSpec('d20 2d6');
            expect(rollsSpace.length).toBe(2);
        });

        it('throws ParseRollError on invalid syntax', () => {
            expect(() => parseRollSpec('invalid')).toThrow(ParseRollError);
            expect(() => parseRollSpec('d')).toThrow(ParseRollError);
        });

        it('extracts all individual dice items from complex roll trees', () => {
            const die1: DiceGroup = { sides: 20, results: [15] };
            const die2: DiceGroup = { sides: 6, results: [4, 6] };
            const complexRoll: BinaryRoll = {
                mode: BinaryRollMode.ADD,
                rolls: [die1, die2],
            };
            const extracted = extractDiceItems(complexRoll);
            expect(extracted).toEqual([
                { sides: 20, result: 15 },
                { sides: 6, result: 4 },
                { sides: 6, result: 6 },
            ]);
        });
    });

    describe('expression normalization', () => {
        it('normalizes repeated like dice into a single group', () => {
            expect(normalizeRollExpression('2d6 + d6 + d6')).toBe('4d6');
            expect(normalizeRollExpression('d20 + d20')).toBe('2d20');
        });

        it('preserves term insertion order for mixed dice expressions', () => {
            expect(normalizeRollExpression('d20 + d4 + d6')).toBe('d20 + d4 + d6');
            expect(normalizeRollExpression('d20 + d6 + d6 + d4')).toBe('d20 + 2d6 + d4');
        });

        it('normalizes constants and mixed arithmetic', () => {
            expect(normalizeRollExpression('2d6 + 5 + 3')).toBe('2d6 + 8');
            expect(normalizeRollExpression('d20 + 4 - 1')).toBe('d20 + 3');
            expect(normalizeRollExpression('d20 + 1 + 1')).toBe('d20 + 2');
            expect(normalizeRollExpression('d20 + 2 - 1')).toBe('d20 + 1');
            expect(normalizeRollExpression('d20 + 1 - 1')).toBe('d20');
            expect(normalizeRollExpression('1 - 1')).toBe('');
            expect(normalizeRollExpression('5 - 5')).toBe('');
        });

        it('normalizes advantage and disadvantage roll expressions', () => {
            expect(normalizeRollExpression('d20a + d6 + d6')).toBe('d20a + 2d6');
            expect(normalizeRollExpression('d20a + 5')).toBe('d20a + 5');
            expect(normalizeRollExpression('d20d + d6 + d6')).toBe('d20d + 2d6');
            expect(normalizeRollExpression('d20d + 3')).toBe('d20d + 3');
        });

        it('gracefully returns unparseable or partial input', () => {
            expect(normalizeRollExpression('invalid+')).toBe('invalid+');
        });
    });

    describe('deleteLastTerm', () => {
        it('steps down die counts before removing the term', () => {
            expect(deleteLastTerm('d20 + d4 + 3d6')).toBe('d20 + d4 + 2d6');
            expect(deleteLastTerm('d20 + d4 + 2d6')).toBe('d20 + d4 + d6');
            expect(deleteLastTerm('d20 + d4 + d6')).toBe('d20 + d4');
            expect(deleteLastTerm('d20 + d4')).toBe('d20');
            expect(deleteLastTerm('d20')).toBe('');
            expect(deleteLastTerm('')).toBe('');
        });

        it('handles trailing operators and spaces', () => {
            expect(deleteLastTerm('2d6 + 5 + ')).toBe('2d6');
            expect(deleteLastTerm('d20a + 3d8')).toBe('d20a + 2d8');
            expect(deleteLastTerm('d20a + d8')).toBe('d20a');
            expect(deleteLastTerm('d20d + 2d4')).toBe('d20d + d4');
            expect(deleteLastTerm('d20d + d4')).toBe('d20d');
            expect(deleteLastTerm('d20d')).toBe('');
        });

        it('handles fallback for invalid syntax', () => {
            expect(deleteLastTerm('something + else')).toBe('something');
        });
    });

    describe('extractRollBreakdown', () => {
        it('breaks down multi-dice with positive bonus (3d6 + 2 => 3, 3, 4 + 2 = 12)', () => {
            const roll: BinaryRoll = {
                mode: BinaryRollMode.ADD,
                rolls: [
                    { sides: 6, results: [3, 3, 4] },
                    2,
                ],
            };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.dice).toEqual([
                { sides: 6, result: 3, dropped: false },
                { sides: 6, result: 3, dropped: false },
                { sides: 6, result: 4, dropped: false },
            ]);
            expect(breakdown.diceSubtotal).toBe(10);
            expect(breakdown.modifier).toBe(2);
            expect(breakdown.total).toBe(12);
            expect(breakdown.isCritical).toBe(false);
            expect(breakdown.isFumble).toBe(false);
        });

        it('breaks down single die with negative modifier (1d20 - 3 => 15 - 3 = 12)', () => {
            const roll: BinaryRoll = {
                mode: BinaryRollMode.SUB,
                rolls: [
                    { sides: 20, results: [15] },
                    3,
                ],
            };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.dice).toEqual([{ sides: 20, result: 15, dropped: false }]);
            expect(breakdown.diceSubtotal).toBe(15);
            expect(breakdown.modifier).toBe(-3);
            expect(breakdown.total).toBe(12);
        });

        it('breaks down dice group without modifiers (4d6 => 3, 4, 5, 2 = 14)', () => {
            const roll: DiceGroup = { sides: 6, results: [3, 4, 5, 2] };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.dice.length).toBe(4);
            expect(breakdown.diceSubtotal).toBe(14);
            expect(breakdown.modifier).toBe(0);
            expect(breakdown.total).toBe(14);
        });

        it('breaks down advantage roll and marks lower die as dropped (d20a + 3 => 14 [kept] & 8 [dropped] + 3 = 17)', () => {
            const roll: BinaryRoll = {
                mode: BinaryRollMode.ADD,
                rolls: [
                    {
                        mode: BinaryRollMode.MAX,
                        rolls: [
                            { sides: 20, results: [14] },
                            { sides: 20, results: [8] },
                        ],
                    },
                    3,
                ],
            };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.kind).toBe('ADVANTAGE');
            expect(breakdown.dice).toEqual([
                { sides: 20, result: 14, dropped: false },
                { sides: 20, result: 8, dropped: true },
            ]);
            expect(breakdown.diceSubtotal).toBe(14);
            expect(breakdown.modifier).toBe(3);
            expect(breakdown.total).toBe(17);
        });

        it('breaks down disadvantage roll and marks higher die as dropped (d20d => 18 [dropped] & 9 [kept] = 9)', () => {
            const roll: BinaryRoll = {
                mode: BinaryRollMode.MIN,
                rolls: [
                    { sides: 20, results: [18] },
                    { sides: 20, results: [9] },
                ],
            };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.kind).toBe('DISADVANTAGE');
            expect(breakdown.dice).toEqual([
                { sides: 20, result: 18, dropped: true },
                { sides: 20, result: 9, dropped: false },
            ]);
            expect(breakdown.diceSubtotal).toBe(9);
            expect(breakdown.modifier).toBe(0);
            expect(breakdown.total).toBe(9);
        });

        it('detects natural 20 critical rolls', () => {
            const roll: DiceGroup = { sides: 20, results: [20] };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.isCritical).toBe(true);
            expect(breakdown.isFumble).toBe(false);
        });

        it('detects natural 1 fumble rolls', () => {
            const roll: DiceGroup = { sides: 20, results: [1] };
            const breakdown = extractRollBreakdown(roll);
            expect(breakdown.isCritical).toBe(false);
            expect(breakdown.isFumble).toBe(true);
        });
    });
});
