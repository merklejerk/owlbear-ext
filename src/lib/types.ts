import type { Roll } from "./rolls";

export interface RollMsgData {
    topic: 'roll';
    rolls: Roll[];
    rollId: string;
    when: number;
    playerId: string;
    imported?: boolean;
}

export interface AnnounceMsgData {
    topic: 'announce';
    playerId: string;
    msg: string;
}

export interface EffectMsgData {
    topic: 'effect';
    effect: string;
    on: boolean;
}

export type InternalMsgData<T extends any> = { topic: string; } & T;

export interface BroadcastMsg {
    data: unknown;
    connectionId: string;
}

export interface InternalMsg<T = unknown> extends BroadcastMsg {
    data: InternalMsgData<T>;
};

export function isInternalMsg<T = unknown>(msg: BroadcastMsg): msg is InternalMsg<T> {
    return (msg.data as any)?.topic !== undefined;
}

export function isRollMsg(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<RollMsgData> {
    return (msg.data as any)?.topic === 'roll';
}

export function isAnnounceMsg(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<AnnounceMsgData> {
    return (msg.data as any)?.topic === 'announce';
}

export function isEffectMessage(msg: BroadcastMsg | InternalMsg): msg is InternalMsg<EffectMsgData> {
    return (msg.data as any)?.topic === 'effect';
}

export interface TrackerMetadata {
    count?: string;
    active: boolean;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}