// @generated
// fingerprint: sha256:9577b9d0bfab21ff8773817bf4b585cbd4b3e0d2fe8567b196b91284af5c3849
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SuggestKeywordThemeConstantsRequest, SuggestKeywordThemeConstantsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.KeywordThemeConstantService. Do not edit by hand.
export const keywordThemeConstantService = {
  suggestKeywordThemeConstants(client: HttpClient, body: SuggestKeywordThemeConstantsRequest): Promise<SuggestKeywordThemeConstantsResponse> {
    return client.post<SuggestKeywordThemeConstantsResponse>(`/v25/keywordThemeConstants:suggest`, body);
  }
};
