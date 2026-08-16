import ohm from '$lib/ohm/rolls.ohm-bundle';

export interface DiceGroup {
    sides: number;
    results: number[];
}

export enum BinaryRollMode {
    MIN = 'MIN',
    MAX = 'MAX',
    ADD = 'ADD',
    SUB = 'SUB',
};

export interface BinaryRoll {
    mode: BinaryRollMode;
    rolls: [Roll, Roll];
}

export type Roll = DiceGroup | BinaryRoll | number;

export function isBinaryRoll(r: Roll): r is BinaryRoll {
    return typeof(r) === 'object' && !!(r as any).mode;
}

export function isArithmeticRoll(r: Roll): r is BinaryRoll & { mode: BinaryRollMode.ADD | BinaryRollMode.SUB } {
    return isBinaryRoll(r) && ['ADD', 'SUB'].includes(r.mode);
}

export function isMinMaxRoll(r: Roll): r is BinaryRoll & { mode: BinaryRollMode.MIN | BinaryRollMode.MAX } {
    return isBinaryRoll(r) && ['MIN', 'MAX'].includes(r.mode);
}

export function isDiceGroup(r: Roll): r is DiceGroup {
    return typeof(r) === 'object' && Array.isArray((r as any).results);
}

export function isEmptyRoll(roll: Roll): boolean {
    if (isBinaryRoll(roll)) {
        return roll.rolls.every(r => isEmptyRoll(r));
    }
    if (isDiceGroup(roll)) {
        return roll.results.length === 0;
    }
    return roll === 0;
}

export function getRollResult(roll: Roll, parent?: BinaryRoll): number {
    if (isBinaryRoll(roll)) {
        if (roll.mode === 'ADD') {
            return getRollResult(roll.rolls[0]) + getRollResult(roll.rolls[1]);
        } else if (roll.mode === 'SUB') {
            return getRollResult(roll.rolls[0]) - getRollResult(roll.rolls[1]);
        } else if (roll.mode === 'MIN') {
            return Math.min(getRollResult(roll.rolls[0]), getRollResult(roll.rolls[1]));
        } else {
            return Math.max(getRollResult(roll.rolls[0]), getRollResult(roll.rolls[1]));
        }
    } else if (isDiceGroup(roll)) {
        return roll.results.reduce((a, v) => v + a, 0);
    }
    return roll;
}

export function reroll<T extends Roll>(roll: T): T {
    if (isBinaryRoll(roll)) {
        for (const r of roll.rolls) {
            reroll(r);
        }
    } else if (isDiceGroup(roll)) {
        roll.results = roll.results.map(r => rollDice(roll.sides));
    }
    return roll;
}

export function rollDice(sides: number): number {
    return Math.ceil(Math.random() * sides);
}

export function isCriticalRoll(roll: Roll): boolean {
    if (isBinaryRoll(roll)) {
        if (roll.mode === 'MIN') {
            return roll.rolls.every(r => isCriticalRoll(r));
        }
        return roll.rolls.some(r => isCriticalRoll(r));
    }
    if (isDiceGroup(roll)) {
        return roll.sides === 20 && roll.results.some(r => r === 20);
    }
    return false;
}

export function simplifyRoll(roll: Roll): Roll {
    if (isBinaryRoll(roll)) {
        roll = {
            ...roll,
            rolls: roll.rolls.map(r => simplifyRoll(r)) as [Roll, Roll],
        };
        if (roll.mode === 'ADD') {
            if (roll.rolls.every(r => isDiceGroup(r))) {
                const groups = roll.rolls as DiceGroup[];
                if (groups[0].sides === groups[1].sides) {
                    return {
                        sides: groups[0].sides,
                        results: groups.map(r => r.results).flat(1),
                    };
                }
            } else if (roll.rolls.every(r => typeof r === 'number')) {
                const literals = roll.rolls as number[];
                return literals[0] + literals[1];
            }
        } else if (roll.mode === 'SUB') {
            if (roll.rolls.every(r => typeof r === 'number')) {
                const literals = roll.rolls as number[];
                return literals[0] - literals[1];
            }
        }
    } else if (isDiceGroup(roll)) {
        if (roll.sides === 1) {
            return roll.results.length;
        }
        if (roll.sides === 0) {
            return roll.results.reduce((a, v) => a + v, 0);
        }
    }
    return roll;
}

