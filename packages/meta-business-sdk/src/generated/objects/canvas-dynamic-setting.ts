// @generated
// fingerprint: sha256:22602dd6da62de23889ebaacf353cc8278b51c6fc5f8e842043330bb3ee5c12d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { CanvasFields } from "./canvas.ts";

export interface CanvasDynamicSettingFields {
  child_documents: CanvasFields[];
  product_set_id: string;
}

export function canvasDynamicSettingNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CanvasDynamicSettingFields,
    get: <F extends (keyof CanvasDynamicSettingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CanvasDynamicSettingFields, F[number]>>(`${id}`, opts),
  };
}

