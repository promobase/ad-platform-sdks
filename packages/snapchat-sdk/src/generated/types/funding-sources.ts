// @generated
// fingerprint: sha256:fa0442465adb791e3b511e9e076e9919f07457925e3c63ced6f3ac4185a370f8
// DO NOT EDIT: generated file; changes will be overwritten.
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
