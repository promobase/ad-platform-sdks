// @generated
// fingerprint: sha256:48964f43c71730ef56edb4d859123d63f0ab924a6e58d5b5797242808af8b95d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdAccountAccountControlsPostFields } from "./ad-account-account-controls-post.ts";

export interface AdAccountAccountControlsFields {
}

export function adAccountAccountControlsNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdAccountAccountControlsFields,
    createAccountControl: (params: Record<string, unknown>) =>
      client.post<AdAccountAccountControlsPostFields>(`${id}/account_controls`, params as Record<string, unknown>),
  };
}

