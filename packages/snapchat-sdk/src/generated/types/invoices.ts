// @generated
// fingerprint: sha256:c1061f7e690305aac4876216761160e4b1f8936d1a7704cba59939bf764f5074
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for invoices — do not edit

export interface Invoice {
  org_id: string;
  invoice_id: string;
  netsuite_file_id: string;
  ad_account_id: string;
  customer: {
  name: string;
  netsuite_id: string;
};
  document_number: string;
  line_last_modified: string;
  last_modified: string;
  amount_cent: number;
  currency: string;
  billing_period: string;
  due_date: string;
  created_at: string;
  invoice_status: string;
}


export interface ListInvoicesParams {
  adAccountId: string;
}


export interface GetInvoicParams {
  adAccountId: string;
  invoiceId: string;
  include_pdf?: string;
}
