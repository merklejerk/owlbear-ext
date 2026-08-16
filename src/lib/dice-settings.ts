const STORAGE_KEY = 'owlbear:3d-dice:enabled';
const COLOR_STORAGE_KEY = 'owlbear:3d-dice:color';

/**
 * Checks whether the 3D dice overlay is enabled for this client.
 * Defaults to true if no preference has been explicitly set.
 */
export function is3dDiceEnabled(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) return true;
    try {
        const val = window.localStorage.getItem(STORAGE_KEY);
        if (val === null) return true;
        return val !== 'false' && val !== '0' && val !== 'off';
    } catch {
        return true;
    }
}

/**
 * Sets the 3D dice overlay preference in localStorage.
 */
export function set3dDiceEnabled(enabled: boolean): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
        window.localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
    } catch {
        // Ignore localStorage quota / security exceptions
    }
}

/**
 * Toggles the 3D dice overlay preference and returns the new state.
 */
export function toggle3dDice(): boolean {
    const next = !is3dDiceEnabled();
    set3dDiceEnabled(next);
    return next;
}

/**
 * Normalizes a hex string (e.g. "ff0000", "#ff0000", "#f00", "f00") to "#RRGGBB".
 * Returns null if the input is not a valid 3- or 6-digit hex color.
 */
export function normalizeHexColor(raw: string): string | null {
    if (!raw) return null;
    let hex = raw.trim();
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (/^[0-9a-fA-F]{3}$/.test(hex)) {
        return '#' + hex.split('').map(c => c + c).join('').toLowerCase();
    }
    if (/^[0-9a-fA-F]{6}$/.test(hex)) {
        return '#' + hex.toLowerCase();
    }
    return null;
}

function getColorKey(playerId?: string | null): string {
    return playerId ? `${COLOR_STORAGE_KEY}:${playerId}` : COLOR_STORAGE_KEY;
}

/**
 * Retrieves the current dice color override from localStorage for a specific player (or global),
 * or null if none is set.
 */
export function getDiceColorOverride(playerId?: string | null): string | null {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    try {
        if (playerId) {
            const playerVal = window.localStorage.getItem(getColorKey(playerId));
            if (playerVal) {
                const norm = normalizeHexColor(playerVal);
                if (norm) return norm;
            }
        }
        // Fallback to legacy unkeyed preference if exists
        const val = window.localStorage.getItem(COLOR_STORAGE_KEY);
        if (!val) return null;
        return normalizeHexColor(val);
    } catch {
        return null;
    }
}

/**
 * Sets or clears the dice color override in localStorage for a specific player.
 */
export function setDiceColorOverride(color: string | null, playerId?: string | null): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
        const key = getColorKey(playerId);
        if (!color) {
            window.localStorage.removeItem(key);
            if (playerId) {
                window.localStorage.removeItem(COLOR_STORAGE_KEY);
            }
            return;
        }
        const normalized = normalizeHexColor(color);
        if (normalized) {
            window.localStorage.setItem(key, normalized);
        } else {
            window.localStorage.removeItem(key);
        }
    } catch {
        // Ignore localStorage quota / security exceptions
    }
}

