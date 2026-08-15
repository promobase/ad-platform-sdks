// @generated
// fingerprint: sha256:2566f025c9e57b9dafc22c11013a548d70df36990f858e7fcd20a3eae2d2586d
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for creatives — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Creative, PhoneNumber, Snapcode, CreativePreview, CreateCreativParams, ListPhoneNumbersParams, ListCreativesParams, GetCreativParams, GetCreativByIdsParams, GetCreativSnapcodeParams, GetCreativCreativePreviewParams } from "../types/creatives.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — creatives */
export function createCreativesClient(api: SnapchatApiClient) {
  return {
    /** Example request - APP_INSTALL Creative ​ */
    async createCreativ(params: CreateCreativParams): Promise<Creative> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/creatives`, { creatives: [{ ...rest }] });
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** creatives */
    listPhoneNumbers(params: ListPhoneNumbersParams): SnapchatCursor<PhoneNumber> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/phone_numbers`, link ? undefined : query).then((envelope) => ({
          items: unpack<PhoneNumber>(envelope, "phone_numbers", "phone_number"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example 1 - Fetch all Creatives ​ */
    listCreatives(params: ListCreativesParams): SnapchatCursor<Creative> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/creatives`, link ? undefined : query).then((envelope) => ({
          items: unpack<Creative>(envelope, "creatives", "creative"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Get specific Creative ​ */
    async getCreativ(params: GetCreativParams): Promise<Creative> {
      const { creativeId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/creatives/${creativeId}`, query);
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** Example - Fetch Multiple Creatives (POST) ​ */
    async getCreativByIds(params: GetCreativByIdsParams): Promise<Creative> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/${adAccountId}/get_creatives_by_ids`, rest);
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** creatives */
    getCreativSnapcode(params: GetCreativSnapcodeParams): SnapchatCursor<Snapcode> {
      const { creativeId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/creatives/${creativeId}/snapcode`, link ? undefined : query).then((envelope) => ({
          items: unpack<Snapcode>(envelope, "snapcode", "snapcode"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example ​ */
    getCreativCreativePreview(params: GetCreativCreativePreviewParams): SnapchatCursor<CreativePreview> {
      const { creativeId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/creatives/${creativeId}/creative_preview`, link ? undefined : query).then((envelope) => ({
          items: unpack<CreativePreview>(envelope, "creative_preview", "creative_preview"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
