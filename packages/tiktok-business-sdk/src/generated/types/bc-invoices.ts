// Auto-generated types for BC Invoices — do not edit

export interface BcInvoiceGetParams {
  bc_id: string;
  invoice_id?: string;
  invoice_title?: string;
  invoice_types: ("RECON" | "CREDIT" | "AUTO_PAY")[];
  pay_statuses?: ("UNPAID" | "PAID" | "PARTIAL_PAID" | "NO_NEED")[];
  start_time?: string;
  end_time?: string;
  page?: number;
  page_size?: number;
}


export interface BcInvoiceGetResponse {
  list?: {
  invoice_id?: string;
  serial_number?: string;
  subject_id?: number;
  send_date?: string;
  currency_code?: string;
  status?: "CREATED" | "SUBMITTED" | "APPROVED" | "DELETED";
  due_date?: string;
  invoice_type?: "RECON" | "CREDIT" | "AUTO_PAY";
  entity_serials?: string[];
  negative_invoice_ids?: {
  invoice_id?: string;
  serial_number?: string;
}[];
  positive_invoice_ids?: {
  invoice_id?: string;
  serial_number?: string;
}[];
  billing_group_id?: string;
  account_name?: string;
  invoice_title?: string;
  country_code?: string;
  address?: string;
  emails?: string[];
  tax_id1?: string;
  tax_id2?: string;
  amount?: number;
  amount_excluding_tax?: number;
  total_tax_amount?: number;
  tax_type1?: string;
  tax_rate1?: number;
  tax_amount1?: number;
  tax_type2?: string;
  tax_rate2?: number;
  tax_amount2?: number;
  pay_status?: string;
  overdue_status?: "INITIALIZED" | "YES" | "NO";
  unpaid_amount?: number;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface BcInvoiceUnpaidGetParams {
  bc_id: string;
  invoice_type: string;
}


export interface BcInvoiceUnpaidGetResponse {
  result?: {
  currency_code?: string;
  amount?: number;
};
}


export interface BcInvoiceDownloadParams {
  bc_id: string;
  invoice_id: string;
}


export interface BcInvoiceDownloadResponse {
  code?: number;
  message?: string;
  request_id?: string;
}


export interface BcInvoiceTaskCreateParams {
  bc_id: string;
  download_type: "INVOICE_LIST" | "INVOICE_BATCH" | "BILLING_REPORT";
  invoice_id?: string;
  filtering?: {
  invoice_title?: string;
  serial_number?: string;
  billing_group_id?: string;
  pay_statuses?: ("UNPAID" | "PAID" | "PARTIAL_PAID" | "NO_NEED")[];
  start_time?: string;
  end_time?: string;
  campaign_id?: string;
};
}


export interface BcInvoiceTaskCreateResponse {
  task_id?: string;
}


export interface BcInvoiceTaskGetParams {
  bc_id: string;
  task_id: string;
}


export interface BcInvoiceTaskGetResponse {
  download_url?: string;
  status?: "FAILED" | "CREATED" | "RUNNING" | "SUCCEED" | "POLLING";
  error_msg?: string;
}


export interface BcInvoiceTaskListParams {
  bc_id: string;
  page?: number;
  page_size?: number;
}


export interface BcInvoiceTaskListResponse {
  list?: {
  bc_id?: string;
  task_id?: string;
  status?: "FAILED" | "CREATED" | "RUNNING" | "SUCCEED" | "POLLING";
  create_time?: string;
  update_time?: string;
  download_url?: string;
  download_type?: "INVOICE_LIST" | "INVOICE_BATCH";
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
