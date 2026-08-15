// @generated
// fingerprint: sha256:d8c15e7e8a2a7e078943f6989d53405c763de614b56365a3e6902e701ffb59d2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for MCP Authorization — do not edit
import type { OpenMcpServerOauthWellKnownOpenidConfigurationParams, OpenMcpServerOauthWellKnownOpenidConfigurationResponse, WellKnownOauthProtectedResourceOpenMcpServerParams, WellKnownOauthProtectedResourceOpenMcpServerResponse, OpenMcpServerOauthRegisterParams, OpenMcpServerOauthRegisterResponse, PortalMcpTt4bAuthorizeParams, PortalMcpTt4bAuthorizeResponse, OpenMcpServerOauthTokenParams, OpenMcpServerOauthTokenResponse, OpenMcpServerOauthRevokeParams, OpenMcpServerOauthRevokeResponse, OpenMcpServerParams, OpenMcpServerResponse } from "../types/mcp-authorization.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMcpAuthorization(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {
  const apiBase = (opts.baseUrl ?? TT_API_BASE).replace(/\/$/, "");
  const fetchImpl = opts.fetch ?? fetch;

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetchImpl(`${apiBase}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetchImpl(`${apiBase}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Get authorization server metadata */
    async wellKnownOpenidConfiguration(params: OpenMcpServerOauthWellKnownOpenidConfigurationParams): Promise<OpenMcpServerOauthWellKnownOpenidConfigurationResponse> {
      return get<OpenMcpServerOauthWellKnownOpenidConfigurationResponse>("/open_mcp/{server}/oauth/.well-known/openid-configuration/", params as unknown as Record<string, unknown>);
    },

    /** Discover authorization servers */
    async openMcpServer(params: WellKnownOauthProtectedResourceOpenMcpServerParams): Promise<WellKnownOauthProtectedResourceOpenMcpServerResponse> {
      return get<WellKnownOauthProtectedResourceOpenMcpServerResponse>("/.well-known/oauth-protected-resource/open_mcp/{server}/", params as unknown as Record<string, unknown>);
    },

    /** Register a client application */
    async oauthRegister(params: OpenMcpServerOauthRegisterParams): Promise<OpenMcpServerOauthRegisterResponse> {
      return post<OpenMcpServerOauthRegisterResponse>("/open_mcp/{server}/oauth/register/", params as unknown as Record<string, unknown>);
    },

    /** Request user authorization */
    async portalMcpTt4bAuthorize(params: PortalMcpTt4bAuthorizeParams): Promise<PortalMcpTt4bAuthorizeResponse> {
      return get<PortalMcpTt4bAuthorizeResponse>("/portal/mcp-tt4b-authorize/", params as unknown as Record<string, unknown>);
    },

    /** Exchange an MCP authorization code for tokens */
    async oauthToken(params: OpenMcpServerOauthTokenParams): Promise<OpenMcpServerOauthTokenResponse> {
      return post<OpenMcpServerOauthTokenResponse>("/open_mcp/{server}/oauth/token/", params as unknown as Record<string, unknown>);
    },

    /** Refresh an MCP access token */
    async oauthToken2(params: OpenMcpServerOauthTokenParams): Promise<OpenMcpServerOauthTokenResponse> {
      return post<OpenMcpServerOauthTokenResponse>("/open_mcp/{server}/oauth/token/", params as unknown as Record<string, unknown>);
    },

    /** Revoke an MCP token */
    async oauthRevoke(params: OpenMcpServerOauthRevokeParams): Promise<OpenMcpServerOauthRevokeResponse> {
      return post<OpenMcpServerOauthRevokeResponse>("/open_mcp/{server}/oauth/revoke/", params as unknown as Record<string, unknown>);
    },

    /** Use MCP tools */
    async openMcpServer2(params: OpenMcpServerParams): Promise<OpenMcpServerResponse> {
      return post<OpenMcpServerResponse>("/open_mcp/{server}/", params as unknown as Record<string, unknown>);
    },
  };
}
