import * as v from "valibot";

export interface XOAuthConfig {
  clientId: string;
  clientSecret?: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface XOAuthTokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
  scope?: string;
  refresh_token?: string;
}

const AUTHORIZATION_URL = "https://x.com/i/oauth2/authorize";
const TOKEN_URL = "https://api.x.com/2/oauth2/token";
const REVOKE_URL = "https://api.x.com/2/oauth2/revoke";
const tokenSchema = v.object({
  token_type: v.string(),
  expires_in: v.number(),
  access_token: v.string(),
  scope: v.optional(v.string()),
  refresh_token: v.optional(v.string()),
});

export function createXOAuth(config: XOAuthConfig) {
  const fetchImpl = config.fetch ?? fetch;

  async function tokenRequest(body: URLSearchParams): Promise<XOAuthTokenResponse> {
    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    if (config.clientSecret) {
      headers.Authorization = `Basic ${btoa(`${config.clientId}:${config.clientSecret}`)}`;
    } else {
      body.set("client_id", config.clientId);
    }
    const response = await fetchImpl(TOKEN_URL, {
      method: "POST",
      headers,
      body,
      signal: config.signal,
    });
    const data = (await response.json()) as Record<string, unknown>;
    if (!response.ok) {
      throw new Error(
        (typeof data.error_description === "string" && data.error_description) ||
          (typeof data.error === "string" && data.error) ||
          "X OAuth token request failed",
      );
    }
    return v.parse(tokenSchema, data);
  }

  return {
    getAuthorizationUrl(opts: { state: string; codeChallenge: string; scopes?: string[] }): string {
      const params = new URLSearchParams({
        response_type: "code",
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        scope: (
          opts.scopes ?? [
            "tweet.read",
            "tweet.write",
            "users.read",
            "media.write",
            "dm.read",
            "dm.write",
            "offline.access",
          ]
        ).join(" "),
        state: opts.state,
        code_challenge: opts.codeChallenge,
        code_challenge_method: "S256",
      });
      return `${AUTHORIZATION_URL}?${params.toString()}`;
    },

    exchangeCode(code: string, codeVerifier: string): Promise<XOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: config.redirectUri,
          code_verifier: codeVerifier,
        }),
      );
    },

    refreshToken(refreshToken: string): Promise<XOAuthTokenResponse> {
      return tokenRequest(
        new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
      );
    },

    async revokeToken(token: string, tokenTypeHint?: "access_token" | "refresh_token") {
      const body = new URLSearchParams({ token, client_id: config.clientId });
      if (tokenTypeHint) body.set("token_type_hint", tokenTypeHint);
      const headers: Record<string, string> = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      if (config.clientSecret) {
        headers.Authorization = `Basic ${btoa(`${config.clientId}:${config.clientSecret}`)}`;
      }
      const response = await fetchImpl(REVOKE_URL, {
        method: "POST",
        headers,
        body,
        signal: config.signal,
      });
      if (!response.ok) throw new Error(`X OAuth revoke failed: ${await response.text()}`);
    },
  };
}

export async function createPkcePair(): Promise<{ verifier: string; challenge: string }> {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const verifier = base64Url(bytes);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  return { verifier, challenge: base64Url(new Uint8Array(digest)) };
}

function base64Url(bytes: Uint8Array): string {
  let value = "";
  for (const byte of bytes) value += String.fromCharCode(byte);
  return btoa(value).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
