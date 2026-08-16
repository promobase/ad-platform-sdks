/**
 * Hub-protocol webhook verification helpers (challenge handshake and
 * X-Hub-Signature-256 HMAC). Shared by every hub-protocol platform adapter;
 * platform packages wire these into their `verifyInbound` hook.
 */

export interface HubChallengeParams {
  "hub.mode"?: string;
  "hub.challenge"?: string;
  "hub.verify_token"?: string;
}

/** Verify a hub challenge GET request. */
export function verifyHubChallenge(
  params: HubChallengeParams,
  expectedVerifyToken: string,
): { valid: boolean; challenge?: string } {
  if (
    params["hub.mode"] === "subscribe" &&
    params["hub.verify_token"] === expectedVerifyToken &&
    params["hub.challenge"]
  ) {
    return { valid: true, challenge: params["hub.challenge"] };
  }
  return { valid: false };
}

/** Verify an X-Hub-Signature-256 HMAC-SHA256 signature over the raw body. */
export async function verifyHubSignature(
  body: string,
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
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  const hex = Array.from(new Uint8Array(signed))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hex === expectedSig;
}
