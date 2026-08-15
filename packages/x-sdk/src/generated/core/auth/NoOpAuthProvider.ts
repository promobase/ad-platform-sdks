// @generated
// fingerprint: sha256:a2cea61bac76be75b6ff25d686ba2db2d90863dadd85e229983d08135b461b1a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AuthProvider } from "./AuthProvider.js";
import type { AuthRequest } from "./AuthRequest.js";

export class NoOpAuthProvider implements AuthProvider {
    public getAuthRequest(): Promise<AuthRequest> {
        return Promise.resolve({ headers: {} });
    }
}
