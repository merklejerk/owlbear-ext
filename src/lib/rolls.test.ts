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

        it('normalizes advantage roll expressions', () => {
            expect(normalizeRollExpression('d20a + d6 + d6')).toBe('d20a + 2d6');
            expect(normalizeRollExpression('d20a + 5')).toBe('d20a + 5');
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
        });

        it('handles fallback for invalid syntax', () => {
            expect(deleteLastTerm('something + else')).toBe('something');
        });
    });
});
