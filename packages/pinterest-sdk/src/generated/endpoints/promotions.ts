// @generated
// fingerprint: sha256:bf1e2158a5dd8a77d0546a7020ad205328214db513558f6b3eae573cefa5d31b
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for promotions — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { PromotionsListResponse, PromotionsCreateResponse, PromotionsUpdateResponse, PromotionsGetResponse, PromotionsDeleteResponse } from "../types.ts";
import type { ListPromotionsParams, CreatePromotionParams, UpdatePromotionParams, GetPromotionsParams, DeletePromotionParams } from "../params.ts";

/** promotions — 5 endpoints */
export function createPromotionsClient(api: PinterestApiClient) {
  return {
    /** Get promotions
   * Requires pinterest_oauth2: ads:read. */
    async listPromotions(params: ListPromotionsParams): Promise<PromotionsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<PromotionsListResponse>(`/ad_accounts/${adAccountId}/promotions`, query);
      return envelope;
    },

    /** Create promotions
   * Requires pinterest_oauth2: ads:write. */
    async createPromotion(params: CreatePromotionParams): Promise<PromotionsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<PromotionsCreateResponse>(`/ad_accounts/${adAccountId}/promotions`, body);
      return envelope;
    },

    /** Update promotions
   * Requires pinterest_oauth2: ads:write. */
    async updatePromotion(params: UpdatePromotionParams): Promise<PromotionsUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<PromotionsUpdateResponse>(`/ad_accounts/${adAccountId}/promotions`, body);
      return envelope;
    },

    /** Get promotion by id
   * Requires pinterest_oauth2: ads:read. */
    async getPromotions(params: GetPromotionsParams): Promise<PromotionsGetResponse> {
      const { promotionId, adAccountId, ...query } = params;
      const envelope = await api.get<PromotionsGetResponse>(`/ad_accounts/${adAccountId}/promotions/${promotionId}`, query);
      return envelope;
    },

    /** Delete promotion by id
   * Requires pinterest_oauth2: ads:write. */
    async deletePromotion(params: DeletePromotionParams): Promise<PromotionsDeleteResponse> {
      const { promotionId, adAccountId } = params;
      const envelope = await api.delete<PromotionsDeleteResponse>(`/ad_accounts/${adAccountId}/promotions/${promotionId}`);
      return envelope;
    },
  };
}
