import type { ApiClient } from "@promobase/sdk-runtime";
import type { EventSourceGroupFields } from "./event-source-group.ts";
import type { GroupFields } from "./group.ts";

export interface SlicedEventSourceGroupFields {
  event_source_group: EventSourceGroupFields;
  filter: string;
  id: string;
  name: string;
}

export function slicedEventSourceGroupNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof SlicedEventSourceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SlicedEventSourceGroupFields, F[number]>>(`${id}`, opts),
  };
}

