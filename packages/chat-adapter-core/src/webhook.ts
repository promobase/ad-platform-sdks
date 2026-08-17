/** Hub-protocol request helpers shared by the Meta-family Chat adapters. */

import {
  verifyWebhookChallenge as verifyRuntimeWebhookChallenge,
  verifyWebhookSignature as verifyRuntimeWebhookSignature,
} from "@openpromo/sdk-runtime/webhooks";

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
  return verifyRuntimeWebhookChallenge(params, expectedVerifyToken);
}

/** Verify an X-Hub-Signature-256 HMAC-SHA256 signature over the raw body. */
export async function verifyHubSignature(
  body: string,
  signature: string,
  appSecret: string,
): Promise<boolean> {
  return verifyRuntimeWebhookSignature(body, signature, appSecret);
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
