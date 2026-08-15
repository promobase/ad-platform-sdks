// @generated
// fingerprint: sha256:c0685f233f07c2fe6ead7ed9b0371c50fb77e70a451e3b96b4e99498be404d87
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for lead-generation-ads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { LeadGenerationForm, GetLeadGenerationFormParams, ListLeadGenerationFormsParams } from "../types/lead-generation-ads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — lead-generation-ads */
export function createLeadGenerationAdsClient(api: SnapchatApiClient) {
  return {
    /** Example - Get Lead Generation Form using Lead Generation Id ​ */
    async getLeadGenerationForm(params: GetLeadGenerationFormParams): Promise<LeadGenerationForm> {
      const { leadGenerationFormId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/lead_generation_forms/${leadGenerationFormId}`, query);
      return ensureOne<LeadGenerationForm>(unpack<LeadGenerationForm>(envelope, "lead_generation_forms", "lead_generation_form"), "LeadGenerationForm");
    },

    /** Example - Get Lead Generation Forms under an Ad Account ​ */
    listLeadGenerationForms(params: ListLeadGenerationFormsParams): SnapchatCursor<LeadGenerationForm> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/lead_generation_forms`, link ? undefined : query).then((envelope) => ({
          items: unpack<LeadGenerationForm>(envelope, "lead_generation_forms", "lead_generation_form"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
