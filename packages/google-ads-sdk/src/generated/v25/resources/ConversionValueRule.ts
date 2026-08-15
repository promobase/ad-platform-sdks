// @generated
// fingerprint: sha256:d34fe4681582923f876d1049ec6e2604ab8bb69b2e615eaa8be8f1ad78994bba
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionValueRuleStatus, ValueRuleAction, ValueRuleAudienceCondition, ValueRuleDeviceCondition, ValueRuleGeoLocationCondition, ValueRuleItineraryCondition } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ConversionValueRule. Do not edit by hand.
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
