import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ProductFeedAppsAndSoftwareGetFields } from "./product-feed-apps-and-software-get.ts";

export interface ProductFeedAppsAndSoftwareFields {
}

export interface ProductFeedAppsAndSoftwareListAppsAndSoftwareParams {
  after?: string;
  before?: string;
  display_format?: string;
  limit?: number;
  summary?: boolean;
  [key: string]: unknown;
}

export function productFeedAppsAndSoftwareNode(client: ApiClient, id: string) {
  return {
    appsAndSoftware: <F extends (keyof ProductFeedAppsAndSoftwareGetFields)[]>(opts: { fields: F; params?: ProductFeedAppsAndSoftwareListAppsAndSoftwareParams }) =>
      new Cursor<Pick<ProductFeedAppsAndSoftwareGetFields, F[number]>>(client, `${id}/apps_and_software`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

