import type { CustomerThirdPartyBrandLiftIntegrationPartner, CustomerThirdPartyBrandSafetyIntegrationPartner, CustomerThirdPartyConversionAttributionIntegrationPartner, CustomerThirdPartyReachIntegrationPartner, CustomerThirdPartyViewabilityIntegrationPartner } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CustomerThirdPartyIntegrationPartners. Do not edit by hand.
export interface CustomerThirdPartyIntegrationPartners {
  viewabilityIntegrationPartners?: CustomerThirdPartyViewabilityIntegrationPartner[];
  brandLiftIntegrationPartners?: CustomerThirdPartyBrandLiftIntegrationPartner[];
  brandSafetyIntegrationPartners?: CustomerThirdPartyBrandSafetyIntegrationPartner[];
  reachIntegrationPartners?: CustomerThirdPartyReachIntegrationPartner[];
  conversionAttributionIntegrationPartners?: CustomerThirdPartyConversionAttributionIntegrationPartner[];
}
