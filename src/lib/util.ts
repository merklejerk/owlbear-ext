export async function delay(ms: number): Promise<void> {
    return new Promise((a, r) => {
        setTimeout(a, ms);
    })
}