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
