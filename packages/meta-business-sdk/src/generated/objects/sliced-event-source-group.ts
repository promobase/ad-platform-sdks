// @generated
// fingerprint: sha256:bc58ad3cf145448a18118170b660a5b0e6ec7bd3f41c93a4f39d90c2f3b064b6
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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
    __path: id,
    __brand: undefined as unknown as SlicedEventSourceGroupFields,
    get: <F extends (keyof SlicedEventSourceGroupFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SlicedEventSourceGroupFields, F[number]>>(`${id}`, opts),
  };
}

