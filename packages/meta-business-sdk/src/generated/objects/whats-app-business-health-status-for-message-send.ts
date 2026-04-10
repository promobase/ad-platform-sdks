import type { StatusFields } from "./status.ts";
import type { WhatsAppBusinessHealthStatusFields } from "./whats-app-business-health-status.ts";

export interface WhatsAppBusinessHealthStatusForMessageSendFields {
  can_send_message: string;
  entities: WhatsAppBusinessHealthStatusFields[];
}

