import type { CampaignThirdPartyBrandLiftIntegrationPartner, CampaignThirdPartyBrandSafetyIntegrationPartner, CampaignThirdPartyConversionAttributionIntegrationPartner, CampaignThirdPartyReachIntegrationPartner, CampaignThirdPartyViewabilityIntegrationPartner } from "../index.ts";

// Generated from google.ads.googleads.v25.common.CampaignThirdPartyIntegrationPartners. Do not edit by hand.
export interface CampaignThirdPartyIntegrationPartners {
  viewabilityIntegrationPartners?: CampaignThirdPartyViewabilityIntegrationPartner[];
  brandLiftIntegrationPartners?: CampaignThirdPartyBrandLiftIntegrationPartner[];
  brandSafetyIntegrationPartners?: CampaignThirdPartyBrandSafetyIntegrationPartner[];
  reachIntegrationPartners?: CampaignThirdPartyReachIntegrationPartner[];
  conversionAttributionIntegrationPartners?: CampaignThirdPartyConversionAttributionIntegrationPartner[];
}
