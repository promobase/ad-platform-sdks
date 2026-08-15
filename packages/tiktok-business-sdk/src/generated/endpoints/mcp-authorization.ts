// @generated
// fingerprint: sha256:0d8c94703067b65ec350b631363f5aae8834e03388d510605783fdab673bf624
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for MCP Authorization — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { OpenMcpServerOauthWellKnownOpenidConfigurationParams, OpenMcpServerOauthWellKnownOpenidConfigurationResponse, WellKnownOauthProtectedResourceOpenMcpServerParams, WellKnownOauthProtectedResourceOpenMcpServerResponse, OpenMcpServerOauthRegisterParams, OpenMcpServerOauthRegisterResponse, PortalMcpTt4bAuthorizeParams, PortalMcpTt4bAuthorizeResponse, OpenMcpServerOauthTokenParams, OpenMcpServerOauthTokenResponse, OpenMcpServerOauthRevokeParams, OpenMcpServerOauthRevokeResponse, OpenMcpServerParams, OpenMcpServerResponse } from "../types/mcp-authorization.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMcpAuthorization(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
