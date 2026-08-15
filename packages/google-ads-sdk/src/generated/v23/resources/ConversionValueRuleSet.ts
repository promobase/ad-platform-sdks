// @generated
// fingerprint: sha256:3209937afd2ca90205bc0a2a86908c0dc37fd954ed78567402d67b07175daad0
// DO NOT EDIT: generated file; changes will be overwritten.
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
