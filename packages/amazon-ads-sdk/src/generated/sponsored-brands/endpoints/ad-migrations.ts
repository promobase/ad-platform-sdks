// @generated
// fingerprint: sha256:59912f9b2456b7a709fb02b8c1a33c679b24231890eb286fc703f6fc03cb12fa
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Migrations — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { ListMigrationsResponse } from "../types.ts";
import type { ListMigrationsParams } from "../params.ts";

/** Ad Migrations — 1 endpoints */
export function createAdMigrationsClient(api: AmazonAdsApiClient) {
  return {
    /** ListMigrations */
    async listMigrations(params: ListMigrationsParams): Promise<ListMigrationsResponse> {
      const rest = params;
      const envelope = await api.post<ListMigrationsResponse>(`/sb/v4/migrations/list`, rest);
      return envelope;
    },
  };
}
