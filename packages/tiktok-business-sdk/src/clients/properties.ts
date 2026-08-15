import { tiktokAppRequest, tiktokRequest } from "./request.ts";
import type { AddPropertyOptions, PropertyInfo, TikTokClientOptions } from "./types.ts";

type PropertyTypeApi = 1 | 2;

function propertyTypeToApi(type: "DOMAIN" | "URL_PREFIX"): PropertyTypeApi {
  return type === "DOMAIN" ? 1 : 2;
}

function propertyTypeFromApi(value: PropertyTypeApi): "DOMAIN" | "URL_PREFIX" {
  return value === 1 ? "DOMAIN" : "URL_PREFIX";
}

/**
 * URL property management for domain/URL prefix verification.
 * TikTok requires video URLs to be on verified domains before publishing.
 */
export function createProperties(opts: TikTokClientOptions & { appId: string; appSecret: string }) {
  const { businessId, appId, appSecret } = opts;

  function normalize(raw: {
    property_type: PropertyTypeApi;
    property_url?: string;
    url?: string;
    property_status: number;
    signature?: string;
    file_name?: string;
  }): PropertyInfo {
    return {
      propertyType: propertyTypeFromApi(raw.property_type),
      propertyUrl: raw.property_url ?? raw.url ?? "",
      propertyStatus: raw.property_status,
      signature: raw.signature,
      fileName: raw.file_name,
    };
  }

  return {
    /** List all URL properties (domains + URL prefixes) for the account. */
    async list(): Promise<PropertyInfo[]> {
      const data = await tiktokRequest<{
        property_list?: Array<{
          property_type: PropertyTypeApi;
          property_url: string;
          property_status: number;
          signature?: string;
          file_name?: string;
        }>;
      }>(opts, {
        method: "GET",
        path: "/business/property/list/",
        query: { business_id: businessId, app_id: appId, secret: appSecret },
      });
      return data.property_list?.map(normalize) ?? [];
    },

    /** Add a URL property (domain or URL prefix) for domain verification. */
    async add(params: AddPropertyOptions): Promise<PropertyInfo> {
      const data = await tiktokRequest<{
        url_property_info: {
          property_type: PropertyTypeApi;
          url: string;
          property_status: number;
          signature: string;
          file_name: string;
        };
      }>(opts, {
        method: "POST",
        path: "/business/property/add/",
        body: {
          business_id: businessId,
          app_id: appId,
          secret: appSecret,
          url_property_meta: {
            url: params.propertyUrl,
            property_type: propertyTypeToApi(params.propertyType),
          },
        },
      });
      return normalize(data.url_property_info);
    },

    /** Verify (check) a URL property's verification status. */
    async verify(params: AddPropertyOptions): Promise<PropertyInfo> {
      const data = await tiktokRequest<{
        url_property_info: {
          property_type: PropertyTypeApi;
          url: string;
          property_status: number;
          signature: string;
          file_name: string;
        };
      }>(opts, {
        method: "POST",
        path: "/business/property/verify/",
        body: {
          business_id: businessId,
          app_id: appId,
          secret: appSecret,
          url_property_meta: {
            url: params.propertyUrl,
            property_type: propertyTypeToApi(params.propertyType),
          },
        },
      });
      return normalize(data.url_property_info);
    },

    /** Delete verified ownership of a URL property. Uses app credentials, not Access-Token. */
    async delete(params: AddPropertyOptions): Promise<void> {
      await tiktokAppRequest<Record<string, never>>(opts, {
        method: "POST",
        path: "/business/property/delete/",
        body: {
          app_id: appId,
          secret: appSecret,
          url_property_meta: {
            url: params.propertyUrl,
            property_type: propertyTypeToApi(params.propertyType),
          },
        },
      });
    },
  };
}
