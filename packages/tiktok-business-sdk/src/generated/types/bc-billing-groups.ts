// @generated
// fingerprint: sha256:f311cba3c593d04cdc932bc15689fbf69c36d2c720eeb5ffdf86de65e341aff1
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for BC Billing Groups — do not edit

export interface BcBillingGroupCreateParams {
  bc_id: string;
  billing_group_name: string;
  advertiser_ids: string[];
  billing_group_emails?: string[];
  is_primary?: boolean;
  billing_group_type?: "AUCTION" | "RESERVATION";
}


export interface BcBillingGroupCreateResponse {
  billing_group_id?: string;
}


export interface BcBillingGroupUpdateParams {
  bc_id: string;
  billing_group_id: string;
  new_billing_group_name?: string;
  new_billing_group_emails?: string[];
  add_advertiser_ids?: string[];
  delete_advertiser_ids?: string[];
  is_primary?: boolean;
}


export interface BcBillingGroupUpdateResponse {}


export interface BcBillingGroupGetParams {
  bc_id: string;
  filtering?: {
  status?: "VALID" | "INVALID";
  invoice_group_by?: "ACCOUNT" | "ADVERTISER";
  billed_to_type?: "ACCOUNT" | "ADVERTISER";
  billing_group_id?: string;
  billing_group_name?: string;
  billing_group_type?: "AUCTION" | "RESERVATION";
};
  page?: number;
  page_size?: number;
}


export interface BcBillingGroupGetResponse {
  list?: {
  status?: "VALID" | "INVALID";
  billing_group_id?: string;
  billing_group_name?: string;
  invoice_object_name?: string;
  is_primary?: boolean;
  advertisers?: {
  advertiser_id?: string;
  advertiser_name?: string;
}[];
  billing_group_emails?: string[];
  invoice_group_by?: "ACCOUNT" | "ADVERTISER";
  billed_to_type?: "ACCOUNT" | "ADVERTISER";
  billing_group_type?: "AUCTION" | "RESERVATION";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcBillingGroupAdvertiserListParams {
  bc_id: string;
  billing_group_id: string;
  page?: number;
  page_size?: number;
}


export interface BcBillingGroupAdvertiserListResponse {
  list?: {
  advertiser_id?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
