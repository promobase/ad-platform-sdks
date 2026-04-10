import type { FundingSourceDetailsCouponTieringFields } from "./funding-source-details-coupon-tiering.ts";

export interface FundingSourceDetailsCouponFields {
  amount: number;
  campaign_ids: number[];
  child_ad_account_id: string;
  child_bm_id: string;
  coupon_id: string;
  coupon_tiering: FundingSourceDetailsCouponTieringFields;
  currency: string;
  display_amount: string;
  expiration: string;
  original_amount: number;
  original_display_amount: string;
  start_date: string;
  vendor_id: string;
}

