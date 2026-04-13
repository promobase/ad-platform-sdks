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
