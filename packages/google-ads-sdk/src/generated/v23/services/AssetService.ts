// @generated
// fingerprint: sha256:9f440adcd717a3acb0bdb1afee8f7cd0b92b39e9e5a7dac3ba22db5ded303b89
// DO NOT EDIT: generated file; changes will be overwritten.
import type { MutateAssetsRequest, MutateAssetsResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v23.services.AssetService. Do not edit by hand.
export const assetService = {
  mutateAssets(client: HttpClient, customerId: string, body: Omit<MutateAssetsRequest, "customerId">): Promise<MutateAssetsResponse> {
    return client.post<MutateAssetsResponse>(`/v23/customers/${customerId}/assets:mutate`, body);
  }
};
