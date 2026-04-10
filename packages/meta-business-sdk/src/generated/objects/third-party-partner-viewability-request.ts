import type { ApiClient } from "@promobase/sdk-runtime";
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

