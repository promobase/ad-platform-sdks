/** Platform-first WhatsApp entrypoint. */
export type {
  WhatsAppClientOptions,
  WhatsAppFetch,
  WhatsAppInteractiveMessage,
  WhatsAppMediaMessage,
  WhatsAppMediaType,
  WhatsAppSendResult,
  WhatsAppTemplateMessage,
  WhatsAppTextMessage,
} from "@openpromo/meta/webhooks";
export { WhatsApp } from "@openpromo/meta";
export { createWhatsAppClient, WhatsAppApiError } from "@openpromo/meta/webhooks";
