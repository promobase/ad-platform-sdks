// Auto-generated client for transactions — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Transaction, ListTransactionsParams } from "../types/transactions.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — transactions */
export function createTransactionsClient(api: SnapchatApiClient) {
  return {
    /** transactions */
    listTransactions(params: ListTransactionsParams): SnapchatCursor<Transaction> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/transactions`, link ? undefined : query).then((envelope) => ({
          items: unpack<Transaction>(envelope, "transactions", "transaction"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
