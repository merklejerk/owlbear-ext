export interface Dice {
    sides: number;
    result: number;
}

export interface Roll {
    mode: 'MIN' | 'MAX' | 'ADD';
    rolls: Array<Roll | Dice | number>;
}

export function isRoll(r: Roll | Dice | number): r is Roll {
    return typeof(r) === 'object' && !!(r as any).mode;
}

export function isDice(r: Roll | Dice | number): r is Dice {
    return typeof(r) === 'object' && !(r as any).mode;
}

export function getRollResult(roll: Roll | Dice | number): number {
    if (isRoll(roll)) {
        if (roll.mode === 'ADD') {
            return roll.rolls.reduce((a: number, r) => a + getRollResult(r), 0);
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

export function reroll<T extends Roll | Dice>(roll: T): T {
    if (isRoll(roll)) {
        for (const r of roll.rolls) {
            if (typeof(r) !== 'number') {
                reroll(r);
            }
        }
    } else {
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

export function isCriticalRoll(roll: Roll | Dice | number): boolean {
    if (isRoll(roll)) {
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

export function simplifyRoll(roll: Roll | Dice | number): Roll | Dice | number {
    // TODO
}