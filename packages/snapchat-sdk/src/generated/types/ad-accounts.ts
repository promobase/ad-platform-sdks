// @generated
// fingerprint: sha256:953c3df7b28b4c236940624ec85b7e6fd388ddb73dd81dcdc8b5d55d52f856a2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for ad-accounts — do not edit

export interface Adaccount {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  type: string;
  status: string;
  organization_id: string;
  funding_source_ids: unknown[];
  currency: string;
  timezone: string;
  advertiser: string;
  advertiser_organization_id: string;
  billing_center_id: string;
  billing_type: string;
  lifetime_spend_cap_micro: number;
  agency_representing_client: boolean;
  client_paying_invoices: boolean;
}


export interface CreateAdaccountParams {
  organizationId: string;
  name: string;
  type: string;
  status: string;
  funding_source_ids: unknown[];
  currency: string;
  billing_type: string;
  billing_center_id: string;
  lifetime_spend_cap_micro: string;
  timezone: string;
  advertiser: string;
}


export interface ListAdaccountsParams {
  organizationId: string;
}


export interface GetAdaccountParams {
  adAccountId: string;
}


export interface UpdateAdaccountParams {
  organizationId: string;
  id: string;
  name: string;
  type: string;
  status: string;
  funding_source_ids: unknown[];
  currency: string;
  timezone: string;
  brand_name: string;
  lifetime_spend_cap_micro: number;
}
