import type { ApiClient } from "@promobase/sdk-runtime";
import type { CanvasFields } from "./canvas.ts";
import type { PhotoFields } from "./photo.ts";
import type { UserFields } from "./user.ts";

export interface CanvasTemplateFields {
  channels: Record<string, Record<string, string>[]>[];
  description: string;
  document: CanvasFields;
  id: string;
  is_multi_tab_supportable: boolean;
  is_new: boolean;
  name: string;
  objectives: Record<string, Record<string, unknown>>[];
  owner_id: UserFields;
  required_capabilities: string[];
  snapshot_photo: PhotoFields;
  status: string;
  sub_verticals: string[];
  verticals: Record<string, string>[];
}

export function canvasTemplateNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CanvasTemplateFields,
    get: <F extends (keyof CanvasTemplateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CanvasTemplateFields, F[number]>>(`${id}`, opts),
  };
}

