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

