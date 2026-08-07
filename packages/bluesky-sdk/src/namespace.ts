/**
 * Namespaced API for the Bluesky SDK.
 *
 * Usage:
 *   import { Bluesky } from "@openpromo/bluesky";
 *
 *   // Auth: app passwords are the standard for bots and agents.
 *   // Create one at Settings → Security → App passwords.
 *   const bsky = Bluesky.createClient({
 *     handle: "user.bsky.social",
 *     appPassword: "xxxx-xxxx-xxxx-xxxx",
 *   });
 *
 *   // Post (handles richtext facets + image upload)
 *   const post = await bsky.posts.createPost({
 *     text: "Hello from OpenPromo! 🦋",
 *     image: { bytes: imageBytes, alt: "A nice photo" },
 *   });
 *
 *   // Feeds, profiles, graph, notifications
 *   const timeline = await bsky.feed.getTimeline({ limit: 50 });
 *   const profile = await bsky.actor.getProfile({ actor: "bsky.app" });
 *   await bsky.graph.follow({ actor: "did:plc:..." });
 *   const unread = await bsky.notification.getUnreadCount({});
 */

import type { BlueskyApiClientOptions } from "./api-client.ts";
import { BlueskyApiClient } from "./api-client.ts";
import { BlueskyApiError } from "./errors.ts";
import {
  createActorClient,
  createAgeassuranceClient,
  createBookmarkClient,
  createContactClient,
  createDraftClient,
  createEmbedClient,
  createFeedClient,
  createGraphClient,
  createIdentityClient,
  createLabelClient,
  createLabelerClient,
  createLexiconClient,
  createModerationClient,
  createNotificationClient,
  createRepoClient,
  createServerClient,
  createSyncClient,
  createTempClient,
  createUnspeccedClient,
  createVideoClient,
} from "./generated/index.ts";
import { createPostRecord, type CreatePostOptions } from "./posts.ts";

export const Bluesky = {
  /** Create a client over AT Protocol (Bluesky). */
  createClient(opts: BlueskyApiClientOptions) {
    const api = new BlueskyApiClient(opts);
    const actor = createActorClient(api);
    const feed = createFeedClient(api);
    const graph = createGraphClient(api);
    const repo = createRepoClient(api);
    const server = createServerClient(api);
    return {
      api,
      actor,
      ageassurance: createAgeassuranceClient(api),
      bookmark: createBookmarkClient(api),
      contact: createContactClient(api),
      draft: createDraftClient(api),
      embed: createEmbedClient(api),
      feed,
      graph,
      identity: createIdentityClient(api),
      label: createLabelClient(api),
      labeler: createLabelerClient(api),
      lexicon: createLexiconClient(api),
      moderation: createModerationClient(api),
      notification: createNotificationClient(api),
      repo,
      server,
      sync: createSyncClient(api),
      temp: createTempClient(api),
      unspecced: createUnspeccedClient(api),
      video: createVideoClient(api),

      /** Convenience publishing helper: creates an `app.bsky.feed.post` record,
       *  handling richtext facets and (optional) image upload. */
      posts: {
        createPost: (options: Omit<CreatePostOptions, "repo">) =>
          createPostRecord(api, { repo: opts.handle ?? "", ...options }),
      },
    };
  },

  /** Core HTTP client (app-password or session auth). */
  ApiClient: BlueskyApiClient,

  /** Bluesky API error class. */
  ApiError: BlueskyApiError,
} as const;

export type { BlueskyApiClientOptions } from "./api-client.ts";
export type { CreatePostOptions } from "./posts.ts";
