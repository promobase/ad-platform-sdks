// Auto-generated client for ad-squads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { EcidStatu, Adsquad, ListEcidStatusParams, ListSkadnetworkAdsquadsParams, CreateAdsquadParams, UpdateAdsquadParams, ListAdsquadsParams, ListAdsquads2Params, GetAdsquadParams, GetAdsquadByIdsParams, DeleteAdsquadParams } from "../types/ad-squads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — ad-squads */
export function createAdSquadsClient(api: SnapchatApiClient) {
  return {
    /** ad-squads */
    listEcidStatus(params: ListEcidStatusParams): SnapchatCursor<EcidStatu> {
      const { snapAppId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/mobile_apps/${snapAppId}/ecid_status`, link ? undefined : query).then((envelope) => ({
          items: unpack<EcidStatu>(envelope, "ecid_status", "ecid_statu"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - bid_strategy ​ */
    async listSkadnetworkAdsquads(params: ListSkadnetworkAdsquadsParams): Promise<Adsquad> {
      const { mobileAppId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/mobile_apps/${mobileAppId}/skadnetwork_adsquads`, query);
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** Example - Updating an Ad Squad ​ */
    async createAdsquad(params: CreateAdsquadParams): Promise<Adsquad> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/adsquads`, { adsquads: [{ ...rest }] });
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** ad-squads */
    async updateAdsquad(params: UpdateAdsquadParams): Promise<Adsquad> {
      const { campaignId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/campaigns/${campaignId}/adsquads`, { adsquads: [{ ...rest }] });
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** Example - Fetch all Ad Squads under a Campaign ​ */
    listAdsquads(params: ListAdsquadsParams): SnapchatCursor<Adsquad> {
      const { campaignId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/campaigns/${campaignId}/adsquads`, link ? undefined : query).then((envelope) => ({
          items: unpack<Adsquad>(envelope, "adsquads", "adsquad"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Fetch all Ad Squads under an Ad Account ​ */
    listAdsquads2(params: ListAdsquads2Params): SnapchatCursor<Adsquad> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/adsquads`, link ? undefined : query).then((envelope) => ({
          items: unpack<Adsquad>(envelope, "adsquads", "adsquad"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** ad-squads */
    async getAdsquad(params: GetAdsquadParams): Promise<Adsquad> {
      const { adSquadId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}`, query);
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** Example - Fetch Multiple Ad Squads (POST) ​ */
    async getAdsquadByIds(params: GetAdsquadByIdsParams): Promise<Adsquad> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/get_adsquads_by_ids`, rest);
      return ensureOne<Adsquad>(unpack<Adsquad>(envelope, "adsquads", "adsquad"), "Adsquad");
    },

    /** ad-squads */
    async deleteAdsquad(params: DeleteAdsquadParams): Promise<void> {
      const { id, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/adsquads/${id}`);
    },
  };
}
