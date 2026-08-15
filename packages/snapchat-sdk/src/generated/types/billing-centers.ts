// @generated
// fingerprint: sha256:0cb1568a9c0232f976e6c6cbcea6cad14e15a6392ca061bfe8d949ad111584f7
// DO NOT EDIT: generated file; changes will be overwritten.
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
