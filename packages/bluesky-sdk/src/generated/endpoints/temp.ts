// Auto-generated client for com.atproto.temp — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoTempCheckHandleAvailabilityResultAvailable, ComAtprotoTempCheckHandleAvailabilityResultUnavailable, ComAtprotoLabelDefsLabel, AddReservedHandleResponse, CheckHandleAvailabilityResponse, CheckSignupQueueResponse, DereferenceScopeResponse, FetchLabelsResponse } from "../types.ts";
import type { AddReservedHandleParams, CheckHandleAvailabilityParams, CheckSignupQueueParams, DereferenceScopeParams, FetchLabelsParams, RequestPhoneVerificationParams, RevokeAccountCredentialsParams } from "../params.ts";

/** com.atproto.temp — 7 endpoints */
export function createTempClient(api: BlueskyApiClient) {
  return {
    /** Add a handle to the set of reserved handles. */
    async addReservedHandle(params: AddReservedHandleParams): Promise<AddReservedHandleResponse> {
      const envelope = await api.post<AddReservedHandleResponse>("/xrpc/com.atproto.temp.addReservedHandle", params, undefined);
      return envelope;
    },

    /** Checks whether the provided handle is available. If the handle is not available, available suggestions will be returned. Optional inputs will be used to generate suggestions. */
    async checkHandleAvailability(params: CheckHandleAvailabilityParams): Promise<CheckHandleAvailabilityResponse> {
      const envelope = await api.get<CheckHandleAvailabilityResponse>("/xrpc/com.atproto.temp.checkHandleAvailability", params);
      return envelope;
    },

    /** Check accounts location in signup queue. */
    async checkSignupQueue(params: CheckSignupQueueParams): Promise<CheckSignupQueueResponse> {
      const envelope = await api.get<CheckSignupQueueResponse>("/xrpc/com.atproto.temp.checkSignupQueue", params);
      return envelope;
    },

    /** Allows finding the oauth permission scope from a reference */
    async dereferenceScope(params: DereferenceScopeParams): Promise<DereferenceScopeResponse> {
      const envelope = await api.get<DereferenceScopeResponse>("/xrpc/com.atproto.temp.dereferenceScope", params);
      return envelope;
    },

    /** DEPRECATED: use queryLabels or subscribeLabels instead -- Fetch all labels from a labeler created after a certain date. */
    async fetchLabels(params: FetchLabelsParams): Promise<FetchLabelsResponse> {
      const envelope = await api.get<FetchLabelsResponse>("/xrpc/com.atproto.temp.fetchLabels", params);
      return envelope;
    },

    /** Request a verification code to be sent to the supplied phone number */
    async requestPhoneVerification(params: RequestPhoneVerificationParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.temp.requestPhoneVerification", params, undefined);
      return envelope;
    },

    /** Revoke sessions, password, and app passwords associated with account. May be resolved by a password reset. */
    async revokeAccountCredentials(params: RevokeAccountCredentialsParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.temp.revokeAccountCredentials", params, undefined);
      return envelope;
    },
  };
}
