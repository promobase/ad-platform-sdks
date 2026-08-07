// Auto-generated client for lead_forms — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { LeadFormsListResponse, LeadFormsCreateResponse, LeadFormsUpdateResponse, LeadFormGetResponse, LeadFormTestCreateResponse } from "../types.ts";
import type { ListLeadFormsParams, CreateLeadFormParams, UpdateLeadFormParams, GetLeadFormParams, CreateLeadFormTestParams } from "../params.ts";

/** lead_forms — 5 endpoints */
export function createLeadFormsClient(api: PinterestApiClient) {
  return {
    /** List lead forms
   * Requires pinterest_oauth2: ads:read. */
    async listLeadForms(params: ListLeadFormsParams): Promise<LeadFormsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<LeadFormsListResponse>(`/ad_accounts/${adAccountId}/lead_forms`, query);
      return envelope;
    },

    /** Create lead forms
   * Requires pinterest_oauth2: ads:write. */
    async createLeadForm(params: CreateLeadFormParams): Promise<LeadFormsCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<LeadFormsCreateResponse>(`/ad_accounts/${adAccountId}/lead_forms`, body);
      return envelope;
    },

    /** Update lead forms
   * Requires pinterest_oauth2: ads:write. */
    async updateLeadForm(params: UpdateLeadFormParams): Promise<LeadFormsUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<LeadFormsUpdateResponse>(`/ad_accounts/${adAccountId}/lead_forms`, body);
      return envelope;
    },

    /** Get lead form by id
   * Requires pinterest_oauth2: ads:read. */
    async getLeadForm(params: GetLeadFormParams): Promise<LeadFormGetResponse> {
      const { leadFormId, adAccountId, ...query } = params;
      const envelope = await api.get<LeadFormGetResponse>(`/ad_accounts/${adAccountId}/lead_forms/${leadFormId}`, query);
      return envelope;
    },

    /** Create lead form test data
   * Requires pinterest_oauth2: ads:write. */
    async createLeadFormTest(params: CreateLeadFormTestParams): Promise<LeadFormTestCreateResponse> {
      const { adAccountId, leadFormId, ...rest } = params;
      const envelope = await api.post<LeadFormTestCreateResponse>(`/ad_accounts/${adAccountId}/lead_forms/${leadFormId}/test`, rest);
      return envelope;
    },
  };
}
