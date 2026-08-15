// @generated
// fingerprint: sha256:ec29bd979231cd18bd2c666457606b3fafc4835772bb3420f5b2398d967a4003
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for ad-squad-outcomes — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { AdSquadOutcomeEstimateV2, CreateAdSquadOutcomeEstimatesV2Params } from "../types/ad-squad-outcomes.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — ad-squad-outcomes */
export function createAdSquadOutcomesClient(api: SnapchatApiClient) {
  return {
    /** ad-squad-outcomes */
    async createAdSquadOutcomeEstimatesV2(params: CreateAdSquadOutcomeEstimatesV2Params): Promise<AdSquadOutcomeEstimateV2> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/ad_squad_outcome_estimates_v2`, { ad_squad_outcome_estimates_v2: [{ ...rest }] });
      return ensureOne<AdSquadOutcomeEstimateV2>(unpack<AdSquadOutcomeEstimateV2>(envelope, "ad_squad_outcome_estimates_v2", "ad_squad_outcome_estimate_v2"), "AdSquadOutcomeEstimateV2");
    },
  };
}
