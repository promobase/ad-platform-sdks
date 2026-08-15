// @generated
// fingerprint: sha256:c4443b7100dcca844369e0dff762e9f2e61543adffc0f2dbd883c2824cdbf966
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EndpointMetadata } from "../fetcher/EndpointMetadata.js";
import type { AuthRequest } from "./AuthRequest.js";

export interface AuthProvider {
    getAuthRequest(arg?: { endpointMetadata?: EndpointMetadata }): Promise<AuthRequest>;
}

export function isAuthProvider(value: unknown): value is AuthProvider {
    return (
        typeof value === "object" &&
        value !== null &&
        "getAuthRequest" in value &&
        typeof value.getAuthRequest === "function"
    );
}
