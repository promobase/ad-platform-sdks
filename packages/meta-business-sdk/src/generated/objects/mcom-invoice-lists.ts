import type { McomInvoiceDetailsFields } from "./mcom-invoice-details.ts";

export interface McomInvoiceListsFields {
  invoice_details: McomInvoiceDetailsFields[];
  invoice_ids: string[];
  page_id: string;
}

