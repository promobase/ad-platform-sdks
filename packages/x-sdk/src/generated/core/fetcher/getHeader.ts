// @generated
// fingerprint: sha256:6f061f8e418405915abcf0f4732ac59e5c0f307baf3d326c3068c7b6d644a7d1
// DO NOT EDIT: generated file; changes will be overwritten.
export function getHeader(headers: Record<string, any>, header: string): string | undefined {
    for (const [headerKey, headerValue] of Object.entries(headers)) {
        if (headerKey.toLowerCase() === header.toLowerCase()) {
            return headerValue;
        }
    }
    return undefined;
}
