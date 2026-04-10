import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface ThirdPartyMeasurementReportDatasetFields {
  category: string;
  id: string;
  partner: BusinessFields;
  product: string;
  schema: Record<string, unknown>[];
}

export function thirdPartyMeasurementReportDatasetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ThirdPartyMeasurementReportDatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ThirdPartyMeasurementReportDatasetFields, F[number]>>(`${id}`, opts),
  };
}

