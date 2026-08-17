/**
 * Thread identity is the adapter contract: the same thread id must encode the
 * same provider conversation everywhere it is stored, logged, or routed.
 * Instagram DM ids mirror the official Chat SDK shape. Messenger adapter ids
 * add the Page account scope because Inbox can mount multiple Pages in one Chat
 * runtime; comment ids are OpenPromo's own scheme because no official adapter
 * exposes comment threads.
 */

export type ChatAdapterPlatform = "messenger" | "instagram" | "tiktok";

// ─────────────────────────────────────────────────────────────────────────
// DM thread identity
// ─────────────────────────────────────────────────────────────────────────

export interface DmThreadData {
  platform: "messenger" | "instagram";
  /** Page id (messenger) or IG professional account id (instagram). */
  accountId: string;
  /** PSID (messenger) or IGSID (instagram). */
  userId: string;
}

/**
 * Encode a DM thread id.
 * - messenger: `messenger:{userId}` (legacy helper shape; the first-party
 *   MessengerAdapter uses `messenger:{pageId}:{userId}` for account isolation)
 * - instagram: `instagram:{accountId}:{userId}` (mirrors `@chat-adapter/instagram`)
 */
export function dmThreadId(data: DmThreadData): string {
  if (data.platform === "messenger") {
    return `messenger:${data.userId}`;
  }
  return `instagram:${data.accountId}:${data.userId}`;
}

export function decodeDmThreadId(threadId: string): DmThreadData {
  const [platform, accountId, userId] = threadId.split(":");
  if (platform === "messenger" && accountId) {
    return { platform, accountId: "", userId: accountId };
  }
  if (platform === "instagram" && accountId && userId) {
    return { platform, accountId, userId };
  }
  throw new Error(`Invalid DM thread id: ${threadId}`);
}

// ─────────────────────────────────────────────────────────────────────────
// Comments-as-threads
// ─────────────────────────────────────────────────────────────────────────

/**
 * One thread per comment tree, rooted at the top-level comment id. The
 * business's own replies and customer replies on the same tree are messages
 * in the same thread.
 */
export interface CommentThreadData {
  platform: "facebook" | "instagram" | "tiktok";
  /** Page id / IG professional account id / TikTok business id. */
  accountId: string;
  /** Top-level comment id (FB/IG comment_id, TikTok parent_comment_id). */
  parentCommentId: string;
}

export function commentThreadId(data: CommentThreadData): string {
  return `${data.platform}:${data.accountId}:comment:${data.parentCommentId}`;
}

export function decodeCommentThreadId(threadId: string): CommentThreadData {
  const parts = threadId.split(":");
  if (parts.length !== 4 || parts[2] !== "comment") {
    throw new Error(`Invalid comment thread id: ${threadId}`);
  }
  const [platform, accountId, , parentCommentId] = parts;
  if (platform !== "facebook" && platform !== "instagram" && platform !== "tiktok") {
    throw new Error(`Invalid comment platform in thread id: ${threadId}`);
  }
  return {
    platform,
    accountId: accountId ?? "",
    parentCommentId: parentCommentId ?? "",
  };
}

/** Comment webhook verbs across FB, IG, and TikTok. */
export type CommentVerb = "add" | "remove" | "hide" | "edit" | "delete" | "restore" | "unknown";

/** Map a platform verb to message-level semantics. */
export function commentMessageState(verb: CommentVerb): {
  deleted: boolean;
  edited: boolean;
} {
  switch (verb) {
    case "remove":
    case "delete":
    case "hide":
      return { deleted: true, edited: false };
    case "edit":
    case "restore":
      return { deleted: false, edited: verb === "edit" };
    default:
      return { deleted: false, edited: false };
  }
}

/** Provider context attached to a comment thread (post/media identity). */
export interface CommentThreadContext {
  postId?: string | null;
  mediaId?: string | null;
  videoId?: string | null;
  permalink?: string | null;
}
