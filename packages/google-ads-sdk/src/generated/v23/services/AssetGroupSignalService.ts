import type { MutateAssetGroupSignalsRequest, MutateAssetGroupSignalsResponse } from "../index.ts";
import type { HttpClient } from "@promobase/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetGroupSignalService. Do not edit by hand.
export const assetGroupSignalService = {
  mutateAssetGroupSignals(client: HttpClient, customerId: string, body: Omit<MutateAssetGroupSignalsRequest, "customerId">): Promise<MutateAssetGroupSignalsResponse> {
    return client.post<MutateAssetGroupSignalsResponse>(`/v23/customers/${customerId}/assetGroupSignals:mutate`, body);
  }
};
