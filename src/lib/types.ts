import { PUBLIC_EXT_ID } from "$env/static/public";

export interface Dice {
    sides: number;
    result?: number;
}

export interface Roll {
    combination: 'MIN' | 'MAX' | 'ADD';
    rolls: Array<Roll | Dice>;
}

export interface CritMetadata {
    playerName: string;
    playerId: string;
    when: number;
}

export const CRIT_METADATA_ID = `${PUBLIC_EXT_ID}/crit`;