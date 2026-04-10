import type { ApiClient } from "../../runtime/client.ts";

export interface BrandRequestFields {
  ad_countries: string[];
  additional_contacts: string[];
  approval_level: number;
  cells: Record<string, unknown>[];
  countries: string[];
  deny_reason: string;
  end_time: string;
  estimated_reach: number;
  id: string;
  is_multicell: boolean;
  locale: string;
  max_age: number;
  min_age: number;
  questions: Record<string, unknown>[];
  region: string;
  request_status: string;
  review_date: string;
  start_time: string;
  status: string;
  submit_date: string;
  total_budget: number;
}

export function brandRequestNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BrandRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BrandRequestFields, F[number]>>(`${id}`, opts),
  };
}

