import {
  createClient,
  createFacebookOAuth,
  createFacebookPageClient,
  createInstagramClient,
  createInstagramOAuth,
  createThreadsClient,
  createThreadsOAuth,
} from "@openpromo/meta";
import type { GraphAuthInput, OAuthConfigInput } from "../schemas.ts";

export function createMetaApi(input: GraphAuthInput): any {
  const accessToken = requireValue(input.accessToken ?? process.env.META_ACCESS_TOKEN, {
    name: "accessToken",
    env: "META_ACCESS_TOKEN",
  });
  return createClient({
    accessToken,
    apiVersion: input.apiVersion ?? process.env.META_API_VERSION ?? "v25.0",
  });
}

export function createInstagram(
  input: GraphAuthInput & {
    igAccountId?: string;
    polling?: object;
    photoIntervalMs?: number;
    videoIntervalMs?: number;
    maxAttempts?: number;
  },
): any {
  return createInstagramClient({
    api: createMetaApi(input),
    igAccountId: requireValue(input.igAccountId ?? process.env.META_IG_ACCOUNT_ID, {
      name: "igAccountId",
      env: "META_IG_ACCOUNT_ID",
    }),
    polling: {
      ...(input.polling ?? {}),
      photoIntervalMs: input.photoIntervalMs,
      videoIntervalMs: input.videoIntervalMs,
      maxAttempts: input.maxAttempts,
    },
  });
}

export function createFacebook(input: GraphAuthInput & { pageId?: string }): any {
  const accessToken = requireValue(input.accessToken ?? process.env.META_ACCESS_TOKEN, {
    name: "accessToken",
    env: "META_ACCESS_TOKEN",
  });
  return createFacebookPageClient({
    api: createMetaApi({ ...input, accessToken }),
    pageId: requireValue(input.pageId ?? process.env.META_PAGE_ID, {
      name: "pageId",
      env: "META_PAGE_ID",
    }),
    accessToken,
  });
}

export function createThreads(input: {
  accessToken?: string;
  threadsUserId?: string;
  apiVersion?: string;
  polling?: object;
  textIntervalMs?: number;
  videoIntervalMs?: number;
  maxAttempts?: number;
}): any {
  return createThreadsClient({
    accessToken: requireValue(input.accessToken ?? process.env.THREADS_ACCESS_TOKEN, {
      name: "accessToken",
      env: "THREADS_ACCESS_TOKEN",
    }),
    threadsUserId: requireValue(input.threadsUserId ?? process.env.THREADS_USER_ID, {
      name: "threadsUserId",
      env: "THREADS_USER_ID",
    }),
    apiVersion: input.apiVersion ?? process.env.THREADS_API_VERSION,
    polling: {
      ...(input.polling ?? {}),
      textIntervalMs: input.textIntervalMs,
      videoIntervalMs: input.videoIntervalMs,
      maxAttempts: input.maxAttempts,
    },
  });
}

export function createInstagramOAuthClient(input: OAuthConfigInput): any {
  return createInstagramOAuth(resolveOAuthConfig(input));
}

export function createFacebookOAuthClient(input: OAuthConfigInput): any {
  return createFacebookOAuth(resolveOAuthConfig(input));
}

export function createThreadsOAuthClient(input: OAuthConfigInput): any {
  return createThreadsOAuth(resolveOAuthConfig(input));
}

function resolveOAuthConfig(input: OAuthConfigInput) {
  return {
    appId: requireValue(input.appId ?? process.env.META_APP_ID, {
      name: "appId",
      env: "META_APP_ID",
    }),
    appSecret: requireValue(input.appSecret ?? process.env.META_APP_SECRET, {
      name: "appSecret",
      env: "META_APP_SECRET",
    }),
    redirectUri: requireValue(input.redirectUri ?? process.env.META_REDIRECT_URI, {
      name: "redirectUri",
      env: "META_REDIRECT_URI",
    }),
  };
}

function requireValue(value: string | undefined, opts: { name: string; env: string }): string {
  if (value) {
    return value;
  }
  throw new Error(`Missing ${opts.name}; pass --${kebab(opts.name)} or set ${opts.env}`);
}

function kebab(value: string): string {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
