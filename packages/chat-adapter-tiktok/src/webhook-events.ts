import { TikTok, tiktokWebhookEventSchema } from "@openpromo/tiktok";
import type { TikTokWebhookEvent } from "@openpromo/tiktok";
import { safeParse } from "valibot";

/**
 * Collect webhook events from any of TikTok's payload shapes (flat event,
 * `events` array, or `data` wrapper) and validate them against the full
 * webhook schema. Callers filter by event type.
 */
export function collectTikTokWebhookEvents(payload: unknown): TikTokWebhookEvent[] {
  if (typeof payload !== "object" || payload === null) return [];
  const record = payload as Record<string, unknown>;
  const candidates: unknown[] = [];
  if (Array.isArray(record.events)) candidates.push(...record.events);
  if (typeof record.event === "object" && record.event !== null) candidates.push(record.event);
  if (typeof record.data === "object" && record.data !== null) candidates.push(record.data);
  candidates.push(record);

  const events: TikTokWebhookEvent[] = [];
  for (const candidate of candidates) {
    const parsed = safeParse(tiktokWebhookEventSchema, candidate);
    if (parsed.success) events.push(parsed.output);
  }
  return events;
}

export { TikTok };
