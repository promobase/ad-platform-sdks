import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProductItemLocalInfoLatLongShapeFields } from "./product-item-local-info-lat-long-shape.ts";

export interface ProductItemLocalInfoFields {
  availability_circle_origin: ProductItemLocalInfoLatLongShapeFields;
  availability_circle_radius: number;
  availability_circle_radius_unit: string;
  availability_polygon_coordinates: ProductItemLocalInfoLatLongShapeFields[];
  availability_postal_codes: string[];
  availability_source: string;
  id: string;
  inferred_circle_origin: ProductItemLocalInfoLatLongShapeFields;
  inferred_circle_radius: number;
}

export function productItemLocalInfoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductItemLocalInfoFields,
    get: <F extends (keyof ProductItemLocalInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductItemLocalInfoFields, F[number]>>(`${id}`, opts),
  };
}

