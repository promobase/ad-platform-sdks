export interface McomInvoiceDetailsFields {
  additional_amounts: Record<string, unknown>[];
  buyer_notes: string;
  currency_amount: Record<string, unknown>;
  external_invoice_id: string;
  features: Record<string, unknown>;
  invoice_created: number;
  invoice_id: string;
  invoice_instructions: string;
  invoice_instructions_image_url: string;
  invoice_updated: number;
  outstanding_amount: Record<string, unknown>;
  paid_amount: Record<string, unknown>;
  payments: Record<string, unknown>[];
  platform_logo_url: string;
  platform_name: string;
  product_items: Record<string, unknown>[];
  shipping_address: Record<string, unknown>;
  status: string;
  tracking_info: Record<string, unknown>;
}

