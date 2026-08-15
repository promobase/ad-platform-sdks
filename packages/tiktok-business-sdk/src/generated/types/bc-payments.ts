// @generated
// fingerprint: sha256:7de803984e69d190ad67f4ac336b03b0b6ae4bb01ecab74aaafe2795a670e08e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for BC Payments — do not edit

export interface BcTransferParams {
  bc_id: string;
  transfer_level?: "ADVERTISER" | "BC";
  advertiser_id?: string;
  payment_portfolio_id?: string;
  transfer_type: "RECHARGE" | "REFUND";
  amount_info?: {
  cash_amount?: number;
  grant_amount?: number;
  credit_amount?: number;
};
  cash_amount?: number;
  grant_amount?: number;
  request_id?: string;
}


export interface BcTransferResponse {
  bc_id?: number;
  advertiser_id?: number;
  transaction_infos?: {
  transaction_id?: string;
  transaction_type?: "CASH" | "GRANT" | "CREDIT";
  payee_account?: {
  account_type?: "BC" | "ADVERTISER" | "PORTFOLIO";
  account_id?: string;
};
  remitter_account?: {
  account_type?: "BC" | "ADVERTISER" | "PORTFOLIO";
  account_id?: string;
};
}[];
}


export interface AdvertiserBalanceGetParams {
  bc_id: string;
  fields?: string[];
  filtering?: {
  keyword?: string;
  advertiser_status?: string[];
  payment_portfolio_id?: string;
};
  page?: number;
  page_size?: number;
}


