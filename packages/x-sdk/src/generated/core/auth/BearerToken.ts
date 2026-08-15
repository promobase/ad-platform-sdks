// @generated
// fingerprint: sha256:8e48e3c38b0cc1b1e7520bc43597aa0fa13956f75f7dbc461476c0a26a0b9ad5
// DO NOT EDIT: generated file; changes will be overwritten.
export type BearerToken = string;

const BEARER_AUTH_HEADER_PREFIX = /^Bearer /i;

function toAuthorizationHeader(token: string | undefined): string | undefined {
    if (token == null) {
        return undefined;
    }
    return `Bearer ${token}`;
}

export const BearerToken: {
    toAuthorizationHeader: typeof toAuthorizationHeader;
    fromAuthorizationHeader: (header: string) => BearerToken;
} = {
    toAuthorizationHeader: toAuthorizationHeader,
    fromAuthorizationHeader: (header: string): BearerToken => {
        return header.replace(BEARER_AUTH_HEADER_PREFIX, "").trim() as BearerToken;
    },
};
