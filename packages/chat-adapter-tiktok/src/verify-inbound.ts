import { verifyWebhookSignature } from "@openpromo/tiktok";

/**
 * Shared TikTok inbound check: `challenge` GET handshake or POST
 * `TikTok-Signature` verification (t=<ts>,s=<hmac> with a replay window).
 * Returns `null` to accept, or a rejection `Response`.
 */
export async function verifyTikTokInbound(
  request: Request,
  body: string,
  options: { appSecret: string; maxSignatureAgeSeconds?: number },
): Promise<Response | null> {
  if (request.method === "GET") {
    const challenge = new URL(request.url).searchParams.get("challenge");
    if (!challenge) {
      return new Response("Missing challenge", { status: 400 });
    }
    return new Response(challenge, { status: 200 });
  }

  const signature = request.headers.get("TikTok-Signature");
  if (!signature) {
    return new Response("Missing TikTok-Signature header", { status: 403 });
  }
  const valid = await verifyWebhookSignature(body, signature, options.appSecret, {
    maxAgeSeconds: options.maxSignatureAgeSeconds ?? 300,
  });
  if (!valid) {
    return new Response("Invalid TikTok-Signature", { status: 403 });
  }
  return null;
}
