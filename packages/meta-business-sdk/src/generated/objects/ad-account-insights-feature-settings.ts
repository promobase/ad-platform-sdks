// @generated
// fingerprint: sha256:c8a1993c68e2d63d62882900c56a4d78a9774f7694d66c32792af0bd0770e7c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AdAccountInsightsFeatureSettingsListFeaturesFields } from "./ad-account-insights-feature-settings-list-features.ts";
import type { AdAccountInsightsFeatureSettingsPostFields } from "./ad-account-insights-feature-settings-post.ts";

export interface AdAccountInsightsFeatureSettingsFields {
}

export interface AdAccountInsightsFeatureSettingsListInsightsFeatureSettingsListFeaturesParams {
  after?: string;
  before?: string;
  limit?: number;
  [key: string]: unknown;
}

export function adAccountInsightsFeatureSettingsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAccountInsightsFeatureSettingsFields,
    insightsFeatureSettingsListFeatures: <F extends (keyof AdAccountInsightsFeatureSettingsListFeaturesFields)[]>(opts: { fields: F; params?: AdAccountInsightsFeatureSettingsListInsightsFeatureSettingsListFeaturesParams }) =>
      new Cursor<Pick<AdAccountInsightsFeatureSettingsListFeaturesFields, F[number]>>(client, `${id}/insights/feature-settings/list-features`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    createInsightsFeatureSetting: (params: Record<string, unknown>) =>
      client.post<AdAccountInsightsFeatureSettingsPostFields>(`${id}/insights/feature-settings`, params as Record<string, unknown>),
  };
}

