import type { Roll } from "./rolls";

export interface RollMsgData {
    topic: 'roll';
    rolls: Roll[];
    rollId: string;
    when: number;
    playerId: string;
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

export function isRollMsg(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<RollMsgData> {
    return (msg.data as any)?.topic === 'roll';
}