// @generated
// fingerprint: sha256:8ab920158db76bf140b2fa5f89edf7b6e398b5471dfa4dbb3211a69ff4a7cc3a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface PlaceTopicFields {
  count: number;
  has_children: boolean;
  icon_url: string;
  id: string;
  name: string;
  plural_name: string;
  top_subtopic_names: string[];
}

export function placeTopicNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PlaceTopicFields,
    get: <F extends (keyof PlaceTopicFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PlaceTopicFields, F[number]>>(`${id}`, opts),
  };
}

