import type { PolicyTopicEvidenceDestinationNotWorkingDevice, PolicyTopicEvidenceDestinationNotWorkingDnsErrorType } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyTopicEvidence.DestinationNotWorking. Do not edit by hand.
export interface DestinationNotWorking {
  expandedUrl?: string;
  device?: PolicyTopicEvidenceDestinationNotWorkingDevice;
  lastCheckedDateTime?: string;
  dnsErrorType?: PolicyTopicEvidenceDestinationNotWorkingDnsErrorType;
  httpErrorCode?: string;
}
