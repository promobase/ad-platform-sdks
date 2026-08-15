// @generated
// fingerprint: sha256:145446c26c56a1c851ea4f61701adc288dfa9029192e9f4d20ddad7deeb5d02a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CartData, Consent, ConversionCustomerType, ConversionEnvironment, CustomVariable, ExternalAttributionData, SessionAttributesKeyValuePairs, UserIdentifier } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ClickConversion. Do not edit by hand.
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
