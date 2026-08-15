// @generated
// fingerprint: sha256:a3e39357c565e658006dad2169d57d041aa0cabab3fbfbc535dce688395854a3
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for billing — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdsCreditsDiscountsGetResponse, AdsCreditRedeemResponse, BillingInvoiceDownloadGetResponse, BillingInvoicesGetResponse, BillingProfilesGetResponse, SsioAccountsGetResponse, SsioInsertionOrderCreateResponse, SsioInsertionOrderEditResponse, SsioInsertionOrdersStatusGetByPinOrderIdResponse, SsioInsertionOrdersStatusGetByAdAccountResponse, SsioOrderLinesGetByAdAccountResponse } from "../types.ts";
import type { ListAdsCreditsDiscountsParams, PostAdsCreditRedeemParams, GetBillingInvoiceDownloadParams, ListBillingInvoicesParams, ListBillingProfilesParams, GetSsioAccountsParams, CreateSsioInsertionOrderParams, PatchSsioInsertionOrderEditParams, GetSsioInsertionOrdersStatusGetByPinOrderIdParams, ListSsioInsertionOrdersStatusGetByAdAccountParams, ListSsioOrderLinesGetByAdAccountParams } from "../params.ts";

/** billing — 11 endpoints */
export function createBillingClient(api: PinterestApiClient) {
  return {
    /** Get ads credit discounts
   * Requires pinterest_oauth2: ads:read, billing:read. */
    async listAdsCreditsDiscounts(params: ListAdsCreditsDiscountsParams): Promise<AdsCreditsDiscountsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdsCreditsDiscountsGetResponse>(`/ad_accounts/${adAccountId}/ads_credit/discounts`, query);
      return envelope;
    },

    /** Redeem ad credits
   * Requires pinterest_oauth2: ads:write, billing:write. */
    async postAdsCreditRedeem(params: PostAdsCreditRedeemParams): Promise<AdsCreditRedeemResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AdsCreditRedeemResponse>(`/ad_accounts/${adAccountId}/ads_credit/redeem`, rest);
      return envelope;
    },

    /** Get download url for a billing invoice
   * Requires pinterest_oauth2: ads:read, billing:read. */
    async getBillingInvoiceDownload(params: GetBillingInvoiceDownloadParams): Promise<BillingInvoiceDownloadGetResponse> {
      const { adAccountId, billingInvoiceId, ...query } = params;
      const envelope = await api.get<BillingInvoiceDownloadGetResponse>(`/ad_accounts/${adAccountId}/billing_invoice/${billingInvoiceId}/download`, query);
      return envelope;
    },

    /** Get billing invoices
   * Requires pinterest_oauth2: ads:read, billing:read. */
    async listBillingInvoices(params: ListBillingInvoicesParams): Promise<BillingInvoicesGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<BillingInvoicesGetResponse>(`/ad_accounts/${adAccountId}/billing_invoices`, query);
      return envelope;
    },

    /** Get billing profiles
   * Requires pinterest_oauth2: ads:read, billing:read. */
    async listBillingProfiles(params: ListBillingProfilesParams): Promise<BillingProfilesGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<BillingProfilesGetResponse>(`/ad_accounts/${adAccountId}/billing_profiles`, query);
      return envelope;
    },

    /** Get Salesforce account details including bill-to information.
   * Requires pinterest_oauth2: ads:read. */
    async getSsioAccounts(params: GetSsioAccountsParams): Promise<SsioAccountsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SsioAccountsGetResponse>(`/ad_accounts/${adAccountId}/ssio/accounts`, query);
      return envelope;
    },

    /** Create insertion order through SSIO.
   * Requires pinterest_oauth2: ads:write. */
    async createSsioInsertionOrder(params: CreateSsioInsertionOrderParams): Promise<SsioInsertionOrderCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SsioInsertionOrderCreateResponse>(`/ad_accounts/${adAccountId}/ssio/insertion_orders`, rest);
      return envelope;
    },

    /** Edit insertion order through SSIO.
   * Requires pinterest_oauth2: ads:write. */
    async patchSsioInsertionOrderEdit(params: PatchSsioInsertionOrderEditParams): Promise<SsioInsertionOrderEditResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<SsioInsertionOrderEditResponse>(`/ad_accounts/${adAccountId}/ssio/insertion_orders`, rest);
      return envelope;
    },

    /** Get insertion order status by pin order id.
   * Requires pinterest_oauth2: ads:read. */
    async getSsioInsertionOrdersStatusGetByPinOrderId(params: GetSsioInsertionOrdersStatusGetByPinOrderIdParams): Promise<SsioInsertionOrdersStatusGetByPinOrderIdResponse> {
      const { adAccountId, pinOrderId, ...query } = params;
      const envelope = await api.get<SsioInsertionOrdersStatusGetByPinOrderIdResponse>(`/ad_accounts/${adAccountId}/ssio/insertion_orders/${pinOrderId}/status`, query);
      return envelope;
    },

    /** Get insertion order status by ad account id.
   * Requires pinterest_oauth2: ads:read. */
    async listSsioInsertionOrdersStatusGetByAdAccount(params: ListSsioInsertionOrdersStatusGetByAdAccountParams): Promise<SsioInsertionOrdersStatusGetByAdAccountResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SsioInsertionOrdersStatusGetByAdAccountResponse>(`/ad_accounts/${adAccountId}/ssio/insertion_orders/status`, query);
      return envelope;
    },

    /** Get Salesforce order lines by ad account id.
   * Requires pinterest_oauth2: ads:read. */
    async listSsioOrderLinesGetByAdAccount(params: ListSsioOrderLinesGetByAdAccountParams): Promise<SsioOrderLinesGetByAdAccountResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SsioOrderLinesGetByAdAccountResponse>(`/ad_accounts/${adAccountId}/ssio/order_lines`, query);
      return envelope;
    },
  };
}
