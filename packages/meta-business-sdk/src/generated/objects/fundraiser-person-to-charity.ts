import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";

export interface FundraiserPersonToCharityFields {
  amount_raised: number;
  charity_id: string;
  currency: string;
  description: string;
  donations_count: number;
  donors_count: number;
  end_time: string;
  external_amount_raised: number;
  external_donations_count: number;
  external_donors_count: number;
  external_event_name: string;
  external_event_start_time: string;
  external_event_uri: string;
  external_fundraiser_uri: string;
  external_id: string;
  goal_amount: number;
  id: string;
  internal_amount_raised: number;
  internal_donations_count: number;
  internal_donors_count: number;
  name: string;
  uri: string;
}

export interface FundraiserPersonToCharityCreateExternalDonationsParams {
  amount_received: number;
  currency: string;
  donation_id_hash: string;
  donation_time: number;
  donor_id_hash: string;
  [key: string]: unknown;
}

export interface FundraiserPersonToCharityUpdateParams {
  description?: string;
  end_time?: string;
  external_event_name?: string;
  external_event_start_time?: string;
  external_event_uri?: string;
  external_fundraiser_uri?: string;
  external_id?: string;
  goal_amount?: number;
  name?: string;
  [key: string]: unknown;
}

export function fundraiserPersonToCharityNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as FundraiserPersonToCharityFields,
    get: <F extends (keyof FundraiserPersonToCharityFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FundraiserPersonToCharityFields, F[number]>>(`${id}`, opts),
    update: (params: FundraiserPersonToCharityUpdateParams) =>
      client.post<FundraiserPersonToCharityFields>(`${id}`, params as Record<string, unknown>),
    donations: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/donations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createEndFundraiser: (params: Record<string, unknown>) =>
      client.post<Record<string, unknown>>(`${id}/end_fundraiser`, params as Record<string, unknown>),
    externalDonations: {
      __path: `${id}/external_donations`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/external_donations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: FundraiserPersonToCharityCreateExternalDonationsParams) =>
        client.post<Record<string, unknown>>(`${id}/external_donations`, params as Record<string, unknown>),
    },
  };
}

