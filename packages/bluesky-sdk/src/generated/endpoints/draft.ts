// Auto-generated client for app.bsky.draft — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyDraftDefsDraft, AppBskyDraftDefsDraftView, AppBskyDraftDefsDraftWithId, CreateDraftResponse, GetDraftsResponse } from "../types.ts";
import type { CreateDraftParams, DeleteDraftParams, GetDraftsParams, UpdateDraftParams } from "../params.ts";

/** app.bsky.draft — 4 endpoints */
export function createDraftClient(api: BlueskyApiClient) {
  return {
    /** Inserts a draft using private storage (stash). An upper limit of drafts might be enforced. Requires authentication. */
    async createDraft(params: CreateDraftParams): Promise<CreateDraftResponse> {
      const envelope = await api.post<CreateDraftResponse>("/xrpc/app.bsky.draft.createDraft", params, undefined);
      return envelope;
    },

    /** Deletes a draft by ID. Requires authentication. */
    async deleteDraft(params: DeleteDraftParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.draft.deleteDraft", params, undefined);
      return envelope;
    },

    /** Gets views of user drafts. Requires authentication. */
    async getDrafts(params: GetDraftsParams): Promise<GetDraftsResponse> {
      const envelope = await api.get<GetDraftsResponse>("/xrpc/app.bsky.draft.getDrafts", params);
      return envelope;
    },

    /** Updates a draft using private storage (stash). If the draft ID points to a non-existing ID, the update will be silently ignored. This is done because updates don't enforce draft limit, so it accepts all writes, but will ignore invalid ones. Requires authentication. */
    async updateDraft(params: UpdateDraftParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.draft.updateDraft", params, undefined);
      return envelope;
    },
  };
}
