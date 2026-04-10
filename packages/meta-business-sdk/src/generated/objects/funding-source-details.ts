import type { FundingSourceDetailsCouponFields } from "./funding-source-details-coupon.ts";

export interface FundingSourceDetailsFields {
  coupon: FundingSourceDetailsCouponFields;
  coupons: FundingSourceDetailsCouponFields[];
  display_string: string;
  id: string;
  type: number;
}

