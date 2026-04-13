import type { ConversionActionCategory, ConversionValueRuleSetStatus, ValueRuleSetAttachmentType, ValueRuleSetDimension } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.ConversionValueRuleSet. Do not edit by hand.
export interface ConversionValueRuleSet {
  resourceName?: string;
  id?: string;
  conversionValueRules?: string[];
  dimensions?: ValueRuleSetDimension[];
  ownerCustomer?: string;
  attachmentType?: ValueRuleSetAttachmentType;
  campaign?: string;
  status?: ConversionValueRuleSetStatus;
  conversionActionCategories?: ConversionActionCategory[];
}
