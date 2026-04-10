import type { ApiClient } from "@promobase/sdk-runtime";

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

