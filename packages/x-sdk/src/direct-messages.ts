import type { BaseClientOptions } from "./generated/index.js";

export interface XDirectMessageEvent {
  id: string;
  event_type: string;
  text?: string;
  sender_id?: string;
  participant_ids?: string[];
  dm_conversation_id?: string;
  created_at?: string;
  attachments?: Array<{ media_key: string; type?: string }>;
}

export interface XDirectMessageEventsResponse {
  data?: XDirectMessageEvent[];
  meta?: { result_count?: number; next_token?: string; previous_token?: string };
  includes?: Record<string, unknown>;
}

export interface XDirectMessageResult {
  data: { dm_event_id: string; dm_conversation_id: string };
}

export function createXDirectMessages(opts: BaseClientOptions) {
  const fetchImpl = opts.fetch ?? fetch;

  async function request<T>(
    method: "GET" | "POST",
    path: string,
    options?: {
      query?: Record<string, string | number | undefined>;
      body?: unknown;
      signal?: AbortSignal;
    },
  ): Promise<T> {
    const token = await resolveToken(opts.token);
    if (!token) throw new Error("X Direct Messages require a user access token");
    const base = typeof opts.baseUrl === "string" ? opts.baseUrl : "https://api.x.com";
    const url = new URL(path.replace(/^\//, ""), `${base.replace(/\/$/, "")}/`);
    for (const [key, value] of Object.entries(options?.query ?? {})) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
    const response = await fetchImpl(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        ...(options?.body === undefined ? {} : { "Content-Type": "application/json" }),
      },
      body: options?.body === undefined ? undefined : JSON.stringify(options.body),
      signal: options?.signal,
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : undefined;
    if (!response.ok) throw new Error(`X Direct Message API failed (${response.status}): ${text}`);
    return data as T;
  }

  const defaultFields = {
    expansions: "sender_id,participant_ids,attachments.media_keys",
    "user.fields": "id,name,username,profile_image_url",
    "dm_event.fields":
      "id,text,event_type,sender_id,participant_ids,dm_conversation_id,created_at,attachments",
  };

  return {
    list(opts?: {
      conversationId?: string;
      participantId?: string;
      maxResults?: number;
      paginationToken?: string;
      signal?: AbortSignal;
    }) {
      const path = opts?.conversationId
        ? `/2/dm_conversations/${opts.conversationId}/dm_events`
        : opts?.participantId
          ? `/2/dm_conversations/with/${opts.participantId}/dm_events`
          : "/2/dm_events";
      return request<XDirectMessageEventsResponse>("GET", path, {
        query: {
          ...defaultFields,
          max_results: opts?.maxResults,
          pagination_token: opts?.paginationToken,
        },
        signal: opts?.signal,
      });
    },

    sendToParticipant(
      participantId: string,
      message: { text: string; attachments?: Array<{ media_id: string }> },
      signal?: AbortSignal,
    ) {
      return request<XDirectMessageResult>(
        "POST",
        `/2/dm_conversations/with/${participantId}/messages`,
        { body: message, signal },
      );
    },

    sendToConversation(
      conversationId: string,
      message: { text: string; attachments?: Array<{ media_id: string }> },
      signal?: AbortSignal,
    ) {
      return request<XDirectMessageResult>(
        "POST",
        `/2/dm_conversations/${conversationId}/messages`,
        { body: message, signal },
      );
    },
  };
}

async function resolveToken(token: BaseClientOptions["token"]): Promise<string | undefined> {
  if (typeof token === "function") return token();
  return token;
}
