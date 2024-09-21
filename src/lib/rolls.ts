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

export function normalizeArithmetic(
    roll: Roll,
    parentMode: BinaryRollMode = BinaryRollMode.ADD,
): Roll {
    if (isArithmeticRoll(roll)) {
        roll.rolls = roll.rolls.map(
            r => normalizeArithmetic(r, roll.mode),
        ) as [Roll,Roll];
        if (parentMode === BinaryRollMode.SUB) {
            roll.mode = roll.mode === BinaryRollMode.ADD
                ? BinaryRollMode.SUB
                : BinaryRollMode.ADD;
        }
    }
    return roll;
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
    // return sem(r).rolls;
    let rolls = sem(r).rolls as Roll[];
    rolls = rolls.map(r => simplifyRoll(r));
    rolls = rolls.map(r => normalizeArithmetic(r));
    return rolls;
}