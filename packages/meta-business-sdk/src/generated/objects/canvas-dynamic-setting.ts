import type { ApiClient } from "@promobase/sdk-runtime";
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

