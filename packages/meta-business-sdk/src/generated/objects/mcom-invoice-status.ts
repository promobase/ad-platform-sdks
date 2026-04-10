export interface McomInvoiceStatusFields {
  bank_account_number: string;
  bank_code: string;
  invoice_id: string;
  invoice_status: string;
  page_id: string;
  payment_method: string;
  payment_type: string;
  payout_amount: Record<string, unknown>;
  slip_verification_error: string;
  slip_verification_status: string;
  sof_transfer_id: string;
  sof_transfer_timestamp: number;
  transaction_fee: Record<string, unknown>;
  transfer_slip: string;
  transfer_slip_qr_code: string;
}

