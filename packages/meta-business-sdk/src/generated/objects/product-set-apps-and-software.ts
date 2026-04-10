import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { ProductSetAppsAndSoftwareGetFields } from "./product-set-apps-and-software-get.ts";

export interface ProductSetAppsAndSoftwareFields {
}

export interface ProductSetAppsAndSoftwareListAppsAndSoftwareParams {
  after?: string;
  before?: string;
  display_format?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productSetAppsAndSoftwareNode(client: ApiClient, id: string) {
  return {
    appsAndSoftware: <F extends (keyof ProductSetAppsAndSoftwareGetFields)[]>(opts: { fields: F; params?: ProductSetAppsAndSoftwareListAppsAndSoftwareParams }) =>
      new Cursor<Pick<ProductSetAppsAndSoftwareGetFields, F[number]>>(client, `${id}/apps_and_software`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

