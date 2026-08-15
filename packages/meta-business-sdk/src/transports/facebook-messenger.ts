import { requestMetaJson, type MetaTransportClientOptions } from "./http.ts";

export type FacebookMessengerClientOptions = MetaTransportClientOptions & {
  readonly pageId: string;
};

export type FacebookMessengerSendResult = {
  readonly recipientId: string;
  readonly messageId: string;
};

export type FacebookMessengerMessage =
  | { readonly text: string }
  | {
      readonly attachment: {
        readonly type: "image" | "video" | "audio" | "file" | "template";
        readonly payload: Record<string, unknown>;
      };
    };

export function createFacebookMessengerTransport(opts: FacebookMessengerClientOptions) {
  async function send(message: FacebookMessengerMessage, recipientId: string) {
    const result = await requestMetaJson<{
      readonly recipient_id: string;
      readonly message_id: string;
    }>(opts, "facebook", "messenger.send", `${opts.pageId}/messages`, {
      method: "POST",
      body: JSON.stringify({
        messaging_type: "RESPONSE",
        recipient: { id: recipientId },
        message,
      }),
    });
    return { recipientId: result.recipient_id, messageId: result.message_id };
  }

  return {
    sendText(input: {
      readonly recipientId: string;
      readonly text: string;
    }): Promise<FacebookMessengerSendResult> {
      return send({ text: input.text }, input.recipientId);
    },
    sendAttachment(input: {
      readonly recipientId: string;
      readonly type: "image" | "video" | "audio" | "file" | "template";
      readonly payload: Record<string, unknown>;
    }): Promise<FacebookMessengerSendResult> {
      return send({ attachment: { type: input.type, payload: input.payload } }, input.recipientId);
    },
  };
}
