export async function delay(ms: number): Promise<void> {
    return new Promise((a, r) => {
        setTimeout(a, ms);
    })
}

export function wrapIndex(i: number, n: number): number {
    return (n + (i % n)) % n;
}

export function isTruthy(v: any): boolean {
    if (v === true) {
        return true;
    }
    if (typeof v === 'number') {
        return v > 0;
    }
    if (typeof v === 'string') {
        v = v.toLowerCase().trim();
        return v === 'true' || v === 'yes' || Number(v) > 0;
    }
    return false;
}