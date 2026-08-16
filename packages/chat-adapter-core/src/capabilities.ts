export interface AdapterCapabilities {
  /** Platform-native message editing. */
  canEditMessages: boolean;
  /** Platform-native streaming post APIs. */
  canStream: boolean;
  /** Button/card actions. */
  supportsActions: boolean;
  /** Media attachments on send. */
  supportsAttachments: boolean;
  /** Typing indicators. */
  supportsTyping: boolean;
  /** Read receipts (mark-seen). */
  supportsReadReceipts: boolean;
  /** Reaction support on send. */
  reactions: "send" | "receive" | "none";
  /** Persist inbound message history in the Chat SDK state adapter. */
  persistThreadHistory: boolean;
}

export const MESSENGER_CAPABILITIES: AdapterCapabilities = {
  canEditMessages: false,
  canStream: false,
  supportsActions: true,
  supportsAttachments: true,
  supportsTyping: true,
  supportsReadReceipts: true,
  reactions: "receive",
  persistThreadHistory: true,
};

export const INSTAGRAM_CAPABILITIES: AdapterCapabilities = {
  canEditMessages: false,
  canStream: false,
  supportsActions: true,
  supportsAttachments: true,
  supportsTyping: true,
  supportsReadReceipts: false,
  reactions: "receive",
  persistThreadHistory: true,
};