interface FlatTerm {
    term: Roll;
    sign: 1 | -1;
}

function flattenAdditiveTerms(roll: Roll, sign: 1 | -1 = 1): FlatTerm[] {
    if (isBinaryRoll(roll) && (roll.mode === BinaryRollMode.ADD || roll.mode === BinaryRollMode.SUB)) {
        const leftTerms = flattenAdditiveTerms(roll.rolls[0], sign);
        const rightSign = roll.mode === BinaryRollMode.ADD ? sign : (sign === 1 ? -1 : 1);
        const rightTerms = flattenAdditiveTerms(roll.rolls[1], rightSign);
        return [...leftTerms, ...rightTerms];
    }
    return [{ term: simplifyRoll(roll), sign }];
}

/**
 * Normalizes an additive roll tree by combining like dice groups and constant literals.
 */
export function normalizeRoll(roll: Roll): Roll {
    if (!isBinaryRoll(roll) || (roll.mode !== BinaryRollMode.ADD && roll.mode !== BinaryRollMode.SUB)) {
        return simplifyRoll(roll);
    }

    const flat = flattenAdditiveTerms(roll);
    const diceCounts = new Map<number, number>();
    let constant = 0;
    const otherTerms: FlatTerm[] = [];

    for (const item of flat) {
        if (typeof item.term === 'number') {
            constant += item.sign * item.term;
        } else if (isDiceGroup(item.term) && item.sign === 1) {
            const count = item.term.results.length;
            diceCounts.set(item.term.sides, (diceCounts.get(item.term.sides) ?? 0) + count);
        } else {
            otherTerms.push(item);
        }
    }

    const combinedTerms: FlatTerm[] = [];

    // Add grouped dice terms
    const sortedSides = Array.from(diceCounts.keys()).sort((a, b) => b - a);
    for (const sides of sortedSides) {
        const count = diceCounts.get(sides)!;
        if (count > 0) {
            combinedTerms.push({
                term: { sides, results: new Array(count).fill(0) },
                sign: 1,
            });
        }
    }

    // Add other terms
    combinedTerms.push(...otherTerms);

    // Sort terms by dice sides descending so d20a, d20 come before smaller dice
    function getTermSides(term: Roll): number {
        if (isDiceGroup(term)) {
            return term.sides;
        }
        if (isBinaryRoll(term)) {
            if ((term.mode === BinaryRollMode.MAX || term.mode === BinaryRollMode.MIN) &&
                isDiceGroup(term.rolls[0])) {
                return term.rolls[0].sides;
            }
            return Math.max(getTermSides(term.rolls[0]), getTermSides(term.rolls[1]));
        }
        return 0;
    }

    combinedTerms.sort((a, b) => getTermSides(b.term) - getTermSides(a.term));

    // Add combined constant if non-zero or if no other terms exist
    if (constant !== 0 || combinedTerms.length === 0) {
        if (combinedTerms.length === 0) {
            return constant;
        }
        if (constant > 0) {
            combinedTerms.push({ term: constant, sign: 1 });
        } else {
            combinedTerms.push({ term: Math.abs(constant), sign: -1 });
        }
    }

    // Reconstruct binary roll chain
    let resultRoll: Roll = combinedTerms[0].term;
    if (combinedTerms[0].sign === -1 && typeof resultRoll === 'number') {
        resultRoll = -resultRoll;
    }

    for (let i = 1; i < combinedTerms.length; i++) {
        const { term, sign } = combinedTerms[i];
        resultRoll = {
            mode: sign === 1 ? BinaryRollMode.ADD : BinaryRollMode.SUB,
            rolls: [resultRoll, term],
        };
    }

    return resultRoll;
}

