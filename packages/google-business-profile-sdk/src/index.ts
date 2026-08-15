import { GoogleBusinessProfileClient } from "./client.ts";
import { createGoogleBusinessProfileOAuthAdapter } from "./oauth-adapters.ts";
import { createGoogleBusinessProfileOAuth, GoogleBusinessProfileOAuthScopes } from "./oauth.ts";
import { createGoogleBusinessProfileResources } from "./resources.ts";
import type { GoogleBusinessProfileClientOptions } from "./types.ts";

export { GoogleBusinessProfileClient } from "./client.ts";
export { GoogleBusinessProfileApiError } from "./errors.ts";
export {
  createGoogleBusinessProfileOAuth,
  GoogleBusinessProfileOAuthScopes,
  type GoogleBusinessProfileKnownOAuthScope,
  type GoogleBusinessProfileOAuthScope,
} from "./oauth.ts";
export {
  createGoogleBusinessProfileOAuthAdapter,
  type GoogleBusinessProfileAccount,
  type GoogleBusinessProfileLocation,
} from "./oauth-adapters.ts";
export * from "./types.ts";

export function createGoogleBusinessProfileClient(opts: GoogleBusinessProfileClientOptions) {
  const client = new GoogleBusinessProfileClient(opts);
  return Object.assign(client, {
    resources: createGoogleBusinessProfileResources(client),
  });
}

export const GoogleBusinessProfile = {
  createClient: createGoogleBusinessProfileClient,
  OAuth: createGoogleBusinessProfileOAuth,
  oauth: createGoogleBusinessProfileOAuthAdapter,
  Scopes: GoogleBusinessProfileOAuthScopes,
};
