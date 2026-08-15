// @generated
// fingerprint: sha256:e167e1b371b716765a5937f8797cc3be20f29fad29b6fb4ad1c4ccc10d83e087
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for V3 Campaign Migration — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { StartMigrationJobResponse, MigrationJobResultsResponse, MigrationJobStatusResponse, MigrationResultsResponse } from "../types.ts";
import type { PostStartMigrationJobParams, PostMigrationJobResultsParams, PostMigrationJobStatusParams, PostMigrationResultsParams } from "../params.ts";

/** V3 Campaign Migration — 4 endpoints */
export function createV3CampaignMigrationClient(api: AmazonAdsApiClient) {
  return {
    /** Creates Migration Job for V3 campaigns. */
    async postStartMigrationJob(params: PostStartMigrationJobParams): Promise<StartMigrationJobResponse> {
      const rest = params;
      const envelope = await api.post<StartMigrationJobResponse>(`/sb/v4/legacyCampaigns/migrationJob`, rest);
      return envelope;
    },

    /** Lists Campaign Migration results for a JobId. */
    async postMigrationJobResults(params: PostMigrationJobResultsParams): Promise<MigrationJobResultsResponse> {
      const rest = params;
      const envelope = await api.post<MigrationJobResultsResponse>(`/sb/v4/legacyCampaigns/migrationJob/results`, rest);
      return envelope;
    },

    /** List Migration Job Status. */
    async postMigrationJobStatus(params: PostMigrationJobStatusParams): Promise<MigrationJobStatusResponse> {
      const rest = params;
      const envelope = await api.post<MigrationJobStatusResponse>(`/sb/v4/legacyCampaigns/migrationJob/status`, rest);
      return envelope;
    },

    /** List Migration Results of all Campaign. */
    async postMigrationResults(params: PostMigrationResultsParams): Promise<MigrationResultsResponse> {
      const rest = params;
      const envelope = await api.post<MigrationResultsResponse>(`/sb/v4/legacyCampaigns/overallMigrationResults`, rest);
      return envelope;
    },
  };
}
