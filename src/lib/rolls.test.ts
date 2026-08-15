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
    });
});
