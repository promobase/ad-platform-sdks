// @generated
// fingerprint: sha256:b79c429eef2a65858478bc7a39ad4e2a6165f1b4d7d35ad1b5c39025ddebb3df
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for search — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { SearchUserBoardsGetResponse, SearchPartnerPinsResponse, SearchUserPinsListResponse } from "../types.ts";
import type { ListSearchUserBoardsParams, ListSearchPartnerPinsParams, ListSearchUserPinsParams } from "../params.ts";

/** search — 3 endpoints */
export function createSearchClient(api: PinterestApiClient) {
  return {
    /** Search user's boards
   * Requires pinterest_oauth2: boards:read, boards:read_secret; client_credentials: boards:read, boards:read_secret. */
    async listSearchUserBoards(params: ListSearchUserBoardsParams): Promise<SearchUserBoardsGetResponse> {
      const query = params;
      const envelope = await api.get<SearchUserBoardsGetResponse>(`/search/boards`, query);
      return envelope;
    },

    /** Search pins by a given search term
   * Requires pinterest_oauth2: boards:read, pins:read. */
    async listSearchPartnerPins(params: ListSearchPartnerPinsParams): Promise<SearchPartnerPinsResponse> {
      const query = params;
      const envelope = await api.get<SearchPartnerPinsResponse>(`/search/partner/pins`, query);
      return envelope;
    },

    /** Search user's Pins
   * Requires pinterest_oauth2: boards:read, boards:read_secret, pins:read, pins:read_secret. */
    async listSearchUserPins(params: ListSearchUserPinsParams): Promise<SearchUserPinsListResponse> {
      const query = params;
      const envelope = await api.get<SearchUserPinsListResponse>(`/search/pins`, query);
      return envelope;
    },
  };
}
