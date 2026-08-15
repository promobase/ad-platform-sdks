// @generated
// fingerprint: sha256:76bf934962601752986a8e5e21e08673bf8fc38db807b2aa5b51f54a0752f955
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { ThirdPartyPartnerViewabilityRequestMetric, ThirdPartyPartnerViewabilityRequestPlatform, ThirdPartyPartnerViewabilityRequestStatus } from "../enums.ts";

export interface ThirdPartyPartnerViewabilityRequestFields {
  created_time: string;
  description: string;
  ds: string;
  hour: string;
  id: string;
  metric: ThirdPartyPartnerViewabilityRequestMetric;
  modified_time: string;
  owner_instance_id: string;
  platform: ThirdPartyPartnerViewabilityRequestPlatform;
  status: ThirdPartyPartnerViewabilityRequestStatus;
  total_file_count: number;
}

export function thirdPartyPartnerViewabilityRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ThirdPartyPartnerViewabilityRequestFields,
    get: <F extends (keyof ThirdPartyPartnerViewabilityRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyPartnerViewabilityRequestFields, F[number]>>(`${id}`, opts),
  };
}

