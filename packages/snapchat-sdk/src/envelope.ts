import type { SnapchatEnvelope } from "./api-client.ts";
import { SnapchatApiError } from "./errors.ts";

/**
 * Extract entities from a Marketing API response envelope.
 *
 * The API returns entities under a plural key, wrapped per-entity with a
 * `sub_request_status`. This unwraps them into a plain array and throws if any
 * sub-request failed (the envelope may still be HTTP 200 in that case).
 */
export function extractEntities<T>(
  envelope: SnapchatEnvelope & Record<string, unknown>,
  pluralKey: string,
  singularKey: string,
): T[] {
  const entries = envelope[pluralKey];
  if (!Array.isArray(entries)) return [];
  const results: T[] = [];
  for (const entry of entries) {
    if (typeof entry !== "object" || entry === null) continue;
    const record = entry as Record<string, unknown>;
    if (
      typeof record.sub_request_status === "string" &&
      record.sub_request_status.toUpperCase() !== "SUCCESS"
    ) {
      const reason =
        typeof record.sub_request_error_reason === "string"
          ? record.sub_request_error_reason
          : "Unknown sub-request error";
      throw new SnapchatApiError({
        message: `Snapchat ${pluralKey} sub-request failed: ${reason}`,
        status: 400,
        requestId: envelope.request_id,
      });
    }
    const entity = record[singularKey];
    if (entity !== undefined && entity !== null) {
      results.push(entity as T);
    }
  }
  return results;
}

/** Extract the next page link from an envelope's `paging` block. */
export function nextLink(envelope: SnapchatEnvelope): string | undefined {
  return envelope.paging?.next_link;
}
