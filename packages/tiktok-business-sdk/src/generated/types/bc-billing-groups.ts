// Auto-generated types for BC Billing Groups — do not edit

export interface BcBillingGroupCreateParams {}


export interface BcBillingGroupCreateResponse {}


export interface BcBillingGroupUpdateParams {
  bc_id: string;
  billing_group_id: string;
  new_billing_group_name?: string;
  new_billing_group_emails?: string[];
  add_advertiser_ids?: string[];
  delete_advertiser_ids?: string[];
  is_primary?: boolean;
}


export interface BcBillingGroupUpdateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface BcBillingGroupGetParams {}


export interface BcBillingGroupGetResponse {}


export interface BcBillingGroupAdvertiserListParams {}


export interface BcBillingGroupAdvertiserListResponse {}

