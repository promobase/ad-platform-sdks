// @generated
// fingerprint: sha256:377e84a5686842a808f02453e8c064b399ca895f6c373fc5bfceaaf1e289fb50
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for product_group_promotions — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ProductGroupPromotionsCreateResponse, ProductGroupPromotionsUpdateResponse, ProductGroupPromotionsListResponse, ProductGroupPromotionsGetResponse, ProductGroupsAnalyticsResponse } from "../types.ts";
import type { CreateProductGroupPromotionParams, UpdateProductGroupPromotionParams, ListProductGroupPromotionsParams, GetProductGroupPromotionsParams, ListProductGroupsAnalyticsParams } from "../params.ts";

/** product_group_promotions — 5 endpoints */
export function createProductGroupPromotionsClient(api: PinterestApiClient) {
  return {
    /** Create product group promotions
   * Requires pinterest_oauth2: ads:write. */
    async createProductGroupPromotion(params: CreateProductGroupPromotionParams): Promise<ProductGroupPromotionsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<ProductGroupPromotionsCreateResponse>(`/ad_accounts/${adAccountId}/product_group_promotions`, rest);
      return envelope;
    },

    /** Update product group promotions
   * Requires pinterest_oauth2: ads:write. */
    async updateProductGroupPromotion(params: UpdateProductGroupPromotionParams): Promise<ProductGroupPromotionsUpdateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<ProductGroupPromotionsUpdateResponse>(`/ad_accounts/${adAccountId}/product_group_promotions`, rest);
      return envelope;
    },

    /** Get product group promotions
   * Requires pinterest_oauth2: ads:read. */
    async listProductGroupPromotions(params: ListProductGroupPromotionsParams): Promise<ProductGroupPromotionsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<ProductGroupPromotionsListResponse>(`/ad_accounts/${adAccountId}/product_group_promotions`, query);
      return envelope;
    },

    /** Get a product group promotion by id
   * Requires pinterest_oauth2: ads:read. */
    async getProductGroupPromotions(params: GetProductGroupPromotionsParams): Promise<ProductGroupPromotionsGetResponse> {
      const { adAccountId, productGroupPromotionId, ...query } = params;
      const envelope = await api.get<ProductGroupPromotionsGetResponse>(`/ad_accounts/${adAccountId}/product_group_promotions/${productGroupPromotionId}`, query);
      return envelope;
    },

    /** Get product group analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listProductGroupsAnalytics(params: ListProductGroupsAnalyticsParams): Promise<ProductGroupsAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<ProductGroupsAnalyticsResponse>(`/ad_accounts/${adAccountId}/product_groups/analytics`, query);
      return envelope;
    },
  };
}
