// @generated
// fingerprint: sha256:cefdd25414949f93e524ea006095c3249ead00fc132f9fbf26e7da2a11b48a12
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for com.atproto.identity — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoIdentityDefsIdentityInfo, GetRecommendedDidCredentialsResponse, RefreshIdentityResponse, ResolveDidResponse, ResolveHandleResponse, ResolveIdentityResponse, SignPlcOperationResponse } from "../types.ts";
import type { GetRecommendedDidCredentialsParams, RefreshIdentityParams, RequestPlcOperationSignatureParams, ResolveDidParams, ResolveHandleParams, ResolveIdentityParams, SignPlcOperationParams, SubmitPlcOperationParams, UpdateHandleParams } from "../params.ts";

/** com.atproto.identity — 9 endpoints */
export function createIdentityClient(api: BlueskyApiClient) {
  return {
    /** Describe the credentials that should be included in the DID doc of an account that is migrating to this service. */
    async getRecommendedDidCredentials(params: GetRecommendedDidCredentialsParams): Promise<GetRecommendedDidCredentialsResponse> {
      const envelope = await api.get<GetRecommendedDidCredentialsResponse>("/xrpc/com.atproto.identity.getRecommendedDidCredentials", params);
      return envelope;
    },

    /** Request that the server re-resolve an identity (DID and handle). The server may ignore this request, or require authentication, depending on the role, implementation, and policy of the server. */
    async refreshIdentity(params: RefreshIdentityParams): Promise<RefreshIdentityResponse> {
      const envelope = await api.post<RefreshIdentityResponse>("/xrpc/com.atproto.identity.refreshIdentity", params, undefined);
      return envelope;
    },

    /** Request an email with a code to in order to request a signed PLC operation. Requires Auth. */
    async requestPlcOperationSignature(params: RequestPlcOperationSignatureParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.identity.requestPlcOperationSignature", params, undefined);
      return envelope;
    },

    /** Resolves DID to DID document. Does not bi-directionally verify handle. */
    async resolveDid(params: ResolveDidParams): Promise<ResolveDidResponse> {
      const envelope = await api.get<ResolveDidResponse>("/xrpc/com.atproto.identity.resolveDid", params);
      return envelope;
    },

    /** Resolves an atproto handle (hostname) to a DID. Does not necessarily bi-directionally verify against the the DID document. */
    async resolveHandle(params: ResolveHandleParams): Promise<ResolveHandleResponse> {
      const envelope = await api.get<ResolveHandleResponse>("/xrpc/com.atproto.identity.resolveHandle", params);
      return envelope;
    },

    /** Resolves an identity (DID or Handle) to a full identity (DID document and verified handle). */
    async resolveIdentity(params: ResolveIdentityParams): Promise<ResolveIdentityResponse> {
      const envelope = await api.get<ResolveIdentityResponse>("/xrpc/com.atproto.identity.resolveIdentity", params);
      return envelope;
    },

    /** Signs a PLC operation to update some value(s) in the requesting DID's document. */
    async signPlcOperation(params: SignPlcOperationParams): Promise<SignPlcOperationResponse> {
      const envelope = await api.post<SignPlcOperationResponse>("/xrpc/com.atproto.identity.signPlcOperation", params, undefined);
      return envelope;
    },

    /** Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry */
    async submitPlcOperation(params: SubmitPlcOperationParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.identity.submitPlcOperation", params, undefined);
      return envelope;
    },

    /** Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth. */
    async updateHandle(params: UpdateHandleParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.identity.updateHandle", params, undefined);
      return envelope;
    },
  };
}
