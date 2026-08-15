// @generated
// fingerprint: sha256:53131939bf15a151385db2adb1a5621600f56d42f58f4afe5190ae52382aee11
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for com.atproto.lexicon — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoLexiconSchema, ResolveLexiconResponse } from "../types.ts";
import type { ResolveLexiconParams } from "../params.ts";

/** com.atproto.lexicon — 1 endpoints */
export function createLexiconClient(api: BlueskyApiClient) {
  return {
    /** Resolves an atproto lexicon (NSID) to a schema. */
    async resolveLexicon(params: ResolveLexiconParams): Promise<ResolveLexiconResponse> {
      const envelope = await api.get<ResolveLexiconResponse>("/xrpc/com.atproto.lexicon.resolveLexicon", params);
      return envelope;
    },
  };
}
