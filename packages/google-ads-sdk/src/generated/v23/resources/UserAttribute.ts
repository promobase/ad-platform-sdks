// @generated
// fingerprint: sha256:2bb17180f2e06aec3ef8d61119a3673557165bc103f464490fc410f870198668
// DO NOT EDIT: generated file; changes will be overwritten.
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
