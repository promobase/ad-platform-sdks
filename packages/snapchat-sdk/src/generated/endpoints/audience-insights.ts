// Auto-generated client for audience-insights — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { TargetingInsight, CreateTargetingInsightParams } from "../types/audience-insights.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — audience-insights */
export function createAudienceInsightsClient(api: SnapchatApiClient) {
  return {
    /** Example ​ */
    async createTargetingInsight(params: CreateTargetingInsightParams): Promise<TargetingInsight> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/targeting_insights`, rest);
      return ensureOne<TargetingInsight>(unpack<TargetingInsight>(envelope, "targeting_insights", "targeting_insight"), "TargetingInsight");
    },
  };
}
