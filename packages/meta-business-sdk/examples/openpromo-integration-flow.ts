/**
 * End-to-end provider integration seams for an application such as OpenPromo.
 *
 * This file is intentionally library-shaped: it does not persist tokens, enqueue
 * events, or define content entities. The host supplies those boundaries.
 *
 * The functions are compile-checked with the package and can be copied into a
 * Worker or workflow project. They do not make a request at module import time.
 */
import { AllPlatforms } from "@openpromo/sdk-runtime/platforms";

import { Facebook, WhatsApp } from "../src/namespace.ts";
import { createFacebookOAuthAdapter } from "../src/oauth-adapters.ts";
import { createInstagramTransport } from "../src/transports/instagram.ts";
import type { FacebookWebhookEvent } from "../src/webhooks/events.ts";
import type { WhatsAppWebhookEvent } from "../src/webhooks/events.ts";
import { webhooks } from "../src/webhooks/index.ts";

export type WorkflowHost = {
  step<T>(name: string, operation: () => Promise<T>): Promise<T>;
  sleep(duration: string): Promise<void>;
};

export type FacebookOAuthInput = {
  readonly config: Parameters<typeof createFacebookOAuthAdapter>[0];
  readonly code: string;
  readonly callbackState: string;
  readonly expectedState: string;
};

/** Exchange an OAuth callback without making token persistence an SDK concern. */
export async function exchangeFacebookCode(input: FacebookOAuthInput) {
  const oauth = createFacebookOAuthAdapter(input.config);
  return oauth.result.exchangeCode({
    code: input.code,
    state: input.callbackState,
    expectedState: input.expectedState,
  });
}

export type FacebookPageConnection = {
  readonly platform: typeof AllPlatforms.FACEBOOK;
  readonly pageId: string;
  readonly pageAccessToken: string;
};

/** Resolve provider account metadata after the host has accepted the OAuth grant. */
export async function resolveFacebookPage(input: {
  readonly config: Parameters<typeof createFacebookOAuthAdapter>[0];
  readonly accessToken: string;
  readonly pageId: string;
}): Promise<FacebookPageConnection & { readonly name: string }> {
  const oauth = createFacebookOAuthAdapter(input.config);
  const page = await oauth.getPage({ accessToken: input.accessToken, pageId: input.pageId });

  return {
    platform: AllPlatforms.FACEBOOK,
    pageId: page.id,
    pageAccessToken: page.access_token ?? input.accessToken,
    name: page.name,
  };
}

/** Keep a provider mutation visible as one durable workflow step. */
export async function publishFacebookTextPost(
  connection: FacebookPageConnection,
  message: string,
  workflow: Pick<WorkflowHost, "step">,
): Promise<{ readonly id: string }> {
  return workflow.step("facebook-publish-text-post", () =>
    Facebook.createClient({
      pageId: connection.pageId,
      accessToken: connection.pageAccessToken,
    }).feed.publishPost({ message }),
  );
}

export type InstagramPublishInput = {
  readonly accessToken: string;
  readonly instagramAccountId: string;
  readonly imageUrl: string;
  readonly caption?: string;
  readonly apiVersion?: string;
  readonly baseUrl?: string;
};

/**
 * A stepped Instagram publish flow. The transport is reconstructed inside each
 * step so a durable workflow only captures serializable input and provider IDs.
 */
export async function publishInstagramImage(
  input: InstagramPublishInput,
  workflow: WorkflowHost,
): Promise<{ readonly mediaId: string; readonly permalink: string }> {
  const client = () => createInstagramTransport(input);
  const container = await workflow.step("instagram-create-container", () =>
    client().createMediaContainer({ imageUrl: input.imageUrl, caption: input.caption }),
  );

  let status = await workflow.step("instagram-read-container-status-0", () =>
    client().getMediaContainerStatus({ containerId: container.containerId }),
  );
  for (let attempt = 1; status.status === "IN_PROGRESS" && attempt <= 12; attempt += 1) {
    await workflow.sleep("5 seconds");
    status = await workflow.step(`instagram-read-container-status-${attempt}`, () =>
      client().getMediaContainerStatus({ containerId: container.containerId }),
    );
  }

  if (status.status !== "FINISHED") {
    throw new Error(`Instagram container did not finish: ${status.status}`);
  }

  const published = await workflow.step("instagram-publish-container", () =>
    client().publishMediaContainer({ containerId: container.containerId }),
  );
  return workflow.step("instagram-read-permalink", () =>
    client().fetchPermalink({ mediaId: published.mediaId }),
  );
}

