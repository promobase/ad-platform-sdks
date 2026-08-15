// @generated
// fingerprint: sha256:22f7b09743c777c4246cfd5542b67432f818f4d309781e682e53d4706ac1f2f7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for bid-estimate — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { BidEstimate, ListBidEstimateParams, CreateBidEstimateParams } from "../types/bid-estimate.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — bid-estimate */
export function createBidEstimateClient(api: SnapchatApiClient) {
  return {
    /** bid-estimate */
    listBidEstimate(params: ListBidEstimateParams): SnapchatCursor<BidEstimate> {
      const { id, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adsquads/${id}/bid_estimate`, link ? undefined : query).then((envelope) => ({
          items: unpack<BidEstimate>(envelope, "bid_estimate", "bid_estimate"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** bid-estimate */
    async createBidEstimate(params: CreateBidEstimateParams): Promise<BidEstimate> {
      const { id, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${id}/bid_estimate`, rest);
      return ensureOne<BidEstimate>(unpack<BidEstimate>(envelope, "bid_estimate", "bid_estimate"), "BidEstimate");
    },
  };
}
