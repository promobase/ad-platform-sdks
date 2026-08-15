const DEFAULT_GRAPH_BASE_URL = "https://graph.facebook.com";
const DEFAULT_API_VERSION = "v26.0";

export type WhatsAppFetch = (input: string | URL, init?: RequestInit) => Promise<Response>;

export type WhatsAppClientOptions = {
  readonly phoneNumberId: string;
  readonly accessToken: string;
  readonly apiVersion?: string;
  readonly baseUrl?: string;
  readonly fetch?: WhatsAppFetch;
  readonly signal?: AbortSignal;
};

export type WhatsAppSendResult = {
  readonly messaging_product: "whatsapp";
  readonly contacts?: readonly { readonly input: string; readonly wa_id: string }[];
  readonly messages: readonly { readonly id: string }[];
};

export type WhatsAppTextMessage = {
  readonly to: string;
  readonly body: string;
  readonly previewUrl?: boolean;
};

export type WhatsAppMediaType = "audio" | "document" | "image" | "sticker" | "video";

export type WhatsAppMediaMessage = {
  readonly to: string;
  readonly type: WhatsAppMediaType;
  readonly media: {
    readonly id?: string;
    readonly link?: string;
    readonly caption?: string;
    readonly filename?: string;
  };
};

export type WhatsAppTemplateMessage = {
  readonly to: string;
  readonly name: string;
  readonly languageCode: string;
  readonly components?: readonly Record<string, unknown>[];
};

export type WhatsAppInteractiveMessage = {
  readonly to: string;
  readonly interactive: Record<string, unknown> & {
    readonly type: "button" | "list" | "product" | "product_list" | "flow";
  };
};

export type WhatsAppApiErrorPayload = {
  readonly error?: {
    readonly message?: string;
    readonly type?: string;
    readonly code?: number;
    readonly error_subcode?: number;
    readonly fbtrace_id?: string;
  };
};

export class WhatsAppApiError extends Error {
  readonly status: number;
  readonly providerCode?: number;
  readonly providerSubcode?: number;
  readonly providerType?: string;
  readonly fbtraceId?: string;
  readonly retryable: boolean;

  constructor(status: number, payload: WhatsAppApiErrorPayload) {
    const details = payload.error;
    super(details?.message ?? `WhatsApp API request failed with status ${status}`);
    this.name = "WhatsAppApiError";
    this.status = status;
    this.providerCode = details?.code;
    this.providerSubcode = details?.error_subcode;
    this.providerType = details?.type;
    this.fbtraceId = details?.fbtrace_id;
    this.retryable = status === 408 || status === 409 || status === 429 || status >= 500;
  }
}

function withoutUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined)) as T;
}

export function createWhatsAppClient(opts: WhatsAppClientOptions) {
  const fetchImpl = opts.fetch ?? fetch;
  const baseUrl = (opts.baseUrl ?? DEFAULT_GRAPH_BASE_URL).replace(/\/$/u, "");
  const apiVersion = opts.apiVersion ?? DEFAULT_API_VERSION;
  const endpoint = `${baseUrl}/${apiVersion}/${opts.phoneNumberId}/messages`;

  async function send(payload: Record<string, unknown>): Promise<WhatsAppSendResult> {
    const response = await fetchImpl(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${opts.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messaging_product: "whatsapp", ...payload }),
      signal: opts.signal,
    });

    const body = (await response.json()) as unknown;
    if (!response.ok) {
      throw new WhatsAppApiError(response.status, body as WhatsAppApiErrorPayload);
    }
    return body as WhatsAppSendResult;
  }

  return {
    sendText(input: WhatsAppTextMessage): Promise<WhatsAppSendResult> {
      return send({
        to: input.to,
        type: "text",
        text: withoutUndefined({ body: input.body, preview_url: input.previewUrl }),
      });
    },

    sendMedia(input: WhatsAppMediaMessage): Promise<WhatsAppSendResult> {
      return send({
        to: input.to,
        type: input.type,
        [input.type]: withoutUndefined(input.media),
      });
    },

    sendTemplate(input: WhatsAppTemplateMessage): Promise<WhatsAppSendResult> {
      return send({
        to: input.to,
        type: "template",
        template: withoutUndefined({
          name: input.name,
          language: { code: input.languageCode },
          components: input.components,
        }),
      });
    },

    sendInteractive(input: WhatsAppInteractiveMessage): Promise<WhatsAppSendResult> {
      return send({ to: input.to, type: "interactive", interactive: input.interactive });
    },
  };
}
