import { GoogleBusinessProfileClient } from "./client.ts";
import { createGoogleBusinessProfileOAuth } from "./oauth.ts";
import { createGoogleBusinessProfileResources } from "./resources.ts";
import type { GoogleBusinessProfileClientOptions } from "./types.ts";

export { GoogleBusinessProfileClient } from "./client.ts";
export { GoogleBusinessProfileApiError } from "./errors.ts";
export { createGoogleBusinessProfileOAuth } from "./oauth.ts";
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
};
