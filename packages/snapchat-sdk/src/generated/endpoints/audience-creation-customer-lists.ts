// @generated
// fingerprint: sha256:2862cc3e264162d5f9d0a5cc25fd20a2c6f7138248ef00948e5bec3fb05ae201
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for customer-lists — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Segment, User, CreateSegmentParams, ListSegmentsParams, GetSegmentParams, UpdateSegmentParams, CreateUserParams, DeleteUserParams, DeleteAllUserParams, DeleteSegmentParams } from "../types/audience-creation-customer-lists.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — customer-lists */
export function createAudienceCreationCustomerListsClient(api: SnapchatApiClient) {
  return {
    /** customer-lists */
    async createSegment(params: CreateSegmentParams): Promise<Segment> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/segments`, { segments: [{ ...rest }] });
      return ensureOne<Segment>(unpack<Segment>(envelope, "segments", "segment"), "Segment");
    },

    /** customer-lists */
    listSegments(params: ListSegmentsParams): SnapchatCursor<Segment> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/segments`, link ? undefined : query).then((envelope) => ({
          items: unpack<Segment>(envelope, "segments", "segment"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** customer-lists */
    async getSegment(params: GetSegmentParams): Promise<Segment> {
      const { segmentId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/segments/${segmentId}`, query);
      return ensureOne<Segment>(unpack<Segment>(envelope, "segments", "segment"), "Segment");
    },

    /** customer-lists */
    async updateSegment(params: UpdateSegmentParams): Promise<Segment> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/segments`, rest);
      return ensureOne<Segment>(unpack<Segment>(envelope, "segments", "segment"), "Segment");
    },

    /** customer-lists */
    async createUser(params: CreateUserParams): Promise<User> {
      const { segmentId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/segments/${segmentId}/users`, { users: [{ ...rest }] });
      return ensureOne<User>(unpack<User>(envelope, "users", "user"), "User");
    },

    /** customer-lists */
    async deleteUser(params: DeleteUserParams): Promise<void> {
      const { segmentId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/segments/${segmentId}/users`);
    },

    /** customer-lists */
    async deleteAllUser(params: DeleteAllUserParams): Promise<void> {
      const { segmentId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/segments/${segmentId}/all_users`);
    },

    /** customer-lists */
    async deleteSegment(params: DeleteSegmentParams): Promise<void> {
      const { segmentId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/segments/${segmentId}`);
    },
  };
}
