export interface McomInvoiceBankAccountFields {
  num_pending_verification_accounts: number;
  num_verified_accounts: number;
  pending_verification_accounts: Record<string, unknown>[];
  verified_accounts: Record<string, unknown>[];
}

