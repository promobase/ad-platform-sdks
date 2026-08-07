// Auto-generated types for lead-generation-ads — do not edit

export interface LeadGenerationForm {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  privacy_policy_url: string;
  description: string;
  title: string;
  form_fields: {
  type: string;
}[];
  legal_disclosures: {
  title: string;
  description: string;
};
  strategy_type: string;
}


export interface GetLeadGenerationFormParams {
  leadGenerationFormId: string;
}


export interface ListLeadGenerationFormsParams {
  adAccountId: string;
}
