/**
 * Chat adapter webhook ingress — provider transport to durable application
 * events.
 *
 * Run the registration-only example with:
 *   bun examples/webhooks/chat-adapter-ingress.ts
 *
 * This example does not call a provider. It demonstrates the ownership
 * boundary for an OpenPromo-style workspace ingress:
 *
 *   provider webhook
 *     -> Mosaic adapter verification + provider parsing
 *     -> generic AdapterWebhookEvent
 *     -> serializable durable ingress envelope
 *     -> canonical Inbox persistence and InboxAgent admission (downstream)
 *
 * The in-memory store below stands in for a workspace-scoped Durable Object.
 * In production, appendMany must commit the envelope durably before the
 * webhook handler returns its success response.
 */
import {
  createFacebookCommentsAdapter,
  createInstagramAdapter,
  createInstagramCommentsAdapter,
  createMessengerAdapter,
  createTikTokCommentsAdapter,
  createTikTokMessagingAdapter,
} from "@openpromo/chat-adapters";
import type { AdapterWebhookEvent, AdapterWebhookSource } from "@openpromo/chat-adapters";

export type DurableIngressEvent = {
  readonly idempotencyKey?: string;
  readonly adapterName: string;
  readonly connectedAccountId: string;
  readonly receivedAt: string;
  readonly kind: AdapterWebhookEvent["kind"];
  readonly threadId: string;
  readonly messageId?: string;
  readonly message?: {
    readonly id: string;
    readonly threadId: string;
    readonly text: string;
    readonly author: {
      readonly userId: string;
      readonly userName: string;
      readonly fullName: string;
      readonly isMe: boolean;
    };
  };
  readonly action?: AdapterWebhookEvent["action"];
  readonly reaction?: AdapterWebhookEvent["reaction"];
  readonly isSelf?: boolean;
  /** Provider payload for bounded audit/debug storage, never agent context. */
  readonly raw: unknown;
  readonly metadata?: unknown;
};

type DurableAuthor = NonNullable<DurableIngressEvent["message"]>["author"];

/** The application owns this durable boundary; Mosaic does not import it. */
export interface DurableIngressStore {
  appendMany(events: readonly DurableIngressEvent[]): Promise<void>;
}

type RegisteredWebhookSource = AdapterWebhookSource<unknown, unknown>;

type AdapterBinding = {
  readonly connectedAccountId: string;
  readonly source: RegisteredWebhookSource;
};

/**
 * A small workspace-scoped ingress registry. One instance represents one
 * workspace DO, while each registered name identifies one connected account
 * and surface. Names must be unique even when two accounts use the same
 * provider (for example `workspace-1:facebook:dm:page-1`).
 */
export class WorkspaceChatIngress {
  private readonly bindings = new Map<string, AdapterBinding>();

  constructor(private readonly store: DurableIngressStore) {}

  register(adapterName: string, binding: AdapterBinding): void {
    if (this.bindings.has(adapterName)) {
      throw new Error(`Adapter name already registered: ${adapterName}`);
    }
    this.bindings.set(adapterName, binding);
  }

  /**
   * Handle a first-party Mosaic adapter webhook. The adapter's existing
   * provider parser still runs inside parseWebhookEvents(); this method only
   * owns routing and durable offload.
   */
  async handleWebhook(adapterName: string, request: Request): Promise<Response> {
    const binding = this.bindings.get(adapterName);
    if (!binding) return new Response("Unknown adapter", { status: 404 });

    const result = await binding.source.parseWebhookEvents(request);
    if (result.kind === "response") return result.response;

    await this.acceptEvents(adapterName, binding.connectedAccountId, result.events);
    return new Response("EVENT_RECEIVED", { status: 200 });
  }

  /**
   * Shared handoff for official Chat SDK adapters, such as @chat-adapter/x.
   * The official adapter invokes this callback after its own webhook parsing;
   * it does not need to be reimplemented in Mosaic.
   */
  async acceptOfficialMessage(input: {
    readonly adapterName: string;
    readonly connectedAccountId: string;
    readonly threadId: string;
    readonly messageId: string;
    readonly text: string;
    readonly author: DurableAuthor;
    readonly raw: unknown;
  }): Promise<void> {
    await this.store.appendMany([
      {
        idempotencyKey: `${input.adapterName}:message:${input.messageId}`,
        adapterName: input.adapterName,
        connectedAccountId: input.connectedAccountId,
        receivedAt: new Date().toISOString(),
        kind: "message",
        threadId: input.threadId,
        messageId: input.messageId,
        message: {
          id: input.messageId,
          threadId: input.threadId,
          text: input.text,
          author: input.author,
        },
        isSelf: input.author.isMe,
        raw: input.raw,
      },
    ]);
  }

  private async acceptEvents(
    adapterName: string,
    connectedAccountId: string,
    events: readonly AdapterWebhookEvent<unknown, unknown>[],
  ): Promise<void> {
    const receivedAt = new Date().toISOString();
    await this.store.appendMany(
      events.map((event) =>
        toDurableIngressEvent(adapterName, connectedAccountId, receivedAt, event),
      ),
    );
  }
}

