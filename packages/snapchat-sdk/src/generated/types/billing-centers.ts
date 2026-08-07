// Auto-generated types for billing-centers — do not edit

export interface Billingcenter {
  id: string;
  updated_at: string;
  created_at: string;
  organization_id: string;
  name: string;
  email_address: string;
  address_line_1: string;
  locality: string;
  administrative_district_level_1: string;
  country: string;
  postal_code: string;
  alternative_email_addresses: unknown[];
}


export interface ListBillingcentersParams {
  organizationId: string;
}


export interface GetBillingcenterParams {
  billingCenterId: string;
}


export interface CreateBillingcenterParams {
  organizationId: string;
  name: string;
  email_address: string;
  address_line_1: string;
  locality: string;
  administrative_district_level_1: string;
  country: string;
  postal_code: string;
  alternative_email_addresses: unknown[];
}


export interface UpdateBillingcenterParams {
  organizationId: string;
}
