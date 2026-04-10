/**
 * Verify a Meta webhook challenge request.
 * Used in GET handler to respond to Meta's subscription verification.
 */
export function verifyWebhookChallenge(params: {
  "hub.mode"?: string;
  "hub.challenge"?: string;
  "hub.verify_token"?: string;
}, expectedVerifyToken: string): { valid: boolean; challenge?: string } {
  if (
    params["hub.mode"] === "subscribe" &&
    params["hub.verify_token"] === expectedVerifyToken &&
    params["hub.challenge"]
  ) {
    return { valid: true, challenge: params["hub.challenge"] };
  }
  return { valid: false };
}

/**
 * Verify the HMAC-SHA256 signature on a webhook payload.
 * The signature is in the X-Hub-Signature-256 header as "sha256={hex}".
 */
export async function verifyWebhookSignature(
  body: string | ArrayBuffer,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  const expectedSig = signature.replace("sha256=", "");
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(appSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bodyBytes = typeof body === "string" ? encoder.encode(body) : body;
  const signed = await crypto.subtle.sign("HMAC", key, bodyBytes);
  const hex = Array.from(new Uint8Array(signed))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex === expectedSig;
}
