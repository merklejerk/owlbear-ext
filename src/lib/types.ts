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

export interface CritMsgData {
    topic: 'crit';
    playerName: string;
    playerId: string;
    when: number;
    rollId: string;
}

export interface RollMsgData {
    topic: 'roll';
    roll: Roll;
    rollId: string;
    when: number;
    imported?: boolean;
}

export type InternalMsgData<T extends any> = { topic: string; } & T;

export interface BroadcastMsg {
    data: unknown;
    connectionId: string;
}

export interface InternalMsg<T = unknown> extends BroadcastMsg{
    data: InternalMsgData<T>;
};

export function isInternalMsg<T = unknown>(msg: BroadcastMsg): msg is InternalMsg<T> {
    return (msg.data as any)?.topic !== undefined;
}

export function isCritMsg(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<CritMsgData> {
    return (msg.data as any)?.topic === 'crit';
}

export function isRollMsg(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<RollMsgData> {
    return (msg.data as any)?.topic === 'roll';
}