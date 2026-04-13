import type {
  AddPropertyOptions,
  PropertyInfo,
  TikTokClientOptions,
  TikTokResponse,
} from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

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
  const { accessToken, businessId, appId, appSecret } = opts;

  async function get<T>(path: string, query: Record<string, string>): Promise<T> {
    const params = new URLSearchParams(query);
    const response = await fetch(`${TT_API_BASE}${path}?${params.toString()}`, {
      headers: { "Access-Token": accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(
        `TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`,
      );
    }
    return body.data;
  }

  async function post<T>(path: string, payload: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Access-Token": accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(
        `TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`,
      );
    }
    return body.data;
  }

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
      const data = await get<{
        property_list?: Array<{
          property_type: PropertyTypeApi;
          property_url: string;
          property_status: number;
          signature?: string;
          file_name?: string;
        }>;
      }>("/business/property/list/", { business_id: businessId, app_id: appId, secret: appSecret });
      return data.property_list?.map(normalize) ?? [];
    },

    /** Add a URL property (domain or URL prefix) for domain verification. */
    async add(params: AddPropertyOptions): Promise<PropertyInfo> {
      const data = await post<{
        url_property_info: {
          property_type: PropertyTypeApi;
          url: string;
          property_status: number;
          signature: string;
          file_name: string;
        };
      }>("/business/property/add/", {
        business_id: businessId,
        app_id: appId,
        secret: appSecret,
        url_property_meta: {
          url: params.propertyUrl,
          property_type: propertyTypeToApi(params.propertyType),
        },
      });
      return normalize(data.url_property_info);
    },

    /** Verify (check) a URL property's verification status. */
    async verify(params: AddPropertyOptions): Promise<PropertyInfo> {
      const data = await post<{
        url_property_info: {
          property_type: PropertyTypeApi;
          url: string;
          property_status: number;
          signature: string;
          file_name: string;
        };
      }>("/business/property/verify/", {
        business_id: businessId,
        app_id: appId,
        secret: appSecret,
        url_property_meta: {
          url: params.propertyUrl,
          property_type: propertyTypeToApi(params.propertyType),
        },
      });
      return normalize(data.url_property_info);
    },

    /** Delete verified ownership of a URL property. Uses app credentials, not Access-Token. */
    async delete(params: AddPropertyOptions): Promise<void> {
      await post<Record<string, never>>("/business/property/delete/", {
        app_id: appId,
        secret: appSecret,
        url_property_meta: {
          url: params.propertyUrl,
          property_type: propertyTypeToApi(params.propertyType),
        },
      });
    },
  };
}
