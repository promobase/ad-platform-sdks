// Auto-generated client for ad-squad-ui-render-data — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { AdSquadUiRenderData, CreateAdParams, ListAdSquadUiRenderDataParams } from "../types/ad-squad-ui-render-data.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — ad-squad-ui-render-data */
export function createAdSquadUiRenderDataClient(api: SnapchatApiClient) {
  return {
    /** Example ​ */
    async createAd(params: CreateAdParams): Promise<AdSquadUiRenderData> {
      const { adSquadId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adsquads/${adSquadId}/ads`, { ad_squad_ui_render_data: [{ ...rest }] });
      return ensureOne<AdSquadUiRenderData>(unpack<AdSquadUiRenderData>(envelope, "ad_squad_ui_render_data", "ad_squad_ui_render_data"), "AdSquadUiRenderData");
    },

    /** Example ​ */
    listAdSquadUiRenderData(params: ListAdSquadUiRenderDataParams): SnapchatCursor<AdSquadUiRenderData> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/ad_squad_ui_render_data`, link ? undefined : query).then((envelope) => ({
          items: unpack<AdSquadUiRenderData>(envelope, "ad_squad_ui_render_data", "ad_squad_ui_render_data"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
