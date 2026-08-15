// @generated
// fingerprint: sha256:96afae306b2d09971455f925e06fd36064557ee0aec6c9247445574b71349da3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for app.bsky.actor — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyActorDefsPreferences, AppBskyActorDefsProfileViewDetailed, AppBskyActorDefsProfileView, AppBskyActorDefsProfileViewBasic, GetPreferencesResponse, GetProfileResponse, GetProfilesResponse, GetSuggestionsResponse, SearchActorsResponse, SearchActorsTypeaheadResponse } from "../types.ts";
import type { GetPreferencesParams, GetProfileParams, GetProfilesParams, GetSuggestionsParams, PutPreferencesParams, SearchActorsParams, SearchActorsTypeaheadParams } from "../params.ts";

/** app.bsky.actor — 7 endpoints */
export function createActorClient(api: BlueskyApiClient) {
  return {
    /** Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth. */
    async getPreferences(params: GetPreferencesParams): Promise<GetPreferencesResponse> {
      const envelope = await api.get<GetPreferencesResponse>("/xrpc/app.bsky.actor.getPreferences", params);
      return envelope;
    },

    /** Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth. */
    async getProfile(params: GetProfileParams): Promise<GetProfileResponse> {
      const envelope = await api.get<GetProfileResponse>("/xrpc/app.bsky.actor.getProfile", params);
      return envelope;
    },

    /** Get detailed profile views of multiple actors. */
    async getProfiles(params: GetProfilesParams): Promise<GetProfilesResponse> {
      const envelope = await api.get<GetProfilesResponse>("/xrpc/app.bsky.actor.getProfiles", params);
      return envelope;
    },

    /** Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding. */
    async getSuggestions(params: GetSuggestionsParams): Promise<GetSuggestionsResponse> {
      const envelope = await api.get<GetSuggestionsResponse>("/xrpc/app.bsky.actor.getSuggestions", params);
      return envelope;
    },

    /** Set the private preferences attached to the account. */
    async putPreferences(params: PutPreferencesParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.actor.putPreferences", params, undefined);
      return envelope;
    },

    /** Find actors (profiles) matching search criteria. Does not require auth. */
    async searchActors(params: SearchActorsParams): Promise<SearchActorsResponse> {
      const envelope = await api.get<SearchActorsResponse>("/xrpc/app.bsky.actor.searchActors", params);
      return envelope;
    },

    /** Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth. */
    async searchActorsTypeahead(params: SearchActorsTypeaheadParams): Promise<SearchActorsTypeaheadResponse> {
      const envelope = await api.get<SearchActorsTypeaheadResponse>("/xrpc/app.bsky.actor.searchActorsTypeahead", params);
      return envelope;
    },
  };
}
