/**
 * Chat SDK + Mosaic adapter + Think InboxAgent.
 *
 * This is the OpenPromo composition we want:
 *
 *   provider webhook
 *     -> Chat ingress Agent + Mosaic adapter
 *     -> canonical Inbox persistence (application-owned)
 *     -> workspace InboxAgent RPC
 *     -> Think runTurn({ mode: "submit" })
 *     -> InboxAgent-owned batching/FIFO execution
 *
 * Chat SDK is used for webhook verification, provider parsing, thread/message
 * normalization, and atomic transport dedupe. It is deliberately configured
 * with `concurrent`, not burst/debounce/queue: InboxAgent owns batching and
 * reasoning. There is no Chat SDK ConversationAgent and no per-thread Think
 * agent in this design.
 *
 * This file is library-shaped so the Cloudflare Worker can provide its real
 * Durable Object bindings and canonical Inbox repository. No provider or LLM
 * request is made merely by importing this module.
 */
import { Think, type ThinkSubmissionInspection } from "@cloudflare/think";
import { createMessengerAdapter } from "@openpromo/chat-adapters";
import { createChatSdkState } from "agents/chat-sdk";
import { Chat } from "chat";

/** The small canonical event that crosses from transport into InboxAgent. */
export type CanonicalInboxMessage = {
  readonly admissionId: string;
  readonly workspaceId: string;
  readonly connectedAccountId: string;
  readonly conversationId: string;
  readonly messageId: string;
  readonly text: string;
  readonly authorId: string;
  readonly authorName: string;
  readonly isSelf: boolean;
  readonly provider: string;
};

/** OpenPromo's canonical store is outside Mosaic and outside Chat SDK. */
export interface CanonicalInboxRepository {
  persistMessage(input: {
    readonly workspaceId: string;
    readonly connectedAccountId: string;
    readonly provider: string;
    readonly conversationId: string;
    readonly messageId: string;
    readonly text: string;
    readonly authorId: string;
    readonly authorName: string;
    readonly isSelf: boolean;
  }): Promise<CanonicalInboxMessage>;
}

/** The RPC surface the Chat ingress needs from the workspace InboxAgent. */
export type InboxAgentRpc = Pick<InboxThinkAgent, "admitCanonicalMessage">;

/** Resolve the single workspace InboxAgent; this is normally getAgentByName(). */
export type ResolveInboxAgent = (workspaceId: string) => Promise<InboxAgentRpc>;

/**
 * The reasoning owner. Every conversation in the workspace submits to this
 * one Think instance; InboxAgent's own canonical head/coalescing logic decides
 * what work is submitted and in which order.
 */
export class InboxThinkAgent extends Think {
  override getModel(): string {
    // Think resolves string models through the host's configured provider.
    // OpenPromo's real agent uses its ModelProvider instead.
    return "@cf/meta/llama-3.1-8b-instruct";
  }

  override getSystemPrompt(): string {
    return [
      "You are the InboxAgent for one workspace.",
      "Process the admitted canonical Inbox event using the workspace policy.",
      "Never assume the transport owns batching or that a thread has its own agent.",
    ].join(" ");
  }

  /** Public RPC called only after canonical persistence succeeds. */
  async admitCanonicalMessage(message: CanonicalInboxMessage) {
    const submission = await this.runTurn({
      mode: "submit",
      idempotencyKey: message.admissionId,
      input: `Process canonical Inbox message ${JSON.stringify(message)}`,
      metadata: {
        admissionId: message.admissionId,
        conversationId: message.conversationId,
        messageId: message.messageId,
      },
    });

    return {
      accepted: submission.accepted,
      submissionId: submission.submissionId,
      status: submission.status,
    };
  }

  /** Status is where the real Inbox lifecycle projection would be updated. */
  override async onSubmissionStatus(submission: ThinkSubmissionInspection): Promise<void> {
    console.log("Inbox submission status", {
      submissionId: submission.submissionId,
      status: submission.status,
    });
  }
}

