import type { EventAttribute, ShoppingLoyalty } from "../index.ts";

// Generated from google.ads.googleads.v23.common.UserAttribute. Do not edit by hand.
export interface UserAttribute {
  lifetimeValueMicros?: string;
  lifetimeValueBucket?: number;
  lastPurchaseDateTime?: string;
  averagePurchaseCount?: number;
  averagePurchaseValueMicros?: string;
  acquisitionDateTime?: string;
  shoppingLoyalty?: ShoppingLoyalty;
  lifecycleStage?: string;
  firstPurchaseDateTime?: string;
  eventAttribute?: EventAttribute[];
}
