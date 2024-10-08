export async function delay(ms: number): Promise<void> {
    return new Promise((a, r) => {
        setTimeout(a, ms);
    })
}

export function wrapIndex(i: number, n: number): number {
    return (n + (i % n)) % n;
}