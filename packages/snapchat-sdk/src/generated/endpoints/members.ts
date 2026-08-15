// @generated
// fingerprint: sha256:bb3eb6202350446400e6751f6f576bedacdb68df2141bab53e529aeea819e497
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for members — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Member, V1, ListMembersParams, GetMemberParams, CreateMemberParams, DeleteMemberIdParams } from "../types/members.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — members */
export function createMembersClient(api: SnapchatApiClient) {
  return {
    /** members */
    listMembers(params: ListMembersParams): SnapchatCursor<Member> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/members`, link ? undefined : query).then((envelope) => ({
          items: unpack<Member>(envelope, "members", "member"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** members */
    async getMember(params: GetMemberParams): Promise<Member> {
      const { memberId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/members/${memberId}`, query);
      return ensureOne<Member>(unpack<Member>(envelope, "members", "member"), "Member");
    },

    /** members */
    async createMember(params: CreateMemberParams): Promise<Member> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/members`, { members: [{ ...rest }] });
      return ensureOne<Member>(unpack<Member>(envelope, "members", "member"), "Member");
    },

    /** members */
    async deleteMemberId(params: DeleteMemberIdParams): Promise<void> {
      const { memberId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/${memberId}`);
    },
  };
}
