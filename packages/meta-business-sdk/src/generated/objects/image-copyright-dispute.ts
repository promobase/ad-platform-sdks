import type { ApiClient } from "@promobase/sdk-runtime";

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
    get: <F extends (keyof ImageCopyrightDisputeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ImageCopyrightDisputeFields, F[number]>>(`${id}`, opts),
  };
}

