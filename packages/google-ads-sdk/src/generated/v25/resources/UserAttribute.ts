// @generated
// fingerprint: sha256:c10a624aa0f1e4dfd638801fcec61ed66272a3b8f6c4f498cdf120eb3ac62144
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EventAttribute, ShoppingLoyalty } from "../index.ts";

// Generated from google.ads.googleads.v25.common.UserAttribute. Do not edit by hand.
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
