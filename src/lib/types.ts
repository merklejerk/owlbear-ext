export interface Dice {
    sides: number;
    result?: number;
}

export interface Roll {
    combination: 'MIN' | 'MAX' | 'ADD';
    rolls: Array<Roll | Dice>;
}
