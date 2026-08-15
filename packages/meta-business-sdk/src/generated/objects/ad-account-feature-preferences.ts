// @generated
// fingerprint: sha256:fb4f3c78c7977f644f15af925e07edd4285e3e667e0b169479511b2c2dab9ba9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountFeaturePreferencesPostFields } from "./ad-account-feature-preferences-post.ts";

export interface AdAccountFeaturePreferencesFields {
}

export function adAccountFeaturePreferencesNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAccountFeaturePreferencesFields,
    createFeaturePreference: (params: Record<string, unknown>) =>
      client.post<AdAccountFeaturePreferencesPostFields>(`${id}/feature_preferences`, params as Record<string, unknown>),
  };
}

