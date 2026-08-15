// @generated
// fingerprint: sha256:03434da4f683d58b3471c6f044f689a397d0149fdb7f03a8aaf84cdc47483f6d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleStatus, ValueRuleAction, ValueRuleAudienceCondition, ValueRuleDeviceCondition, ValueRuleGeoLocationCondition, ValueRuleItineraryCondition } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ConversionValueRule. Do not edit by hand.
export interface ConversionValueRule {
  resourceName?: string;
  id?: string;
  action?: ValueRuleAction;
  geoLocationCondition?: ValueRuleGeoLocationCondition;
  deviceCondition?: ValueRuleDeviceCondition;
  audienceCondition?: ValueRuleAudienceCondition;
  itineraryCondition?: ValueRuleItineraryCondition;
  ownerCustomer?: string;
  status?: ConversionValueRuleStatus;
}
