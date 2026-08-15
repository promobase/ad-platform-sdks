// @generated
// fingerprint: sha256:f01673ffb0c464804624e390186d6b76ec4e3265278c3e49b2af2d2ccaec5eb5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversionActionCategory, ConversionValueRuleSetStatus, ValueRuleSetAttachmentType, ValueRuleSetDimension } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ConversionValueRuleSet. Do not edit by hand.
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
