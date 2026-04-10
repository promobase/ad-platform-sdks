export interface TransactionFields {
  account_id: string;
  app_amount: Record<string, unknown>;
  billing_end_time: number;
  billing_reason: string;
  billing_start_time: number;
  card_charge_mode: number;
  charge_type: string;
  checkout_campaign_group_id: string;
  credential_id: string;
  fatura_id: number;
  id: string;
  is_business_ec_charge: boolean;
  is_funding_event: boolean;
  payment_option: string;
  product_type: string;
  provider_amount: Record<string, unknown>;
  status: string;
  time: number;
  tracking_id: string;
  transaction_type: string;
  tx_type: number;
  vat_invoice_id: string;
}

