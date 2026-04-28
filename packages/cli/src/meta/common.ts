import { option } from "../command.ts";

export const accessTokenOptions = [
  option("--access-token <token>", "Access token. Defaults to META_ACCESS_TOKEN"),
  option(
    "--api-version <version>",
    "Meta Graph API version. Defaults to META_API_VERSION or v25.0",
  ),
];

export const instagramOptions = [
  ...accessTokenOptions,
  option("--ig-account-id <id>", "Instagram business account ID. Defaults to META_IG_ACCOUNT_ID"),
];

export const facebookOptions = [
  ...accessTokenOptions,
  option("--page-id <id>", "Facebook Page ID. Defaults to META_PAGE_ID"),
];

export const threadsOptions = [
  option("--access-token <token>", "Threads access token. Defaults to THREADS_ACCESS_TOKEN"),
  option("--threads-user-id <id>", "Threads user ID. Defaults to THREADS_USER_ID"),
  option("--api-version <version>", "Threads API version. Defaults to THREADS_API_VERSION or v1.0"),
];

export const oauthOptions = [
  option("--app-id <id>", "Meta app ID. Defaults to META_APP_ID"),
  option("--app-secret <secret>", "Meta app secret. Defaults to META_APP_SECRET"),
  option("--redirect-uri <uri>", "OAuth redirect URI. Defaults to META_REDIRECT_URI"),
];

export const listOptions = [
  option("--fields <fields>", "Comma-separated fields"),
  option("--limit <number>", "Max results to fetch"),
];

export const instagramPollingOptions = [
  option("--photo-interval-ms <ms>", "Instagram photo polling interval"),
  option("--video-interval-ms <ms>", "Video polling interval"),
  option("--max-attempts <number>", "Max polling attempts"),
];

export const threadsPollingOptions = [
  option("--text-interval-ms <ms>", "Threads text/image polling interval"),
  option("--video-interval-ms <ms>", "Video polling interval"),
  option("--max-attempts <number>", "Max polling attempts"),
];
