import type { ApiClient } from "@promobase/sdk-runtime";

export interface PrivateLiftStudyInstanceFields {
  breakdown_key: string;
  created_time: string;
  feature_list: string[];
  id: string;
  issuer_certificate: string;
  latest_status_update_time: string;
  run_id: string;
  server_hostnames: string[];
  server_ips: string[];
  status: string;
  tier: string;
}

export interface PrivateLiftStudyInstanceUpdateParams {
  operation?: string;
  run_id?: string;
  [key: string]: unknown;
}

export function privateLiftStudyInstanceNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PrivateLiftStudyInstanceFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PrivateLiftStudyInstanceFields, F[number]>>(`${id}`, opts),
    update: (params: PrivateLiftStudyInstanceUpdateParams) =>
      client.post<PrivateLiftStudyInstanceFields>(`${id}`, params as Record<string, unknown>),
  };
}