function toDurableIngressEvent(
  adapterName: string,
  connectedAccountId: string,
  receivedAt: string,
  event: AdapterWebhookEvent<unknown, unknown>,
): DurableIngressEvent {
  const message = event.message;
  const messageId = event.messageId ?? message?.id;
  const eventId = event.eventId ?? messageId;

  return {
    // Message/comment IDs are provider-scoped, so include the adapter runtime
    // name. Events without a stable provider ID must be deduplicated by the
    // canonicalizer using provider-specific metadata before agent admission.
    idempotencyKey: eventId ? `${adapterName}:${event.kind}:${eventId}` : undefined,
    adapterName,
    connectedAccountId,
    receivedAt,
    kind: event.kind,
    threadId: event.threadId,
    ...(messageId ? { messageId } : {}),
    ...(message
      ? {
          message: {
            id: message.id,
            threadId: message.threadId,
            text: message.text,
            author: {
              userId: message.author.userId,
              userName: message.author.userName,
              fullName: message.author.fullName,
              isMe: message.author.isMe,
            },
          },
        }
      : {}),
    ...(event.action ? { action: event.action } : {}),
    ...(event.reaction ? { reaction: event.reaction } : {}),
    ...(event.isSelf === undefined ? {} : { isSelf: event.isSelf }),
    raw: event.raw,
    ...(event.metadata === undefined ? {} : { metadata: event.metadata }),
  };
}

/** Register every first-party adapter under a unique account-scoped name. */
export function createExampleIngress(store: DurableIngressStore): WorkspaceChatIngress {
  const ingress = new WorkspaceChatIngress(store);
  const common = {
    appSecret: "example-secret",
    accessToken: "example-token",
    persistThreadHistory: false,
  };

  ingress.register("workspace-1:facebook:dm:page-1", {
    connectedAccountId: "page-1",
    source: createMessengerAdapter({
      ...common,
      verifyToken: "example-verify-token",
      pageId: "page-1",
      adapterName: "workspace-1:facebook:dm:page-1",
    }),
  });
  ingress.register("workspace-1:facebook:comments:page-1", {
    connectedAccountId: "page-1",
    source: createFacebookCommentsAdapter({
      ...common,
      verifyToken: "example-verify-token",
      pageId: "page-1",
      adapterName: "workspace-1:facebook:comments:page-1",
    }),
  });
  ingress.register("workspace-1:instagram:dm:account-1", {
    connectedAccountId: "account-1",
    source: createInstagramAdapter({
      ...common,
      verifyToken: "example-verify-token",
      accountId: "account-1",
      adapterName: "workspace-1:instagram:dm:account-1",
    }),
  });
  ingress.register("workspace-1:instagram:comments:account-1", {
    connectedAccountId: "account-1",
    source: createInstagramCommentsAdapter({
      ...common,
      verifyToken: "example-verify-token",
      accountId: "account-1",
      adapterName: "workspace-1:instagram:comments:account-1",
    }),
  });
  ingress.register("workspace-1:tiktok:dm:business-1", {
    connectedAccountId: "business-1",
    source: createTikTokMessagingAdapter({
      ...common,
      businessId: "business-1",
      adapterName: "workspace-1:tiktok:dm:business-1",
    }),
  });
  ingress.register("workspace-1:tiktok:comments:business-1", {
    connectedAccountId: "business-1",
    source: createTikTokCommentsAdapter({
      ...common,
      businessId: "business-1",
      adapterName: "workspace-1:tiktok:comments:business-1",
    }),
  });

  return ingress;
}

/**
 * Official X composition: create Chat with @chat-adapter/x in the host, then
 * connect its onDirectMessage callback to the same durable ingress. The route
 * should return `bot.webhooks.x(request)`; do not use waitUntil as the only
 * persistence mechanism because it is runtime liveness, not durable storage.
 */
export function connectOfficialX(input: {
  readonly bot: {
    readonly webhooks: { x(request: Request): Promise<Response> };
    onDirectMessage(
      handler: (
        thread: { readonly id: string },
        message: {
          readonly id: string;
          readonly threadId: string;
          readonly text: string;
          readonly author: DurableAuthor;
        },
      ) => Promise<void>,
    ): void;
  };
  readonly ingress: WorkspaceChatIngress;
  readonly adapterName: string;
  readonly connectedAccountId: string;
}): (request: Request) => Promise<Response> {
  input.bot.onDirectMessage(async (_thread, message) => {
    await input.ingress.acceptOfficialMessage({
      adapterName: input.adapterName,
      connectedAccountId: input.connectedAccountId,
      threadId: message.threadId,
      messageId: message.id,
      text: message.text,
      author: message.author,
      raw: message,
    });
  });

  return (request) => input.bot.webhooks.x(request);
}

/**
 * iMessage/email adapters can use the same registry when they implement the
 * minimal AdapterWebhookSource contract. They do not need to subclass a DM or
 * comment base, and their provider-specific facts belong in metadata.
 */
export function registerFutureAdapter(
  ingress: WorkspaceChatIngress,
  adapterName: string,
  connectedAccountId: string,
  source: RegisteredWebhookSource,
): void {
  ingress.register(adapterName, { connectedAccountId, source });
}

class InMemoryIngressStore implements DurableIngressStore {
  readonly events: DurableIngressEvent[] = [];

  async appendMany(events: readonly DurableIngressEvent[]): Promise<void> {
    this.events.push(...events);
  }
}

async function signSha256(body: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body)),
  );
  return `sha256=${Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

if (import.meta.main) {
  const store = new InMemoryIngressStore();
  const ingress = createExampleIngress(store);
  const adapterName = "workspace-1:facebook:dm:page-1";
  const body = JSON.stringify({
    object: "page",
    entry: [
      {
        id: "page-1",
        time: 1786800000,
        messaging: [
          {
            sender: { id: "customer-1" },
            recipient: { id: "page-1" },
            timestamp: 1786800001,
            message: { mid: "message-1", text: "Hello from the ingress example" },
          },
        ],
      },
    ],
  });
  const response = await ingress.handleWebhook(
    adapterName,
    new Request("https://example.test/webhooks/facebook", {
      method: "POST",
      headers: { "X-Hub-Signature-256": await signSha256(body, "example-secret") },
      body,
    }),
  );

  console.log(`Webhook response: ${response.status}; durable envelopes: ${store.events.length}`);
  console.log("First envelope:", store.events[0]);
}
