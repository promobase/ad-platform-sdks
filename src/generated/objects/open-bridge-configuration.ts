import type { ApiClient } from "../../runtime/client.ts";

export interface OpenBridgeConfigurationFields {
  active: boolean;
  blocked_event_types: string[];
  blocked_websites: string[];
  browser_agent: string[];
  capi_publishing_state: string;
  cloud_provider: string;
  cloud_region: string;
  destination_id: string;
  endpoint: string;
  event_enrichment_advertiser_state: string;
  event_enrichment_meta_state: string;
  event_enrichment_state: string;
  fallback_domain: string;
  host_business_id: string;
  id: string;
  instance_id: string;
  instance_version: string;
  is_sgw_instance: boolean;
  is_sgw_pixel_from_meta_pixel: boolean;
  partner_name: string;
  pixel_id: string;
  sgw_account_id: string;
  sgw_instance_url: string;
  sgw_pixel_id: string;
}

export interface OpenBridgeConfigurationUpdateParams {
  active?: boolean;
  blocked_event_types?: string[];
  blocked_websites?: string[];
  capi_publishing_state?: string;
  cloud_provider?: string;
  cloud_region?: string;
  destination_id?: string;
  endpoint?: string;
  event_enrichment_advertiser_state?: string;
  event_enrichment_meta_state?: string;
  event_enrichment_state?: string;
  fallback_domain?: string;
  host_business_id?: number;
  instance_id?: string;
  instance_version?: string;
  is_sgw_instance?: boolean;
  is_sgw_pixel_from_meta_pixel?: boolean;
  partner_name?: string;
  sgw_account_id?: string;
  sgw_instance_url?: string;
  sgw_pixel_id?: number;
  [key: string]: unknown;
}

export function openBridgeConfigurationNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof OpenBridgeConfigurationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OpenBridgeConfigurationFields, F[number]>>(`${id}`, opts),
    update: (params: OpenBridgeConfigurationUpdateParams) =>
      client.post<OpenBridgeConfigurationFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

