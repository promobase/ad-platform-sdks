// @generated
// fingerprint: sha256:267eff23dbb141570060170fffd198661a3cf8562cfda6a36aac32d1732d4f6a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ImageCopyrightDisputeFields {
  appeal_form_data: string;
  dispute_form_data: string;
  expiration_time: string;
  id: string;
  match_id: string;
  status: string;
  time_appealed: string;
  time_created: string;
  time_updated: string;
}

export function imageCopyrightDisputeNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ImageCopyrightDisputeFields,
    get: <F extends (keyof ImageCopyrightDisputeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ImageCopyrightDisputeFields, F[number]>>(`${id}`, opts),
  };
}