export interface AdvertiserBalanceGetResponse {
  advertiser_account_list?: {
  advertiser_id?: string;
  advertiser_name?: string;
  advertiser_status?: string;
  advertiser_type?: string;
  timezone?: string;
  currency?: string;
  account_open_days?: number;
  balance_reminder?: boolean;
  company?: string;
  contact_name?: string;
  contact_email?: string;
  create_time?: string;
  first_recharge_amount?: number;
  first_recharge_time?: string;
  latest_recharge_time?: string;
  recharge_amount?: number;
  recharge_count?: number;
  account_balance?: number;
  valid_account_balance?: number;
  frozen_balance?: number;
  tax?: number;
  cash_balance?: number;
  valid_cash_balance?: number;
  grant_balance?: number;
  valid_grant_balance?: number;
  payment_portfolio_id?: number;
  payment_portfolio_name?: string;
  payment_portfolio_type?: "SHARED" | "NON_SHARED";
  transferable_amount?: number;
  max_transferable_amount?: {
  cash_amount?: number;
  grant_amount?: number;
};
  balance_info?: {
  account_balance?: number;
  frozen_balance?: number;
  valid_account_balance?: number;
  tax?: number;
  cash_balance?: number;
  frozen_cash_balance?: number;
  cash_tax?: number;
  valid_cash_balance?: number;
  grant_balance?: number;
  valid_grant_balance?: number;
  frozen_grant_balance?: number;
  credit_balance?: number;
  valid_credit_balance?: number;
  frozen_credit_balance?: number;
};
  budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  budget?: number;
  budget_cost?: number;
  budget_remaining?: number;
  budget_frequency_restriction?: {
  total_count?: number;
  used_count?: number;
  remaining_count?: number;
  effective_start_time?: string;
  effective_end_time?: string;
};
  budget_amount_restriction?: {
  minimum_amount?: string;
};
  min_transferable_amount?: {
  cash_amount?: string;
  grant_amount?: string;
  credit_amount?: string;
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcBalanceGetParams {
  bc_id: string;
  payment_portfolio_id?: string;
}


export interface BcBalanceGetResponse {
  bc_id?: string;
  currency?: string;
  account_balance?: number;
  valid_account_balance?: number;
  frozen_balance?: number;
  tax?: number;
  cash_balance?: number;
  valid_cash_balance?: number;
  grant_balance?: number;
  valid_grant_balance?: number;
  payment_portfolio_type?: "SHARED" | "NON_SHARED";
}


export interface BcAccountTransactionGetParams {
  bc_id: string;
  transaction_level?: "BC" | "ADVERTISER" | "PAYMENT_PORTFOLIO";
  filtering?: {
  transaction_types?: string[];
  owner_of_account?: ("OWNED_BY_CURRENT_BUSINESS_CENTER" | "SHARED_BY_OTHER_BUSINESS_CENTER")[];
  account_ids?: string[];
  account_name?: string;
  start_time?: string;
  end_time?: string;
  billing_types?: ("CASH" | "CREDIT")[];
};
  page?: number;
  page_size?: number;
}


export interface BcAccountTransactionGetResponse {
  transaction_list?: {
  transaction_id?: string;
  payment_portfolio_id?: string;
  payment_portfolio_name?: string;
  account_id?: string;
  account_name?: string;
  bc_id?: string;
  bc_name?: string;
  amount?: number;
  subtotal?: number;
  tax_amount?: number;
  currency?: string;
  amount_type?: "POSITIVE" | "NEGATIVE" | "OTHER";
  transaction_type?: string;
  billing_type?: "CASH" | "CREDIT";
  timezone?: string;
  create_time?: string;
  invoice_id?: string;
  serial_number?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface AdvertiserTransactionGetParams {
  bc_id: string;
  filtering?: {
  transfer_type?: "TRANS_TYPE_TRANSFER" | "TRANS_TYPE_TAX" | "TRANS_TYPE_COST" | "TRANS_TYPE_PAYMENT";
  funds_type?: string[];
  summary_by_account?: boolean;
  keyword?: string;
  start_date?: string;
  end_date?: string;
};
  page?: number;
  page_size?: number;
}


export interface AdvertiserTransactionGetResponse {
  transaction_list?: {
  advertiser_id?: string;
  advertiser_name?: string;
  amount?: number;
  currency?: string;
  date?: string;
  funds_type?: string;
  transfer_type?: "TRANS_TYPE_TRANSFER" | "TRANS_TYPE_TAX" | "TRANS_TYPE_COST";
  timezone?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcTransactionGetParams {
  bc_id: string;
  filtering?: {
  funds_type?: ("FUNDS_TYPE_CASH" | "FUNDS_TYPE_GRANT")[];
};
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;
}


export interface BcTransactionGetResponse {
  page_info?: {
  page?: number;
  total_number?: number;
  page_size?: number;
  total_page?: number;
};
  list?: {
  date?: number;
  amount?: number;
  timezone?: string;
  currency?: string;
  funds_type?: string;
  invoice_id?: string;
  invoice_serial_number?: string;
}[];
  transaction_summary?: {
  amount_charged?: number;
  amount_paid?: number;
  currency?: string;
};
}


export interface BcAccountBudgetChangelogGetParams {
  bc_id: string;
  advertiser_id: string;
  filtering?: {
  start_date?: string;
  end_date?: string;
};
  page?: number;
  page_size?: number;
}


export interface BcAccountBudgetChangelogGetResponse {
  changelog_list?: {
  operation_time?: string;
  activity_type?: "RESET" | "BUDGET_MODE_UPDATE" | "INCREASE_BUDGET" | "DECREASE_BUDGET" | "REMOVE_BUDGET";
  previous_budget?: number;
  previous_budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  current_budget?: number;
  current_budget_mode?: "UNLIMITED" | "MONTHLY_BUDGET" | "DAILY_BUDGET" | "CUSTOM_BUDGET";
  currency?: string;
  operator_id?: string;
  operator_name?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcAccountCostGetParams {
  bc_id: string;
  filtering?: {
  keyword?: string;
  start_date?: string;
  end_date?: string;
};
  page?: number;
  page_size?: number;
}


export interface BcAccountCostGetResponse {
  cost_list?: {
  advertiser_id?: string;
  advertiser_name?: string;
  amount?: number;
  cash_amount?: number;
  grant_amount?: number;
  tax_amount?: number;
  currency?: string;
}[];
  transaction_summary?: {
  amount?: number;
  cash_amount?: number;
  grant_amount?: number;
  tax_amount?: number;
  currency?: string;
};
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
