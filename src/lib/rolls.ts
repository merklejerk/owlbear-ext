export interface Dice {
    sides: number;
    result: number;
}

export type RollCombinationMode = 'MIN' | 'MAX' | 'ADD' | 'SUB';

export interface RollCombination {
    mode: RollCombinationMode;
    rolls: Array<Roll | Dice | number>;
}

export type Roll = Dice | RollCombination | number;

export function isCombination(r: Roll): r is RollCombination {
    return typeof(r) === 'object' && !!(r as any).mode;
}

export function isDice(r: Roll): r is Dice {
    return typeof(r) === 'object' && !(r as any).mode;
}

export function isEmptyRoll(roll: Roll): boolean {
    if (isCombination(roll)) {
        return roll.rolls.length === 0 || roll.rolls.every(r => isEmptyRoll(r));
    }
    if (isDice(roll)) {
        return false;
    }
    return roll === 0;
}

export function getRollResult(roll: Roll): number {
    if (isCombination(roll)) {
        if (roll.mode === 'ADD') {
            return roll.rolls.reduce((a: number, r) => a + getRollResult(r), 0);
        } else if (roll.mode === 'SUB') {
            return roll.rolls.reduce((a: number, r) => a - getRollResult(r), 0);
        } else if (roll.rolls.length !== 0) {
            return roll.rolls.slice(1).reduce(
                roll.mode === 'MAX'
                    ? (a: number, r) => Math.max(a, getRollResult(r))
                    : (a: number, r) => Math.min(a, getRollResult(r)),
                getRollResult(roll.rolls[0]),
            );
        }
        return 0;
    } else if (isDice(roll)) {
        return roll.result;
    }
    return roll;
}

export function reroll<T extends Roll>(roll: T): T {
    if (isCombination(roll)) {
        for (const r of roll.rolls) {
            if (typeof(r) !== 'number') {
                reroll(r);
            }
        }
    } else if (isDice(roll)) {
        roll.result = rollDice(roll.sides);
    }
    return roll;
}

export function rollDice(sides: number): number {
    return Math.ceil(Math.random() * sides);
}

export function parseRolls(text: string): Roll[] {
    return [
        {
            mode: 'ADD',
            rolls: [20, 8].map(sides => ({ sides, result: rollDice(sides )})),
        },
    ];
}

export function toRollFormula(roll: Roll): string {
    return '1d20';
}

export function isCriticalRoll(roll: Roll): boolean {
    if (isCombination(roll)) {
        if (roll.rolls.length === 0) {
            return false;
        }
        if (roll.mode === 'MIN') {
            return roll.rolls.every(r => typeof(r) !== 'number' && isCriticalRoll(r));
        }
        return roll.rolls.some(r => isCriticalRoll(r));
    }
    if (isDice(roll)) {
        return roll.sides === 20 && roll.result === 20;
    }
    return false;
}

export function simplifyRoll(roll: Roll): Roll {
    if (isCombination(roll)) {
        if (roll.rolls.length === 1) {
            return roll.rolls[0];
        }
        return {
            ...roll,
            rolls: roll.rolls.map(r => simplifyRoll(r)),
        };
    } else if (isDice(roll)) {
        if (roll.sides === 1) {
            return 1;
        }
    }
    return roll;
}