/**
 * Formats a Roll AST back to a canonical roll formula string.
 */
export function formatRoll(roll: Roll): string {
    if (typeof roll === 'number') {
        return `${roll}`;
    }
    if (isDiceGroup(roll)) {
        const count = roll.results.length;
        return count === 1 ? `d${roll.sides}` : `${count}d${roll.sides}`;
    }
    if (isBinaryRoll(roll)) {
        if (roll.mode === BinaryRollMode.ADD) {
            return `${formatRoll(roll.rolls[0])} + ${formatRoll(roll.rolls[1])}`;
        }
        if (roll.mode === BinaryRollMode.SUB) {
            return `${formatRoll(roll.rolls[0])} - ${formatRoll(roll.rolls[1])}`;
        }
        if (roll.mode === BinaryRollMode.MAX) {
            if (isDiceGroup(roll.rolls[0]) && isDiceGroup(roll.rolls[1]) && roll.rolls[0].sides === roll.rolls[1].sides) {
                return `${formatRoll(roll.rolls[0])}a`;
            }
            return `max(${formatRoll(roll.rolls[0])}, ${formatRoll(roll.rolls[1])})`;
        }
        if (roll.mode === BinaryRollMode.MIN) {
            if (isDiceGroup(roll.rolls[0]) && isDiceGroup(roll.rolls[1]) && roll.rolls[0].sides === roll.rolls[1].sides) {
                return `${formatRoll(roll.rolls[0])}d`;
            }
            return `min(${formatRoll(roll.rolls[0])}, ${formatRoll(roll.rolls[1])})`;
        }
    }
    return '';
}

/**
 * Normalizes a full dice roll expression string by combining like-terms.
 */
export function normalizeRollExpression(spec: string): string {
    try {
        const rolls = parseRollSpec(spec);
        return rolls
            .map(r => formatRoll(normalizeRoll(r)))
            .filter(str => str !== '' && str !== '0')
            .join(', ');
    } catch {
        return spec;
    }
}

/**
 * Deletes the last term from a roll expression.
 * E.g. "1d6 + 5 + 2d20" -> "1d6 + 5", "1d6" -> ""
 */
export function deleteLastTerm(spec: string): string {
    const trimmed = spec.trim().replace(/[+\-*/,\s]+$/, '');
    if (!trimmed) return '';

    try {
        const rolls = parseRollSpec(trimmed);
        if (rolls.length === 0) return '';

        const lastRoll = rolls[rolls.length - 1];
        const flat = flattenAdditiveTerms(lastRoll);

        if (flat.length <= 1) {
            const remainingRolls = rolls.slice(0, -1);
            return remainingRolls.map(r => formatRoll(r)).join(', ');
        }

        const remainingFlat = flat.slice(0, -1);
        let reconstructed: Roll = remainingFlat[0].term;
        if (remainingFlat[0].sign === -1 && typeof reconstructed === 'number') {
            reconstructed = -reconstructed;
        }
        for (let i = 1; i < remainingFlat.length; i++) {
            const { term, sign } = remainingFlat[i];
            reconstructed = {
                mode: sign === 1 ? BinaryRollMode.ADD : BinaryRollMode.SUB,
                rolls: [reconstructed, term],
            };
        }

        const remainingRolls = [...rolls.slice(0, -1), reconstructed];
        return remainingRolls.map(r => formatRoll(r)).join(', ');
    } catch {
        const regexRemoved = trimmed.replace(/(?:\s*[+\-*/,]\s*)[^+\-*/,]+$/, '');
        if (regexRemoved === trimmed || !/[+\-*/,]/.test(trimmed)) {
            return '';
        }
        return regexRemoved;
    }
}

