// @generated
// fingerprint: sha256:64d1bbb5b3470a0847f570e292254f186b1e32b6d39e63f56be578dae27716da
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CartData, Consent, ConversionCustomerType, ConversionEnvironment, CustomVariable, ExternalAttributionData, SessionAttributesKeyValuePairs, UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ClickConversion. Do not edit by hand.
export interface ClickConversion {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  conversionAction?: string;
  conversionDateTime?: string;
  conversionValue?: number;
  currencyCode?: string;
  orderId?: string;
  externalAttributionData?: ExternalAttributionData;
  customVariables?: CustomVariable[];
  cartData?: CartData;
  userIdentifiers?: UserIdentifier[];
  conversionEnvironment?: ConversionEnvironment;
  consent?: Consent;
  customerType?: ConversionCustomerType;
  userIpAddress?: string;
  sessionAttributesEncoded?: string;
  sessionAttributesKeyValuePairs?: SessionAttributesKeyValuePairs;
}