export type FacebookWebhookEnvironment = {
  readonly META_VERIFY_TOKEN: string;
  readonly META_APP_SECRET: string;
  readonly enqueue: (events: readonly FacebookWebhookEvent[]) => Promise<void>;
};

/** Verify, extract, and hand off a Facebook webhook without owning Inbox logic. */
export async function handleFacebookWebhook(
  request: Request,
  env: FacebookWebhookEnvironment,
): Promise<Response> {
  const url = new URL(request.url);
  if (request.method === "GET") {
    const challenge = webhooks.verifyChallenge(
      {
        "hub.mode": url.searchParams.get("hub.mode") ?? undefined,
        "hub.verify_token": url.searchParams.get("hub.verify_token") ?? undefined,
        "hub.challenge": url.searchParams.get("hub.challenge") ?? undefined,
      },
      env.META_VERIFY_TOKEN,
    );
    return challenge.valid && challenge.challenge
      ? new Response(challenge.challenge, { status: 200 })
      : new Response("forbidden", { status: 403 });
  }

  const parsed = await webhooks.facebook.safeParse({
    body: await request.arrayBuffer(),
    signature: request.headers.get("X-Hub-Signature-256") ?? "",
    appSecret: env.META_APP_SECRET,
  });
  if (!parsed.success) return new Response("invalid webhook", { status: 401 });

  await env.enqueue(webhooks.facebook.events(parsed.data));
  return new Response("accepted", { status: 202 });
}

export type WhatsAppMessageInput = {
  readonly accessToken: string;
  readonly phoneNumberId: string;
  readonly to: string;
  readonly body: string;
  readonly apiVersion?: string;
  readonly baseUrl?: string;
};

/** Send a typed WhatsApp Cloud API message from one durable workflow step. */
export async function sendWhatsAppText(
  input: WhatsAppMessageInput,
  workflow: Pick<WorkflowHost, "step">,
) {
  return workflow.step("whatsapp-send-text", () =>
    WhatsApp.createClient(input).sendText({ to: input.to, body: input.body }),
  );
}

export type WhatsAppWebhookEnvironment = {
  readonly META_VERIFY_TOKEN: string;
  readonly META_APP_SECRET: string;
  readonly enqueue: (events: readonly WhatsAppWebhookEvent[]) => Promise<void>;
};

/** Verify, extract, and hand off WhatsApp messages and delivery statuses. */
export async function handleWhatsAppWebhook(
  request: Request,
  env: WhatsAppWebhookEnvironment,
): Promise<Response> {
  const url = new URL(request.url);
  if (request.method === "GET") {
    const challenge = webhooks.verifyChallenge(
      {
        "hub.mode": url.searchParams.get("hub.mode") ?? undefined,
        "hub.verify_token": url.searchParams.get("hub.verify_token") ?? undefined,
        "hub.challenge": url.searchParams.get("hub.challenge") ?? undefined,
      },
      env.META_VERIFY_TOKEN,
    );
    return challenge.valid && challenge.challenge
      ? new Response(challenge.challenge, { status: 200 })
      : new Response("forbidden", { status: 403 });
  }

  const parsed = await webhooks.whatsapp.safeParse({
    body: await request.arrayBuffer(),
    signature: request.headers.get("X-Hub-Signature-256") ?? "",
    appSecret: env.META_APP_SECRET,
  });
  if (!parsed.success) return new Response("invalid webhook", { status: 401 });

  await env.enqueue(webhooks.whatsapp.events(parsed.data));
  return new Response("accepted", { status: 202 });
}