export type InboxChatRuntimeInput = {
  readonly workspaceId: string;
  readonly connectedAccountId: string;
  readonly appSecret: string;
  readonly verifyToken: string;
  readonly pageAccessToken: string;
  readonly pageId: string;
  readonly repository: CanonicalInboxRepository;
  readonly resolveInboxAgent: ResolveInboxAgent;
};

type MessengerAdapter = ReturnType<typeof createMessengerAdapter>;
export type InboxChatBot = Chat<{ messenger: MessengerAdapter }>;

/**
 * Build the Chat SDK runtime owned by the ingress Agent/DO.
 *
 * `persistThreadHistory: false` prevents Chat SDK's transcript/history from
 * becoming a second Inbox source of truth. `createChatSdkState()` still gives
 * Chat SDK durable webhook dedupe and transport state; it does not create
 * reasoning agents. `concurrent` avoids Chat SDK's message batching so the
 * InboxAgent admission path sees every event.
 */
export function createInboxChatRuntime(input: InboxChatRuntimeInput): Chat {
  const messenger = createMessengerAdapter({
    adapterName: `workspace:${input.workspaceId}:messenger:${input.connectedAccountId}`,
    appSecret: input.appSecret,
    verifyToken: input.verifyToken,
    accessToken: input.pageAccessToken,
    pageId: input.pageId,
    persistThreadHistory: false,
  });

  const bot = new Chat<{ messenger: MessengerAdapter }>({
    userName: "openpromo-inbox",
    adapters: { messenger },
    state: createChatSdkState(),
    concurrency: { strategy: "concurrent" },
  });

  bot.onDirectMessage(async (_thread, message) => {
    // Chat SDK can expose self echoes for history. They must never enter the
    // customer Inbox or trigger an InboxAgent turn.
    if (message.author.isMe) return;

    // This is the only transport-to-domain conversion. The repository owns
    // canonical identity/idempotency; the adapter owns provider parsing and
    // Chat SDK owns stable thread/message normalization.
    const canonical = await input.repository.persistMessage({
      workspaceId: input.workspaceId,
      connectedAccountId: input.connectedAccountId,
      provider: "messenger",
      conversationId: message.threadId,
      messageId: message.id,
      text: message.text,
      authorId: message.author.userId,
      authorName: message.author.fullName,
      isSelf: message.author.isMe,
    });

    // The RPC must await durable acceptance. `waitUntil` alone would only keep
    // a Worker alive; it would not make the Inbox admission durable.
    const inboxAgent = await input.resolveInboxAgent(input.workspaceId);
    await inboxAgent.admitCanonicalMessage(canonical);
  });

  return bot;
}

/** Thin public route: the ingress Agent owns the Chat SDK webhook call. */
export function handleMessengerWebhook(bot: InboxChatBot, request: Request): Promise<Response> {
  return bot.webhooks.messenger(request);
}

/*
 * Worker wiring (schematic — bindings are application-specific):
 *
 *   const inboxAgent = await getAgentByName(env.InboxAgent, workspaceId);
 *   const bot = createInboxChatRuntime({
 *     workspaceId,
 *     connectedAccountId,
 *     repository: canonicalInboxRepository,
 *     resolveInboxAgent: async () => inboxAgent,
 *     appSecret: env.META_APP_SECRET,
 *     verifyToken: env.META_VERIFY_TOKEN,
 *     pageAccessToken: env.PAGE_ACCESS_TOKEN,
 *     pageId: env.PAGE_ID,
 *   });
 *   return handleMessengerWebhook(bot, request);
 *
 * Export `ChatSdkStateAgent` from the Worker entrypoint when using
 * createChatSdkState() so the Chat SDK state Durable Object is discoverable:
 *
 *   export { ChatSdkStateAgent } from "agents/chat-sdk";
 */
