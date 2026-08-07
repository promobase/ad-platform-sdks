// Auto-generated client for invoices — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Invoice, ListInvoicesParams, GetInvoicParams } from "../types/invoices.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — invoices */
export function createInvoicesClient(api: SnapchatApiClient) {
  return {
    /** invoices */
    listInvoices(params: ListInvoicesParams): SnapchatCursor<Invoice> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/invoices`, link ? undefined : query).then((envelope) => ({
          items: unpack<Invoice>(envelope, "invoices", "invoice"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** invoices */
    async getInvoic(params: GetInvoicParams): Promise<Invoice> {
      const { adAccountId, invoiceId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/invoices/${invoiceId}`, query);
      return ensureOne<Invoice>(unpack<Invoice>(envelope, "invoices", "invoice"), "Invoice");
    },
  };
}
