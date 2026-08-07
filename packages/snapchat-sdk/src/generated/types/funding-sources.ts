// Auto-generated types for funding-sources — do not edit

export interface Fundingsource {
  id: string;
  updated_at: string;
  created_at: string;
  type: string;
  card_type: string;
  name: string;
  last_4: string;
  expiration_month: string;
  expiration_year: string;
  daily_spend_limit_micro: number;
  daily_spend_currency: string;
}


export interface ListFundingsourcesParams {
  organizationId: string;
}


export interface GetFundingsourcParams {
  fundingSourceId: string;
}
