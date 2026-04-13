import type { SuggestKeywordThemeConstantsRequest, SuggestKeywordThemeConstantsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.KeywordThemeConstantService. Do not edit by hand.
export const keywordThemeConstantService = {
  suggestKeywordThemeConstants(client: HttpClient, body: SuggestKeywordThemeConstantsRequest): Promise<SuggestKeywordThemeConstantsResponse> {
    return client.post<SuggestKeywordThemeConstantsResponse>(`/v23/keywordThemeConstants:suggest`, body);
  }
};
