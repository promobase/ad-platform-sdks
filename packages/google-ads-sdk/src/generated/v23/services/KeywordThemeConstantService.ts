// @generated
// fingerprint: sha256:965ee156ac30cab32e5e5e0c76eff24651f1f88718135895d9d6d6058b5996a6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestKeywordThemeConstantsRequest, SuggestKeywordThemeConstantsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordThemeConstantService. Do not edit by hand.
export const keywordThemeConstantService = {
  suggestKeywordThemeConstants(client: HttpClient, body: SuggestKeywordThemeConstantsRequest): Promise<SuggestKeywordThemeConstantsResponse> {
    return client.post<SuggestKeywordThemeConstantsResponse>(`/v23/keywordThemeConstants:suggest`, body);
  }
};
