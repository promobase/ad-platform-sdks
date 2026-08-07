// Auto-generated client for campaigns — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Campaign, CreateCampaignParams, UpdateCampaignParams, ListCampaignsParams, GetCampaignParams, GetCampaignByIdsParams, DeleteCampaignParams } from "../types/campaigns.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — campaigns */
export function createCampaignsClient(api: SnapchatApiClient) {
  return {
    /** Example - Create a Campaign ​ */
    async createCampaign(params: CreateCampaignParams): Promise<Campaign> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/campaigns`, { campaigns: [{ ...rest }] });
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** Example - Update a Campaign ​ */
    async updateCampaign(params: UpdateCampaignParams): Promise<Campaign> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/campaigns`, rest);
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** Example - Fetch all Campaigns under an Ad Account ​ */
    listCampaigns(params: ListCampaignsParams): SnapchatCursor<Campaign> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/campaigns`, link ? undefined : query).then((envelope) => ({
          items: unpack<Campaign>(envelope, "campaigns", "campaign"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Get a specific Campaign ​ */
    async getCampaign(params: GetCampaignParams): Promise<Campaign> {
      const { campaignId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}`, query);
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** Example - Fetch Multiple Campaigns (POST) ​ */
    async getCampaignByIds(params: GetCampaignByIdsParams): Promise<Campaign> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/get_campaigns_by_ids`, rest);
      return ensureOne<Campaign>(unpack<Campaign>(envelope, "campaigns", "campaign"), "Campaign");
    },

    /** campaigns */
    async deleteCampaign(params: DeleteCampaignParams): Promise<void> {
      const { id, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/campaigns/${id}`);
    },
  };
}
