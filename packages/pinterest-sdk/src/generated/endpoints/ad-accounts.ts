// Auto-generated client for ad_accounts — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AdAccountsListResponse, AdAccountsCreateResponse, AdAccountsGetResponse, AdAccountAnalyticsResponse, AnalyticsGetMmmReportResponse, AnalyticsCreateMmmReportResponse, AnalyticsGetReportResponse, AnalyticsCreateReportResponse, AnalyticsGetConversionProductReportResponse, AnalyticsCreateConversionProductReportResponse, SandboxDeleteResponse, AdAccountTargetingAnalyticsGetResponse, TemplatesListResponse, AnalyticsCreateTemplateReportResponse } from "../types.ts";
import type { ListAdAccountsParams, CreateAdAccountParams, GetAdAccountsParams, ListAdAccountAnalyticsParams, GetAnalyticsGetMmmReportParams, PostAnalyticsCreateMmmReportParams, GetAnalyticsGetReportParams, PostAnalyticsCreateReportParams, GetAnalyticsGetConversionProductReportParams, PostAnalyticsCreateConversionProductReportParams, DeleteSandboxParams, GetAdAccountTargetingAnalyticsParams, ListTemplatesParams, PostAnalyticsCreateTemplateReportParams } from "../params.ts";

/** ad_accounts — 14 endpoints */
export function createAdAccountsClient(api: PinterestApiClient) {
  return {
    /** List ad accounts
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdAccounts(params: ListAdAccountsParams): Promise<AdAccountsListResponse> {
      const query = params;
      const envelope = await api.get<AdAccountsListResponse>(`/ad_accounts`, query);
      return envelope;
    },

    /** Create ad account
   * Requires pinterest_oauth2: ads:write. */
    async createAdAccount(params: CreateAdAccountParams): Promise<AdAccountsCreateResponse> {
      const rest = params;
      const envelope = await api.post<AdAccountsCreateResponse>(`/ad_accounts`, rest);
      return envelope;
    },

    /** Get ad account
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdAccounts(params: GetAdAccountsParams): Promise<AdAccountsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdAccountsGetResponse>(`/ad_accounts/${adAccountId}`, query);
      return envelope;
    },

    /** Get ad account analytics
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdAccountAnalytics(params: ListAdAccountAnalyticsParams): Promise<AdAccountAnalyticsResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdAccountAnalyticsResponse>(`/ad_accounts/${adAccountId}/analytics`, query);
      return envelope;
    },

    /** Get advertiser Marketing Mix Modeling (MMM) report.
   * Requires pinterest_oauth2: ads:read. */
    async getAnalyticsGetMmmReport(params: GetAnalyticsGetMmmReportParams): Promise<AnalyticsGetMmmReportResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AnalyticsGetMmmReportResponse>(`/ad_accounts/${adAccountId}/mmm_reports`, query);
      return envelope;
    },

    /** Create a request for a Marketing Mix Modeling (MMM) report
   * Requires pinterest_oauth2: ads:read. */
    async postAnalyticsCreateMmmReport(params: PostAnalyticsCreateMmmReportParams): Promise<AnalyticsCreateMmmReportResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AnalyticsCreateMmmReportResponse>(`/ad_accounts/${adAccountId}/mmm_reports`, rest);
      return envelope;
    },

    /** Get the account analytics report created by the async call
   * Requires pinterest_oauth2: ads:read. */
    async getAnalyticsGetReport(params: GetAnalyticsGetReportParams): Promise<AnalyticsGetReportResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AnalyticsGetReportResponse>(`/ad_accounts/${adAccountId}/reports`, query);
      return envelope;
    },

    /** Create async request for an account analytics report
   * Requires pinterest_oauth2: ads:read. */
    async postAnalyticsCreateReport(params: PostAnalyticsCreateReportParams): Promise<AnalyticsCreateReportResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AnalyticsCreateReportResponse>(`/ad_accounts/${adAccountId}/reports`, rest);
      return envelope;
    },

    /** Get advertiser brand, category, SKU report
   * Requires pinterest_oauth2: ads:read. */
    async getAnalyticsGetConversionProductReport(params: GetAnalyticsGetConversionProductReportParams): Promise<AnalyticsGetConversionProductReportResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AnalyticsGetConversionProductReportResponse>(`/ad_accounts/${adAccountId}/reports/brand_category_sku`, query);
      return envelope;
    },

    /** Create a request for a brand, category, SKU report
   * Requires pinterest_oauth2: ads:read. */
    async postAnalyticsCreateConversionProductReport(params: PostAnalyticsCreateConversionProductReportParams): Promise<AnalyticsCreateConversionProductReportResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<AnalyticsCreateConversionProductReportResponse>(`/ad_accounts/${adAccountId}/reports/brand_category_sku`, rest);
      return envelope;
    },

    /** Delete ads data for ad account in API Sandbox
   * Requires pinterest_oauth2: ads:write. */
    async deleteSandbox(params: DeleteSandboxParams): Promise<SandboxDeleteResponse> {
      const { adAccountId } = params;
      const envelope = await api.delete<SandboxDeleteResponse>(`/ad_accounts/${adAccountId}/sandbox`);
      return envelope;
    },

    /** Get targeting analytics for an ad account
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getAdAccountTargetingAnalytics(params: GetAdAccountTargetingAnalyticsParams): Promise<AdAccountTargetingAnalyticsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdAccountTargetingAnalyticsGetResponse>(`/ad_accounts/${adAccountId}/targeting_analytics`, query);
      return envelope;
    },

    /** List templates
   * Requires pinterest_oauth2: ads:read. */
    async listTemplates(params: ListTemplatesParams): Promise<TemplatesListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<TemplatesListResponse>(`/ad_accounts/${adAccountId}/templates`, query);
      return envelope;
    },

    /** Create async request for an analytics report using a template
   * Requires pinterest_oauth2: ads:read. */
    async postAnalyticsCreateTemplateReport(params: PostAnalyticsCreateTemplateReportParams): Promise<AnalyticsCreateTemplateReportResponse> {
      const { adAccountId, templateId, ...rest } = params;
      const envelope = await api.post<AnalyticsCreateTemplateReportResponse>(`/ad_accounts/${adAccountId}/templates/${templateId}/reports`, undefined);
      return envelope;
    },
  };
}
