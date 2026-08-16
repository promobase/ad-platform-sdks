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

/**
 * Full hub-protocol inbound check used by adapter `verifyInbound` hooks:
 * GET challenge handshake or POST signature verification. Returns `null` to
 * accept the request, or a rejection `Response`.
 */
export async function verifyHubInbound(
  request: Request,
  body: string,
  options: { appSecret: string; verifyToken: string },
): Promise<Response | null> {
  if (request.method === "GET") {
    const result = verifyHubChallenge(
      Object.fromEntries(new URL(request.url).searchParams.entries()),
      options.verifyToken,
    );
    if (!result.valid || !result.challenge) {
      return new Response("Verification failed", { status: 403 });
    }
    return new Response(result.challenge, { status: 200 });
  }

  const signature = request.headers.get("X-Hub-Signature-256");
  if (!signature) {
    return new Response("Missing X-Hub-Signature-256 header", { status: 403 });
  }
  const valid = await verifyHubSignature(body, signature, options.appSecret);
  if (!valid) {
    return new Response("Invalid X-Hub-Signature-256 header", { status: 403 });
  }
  return null;
}
