// @generated
// fingerprint: sha256:5eb3a584b6f9e81bea4aad032c01115c4a883afda26d21c9ddd8b4f7f2b31c42
// DO NOT EDIT: generated file; changes will be overwritten.
import { anySignal, getTimeoutSignal } from "./signals.js";

/**
 * Cached result of checking whether the current runtime supports
 * the `cache` option in `Request`. Some runtimes (e.g. Cloudflare Workers)
 * throw a TypeError when this option is used.
 */
let _cacheNoStoreSupported: boolean | undefined;
export function isCacheNoStoreSupported(): boolean {
    if (_cacheNoStoreSupported != null) {
        return _cacheNoStoreSupported;
    }
    try {
        new Request("http://localhost", { cache: "no-store" });
        _cacheNoStoreSupported = true;
    } catch {
        _cacheNoStoreSupported = false;
    }
    return _cacheNoStoreSupported;
}

/**
 * Reset the cached result of `isCacheNoStoreSupported`. Exposed for testing only.
 */
export function resetCacheNoStoreSupported(): void {
    _cacheNoStoreSupported = undefined;
}

export const makeRequest = async (
    fetchFn: (url: string, init: RequestInit) => Promise<Response>,
    url: string,
    method: string,
    headers: Headers | Record<string, string>,
    requestBody: BodyInit | undefined,
    timeoutMs?: number,
    abortSignal?: AbortSignal,
    withCredentials?: boolean,
    duplex?: "half",
    disableCache?: boolean,
): Promise<Response> => {
    const signals: AbortSignal[] = [];

    let timeoutAbortId: ReturnType<typeof setTimeout> | undefined;
    if (timeoutMs != null) {
        const { signal, abortId } = getTimeoutSignal(timeoutMs);
        timeoutAbortId = abortId;
        signals.push(signal);
    }

    if (abortSignal != null) {
        signals.push(abortSignal);
    }
    const newSignals = anySignal(signals);
    const response = await fetchFn(url, {
        method: method,
        headers,
        body: requestBody,
        signal: newSignals,
        credentials: withCredentials ? "include" : undefined,
        // @ts-ignore
        duplex,
        ...(disableCache && isCacheNoStoreSupported() ? { cache: "no-store" as RequestCache } : {}),
    });

    if (timeoutAbortId != null) {
        clearTimeout(timeoutAbortId);
    }

    return response;
};