export class ParseRollError extends Error {
    public constructor(err: string) {
        super(err);
    }
}

export function createBinaryRollChain(
    mode: BinaryRollMode,
    subrolls: Roll[],
): BinaryRoll {
    if (subrolls.length < 2) {
        throw new Error(`>=2 rolls needed to create binary roll.`);
    }
    return {
        mode,
        rolls: [
            subrolls[0],
            subrolls.length > 2
                ? createBinaryRollChain(mode, subrolls.slice(1))
                : subrolls[1]
        ],
    };
}

export function parseRollSpec(spec: string): Roll[] {
    const sem = ohm.createSemantics();
    sem.addAttribute('integer',
        {
            integer(digits): number {
                return Number(digits.sourceString);
            },
        },
    );
    sem.addAttribute('operator',
        {
            operator(s): string {
                return s.sourceString;
            },
        },
    );
    sem.addAttribute('roll',
        {
            LiteralRoll(integer): Roll {
                return integer.integer;
            },
            diceRoll(nDice, _d, nSides): DiceGroup {
                const s = nSides.integer;
                const c = nDice.children?.[0]?.integer ?? 1;
                return { sides: s, results: [...new Array(c)].fill(0) };
            },
            SignedRoll(op, roll): BinaryRoll {
                if (op.operator === '+') {
                    return roll.roll;
                }
                return { mode: BinaryRollMode.SUB, rolls: [ 0, roll.roll ] };
            },
            advantageRoll(diceRoll, aOrD): BinaryRoll {
                return {
                    mode: aOrD.sourceString === 'a' ? BinaryRollMode.MAX : BinaryRollMode.MIN,
                    rolls: [
                        { ...diceRoll.roll },
                        { ...diceRoll.roll },
                    ],
                };
            },
            MinMaxRoll(minOrMax, _lParen, rolls, _rParen): Roll {
                if (rolls.children.length === 0) {
                    return 0;
                }
                if (rolls.children.length === 1) {
                    return rolls.children[0].roll;
                }
                return createBinaryRollChain(
                    minOrMax.sourceString.toLocaleLowerCase() === 'min'
                        ? BinaryRollMode.MIN : BinaryRollMode.MAX,
                    rolls.rolls,
                );
            },
            ParenRoll(_lParen, roll, _rParen): Roll {
                return roll.roll;
            },
            ArithmeticRoll(roll1, op, roll2): BinaryRoll {
                return {
                    mode: op.operator === '+' ? BinaryRollMode.ADD : BinaryRollMode.SUB,
                    rolls: [ roll1.roll, roll2.roll ],
                };
            },
        },
    );
    sem.addAttribute('rolls',
        {
            Rolls(roll1, _seps, nextRolls): Roll[] {
                return [
                    roll1.children?.[0]?.roll,
                    ...nextRolls.children.map(ch => ch.roll),
                ].filter(v => !!v);
            },
        },
    );
    const r = ohm.match(spec, 'Rolls');
    if (!r.succeeded()) {
        throw new ParseRollError(r.shortMessage ?? 'Failed to parse roll spec.');
    }
    let rolls = sem(r).rolls as Roll[];
    rolls = rolls.map(r => simplifyRoll(r));
    return rolls;
}

export function cloneRoll(roll: Roll): Roll {
    if (isBinaryRoll(roll)) {
        return {
            ...roll,
            rolls: roll.rolls.map(r => cloneRoll(r)) as [Roll, Roll],
        };
    }
    if (isDiceGroup(roll)) {
        return {
            ...roll,
            results: roll.results,
        };
    }
    return roll;
}

export function extractDiceItems(roll: Roll): Array<{ sides: number; result: number }> {
    if (isDiceGroup(roll)) {
        return roll.results.map(r => ({ sides: roll.sides, result: r }));
    }
    if (isBinaryRoll(roll)) {
        return roll.rolls.flatMap(r => extractDiceItems(r));
    }
    return [];
}