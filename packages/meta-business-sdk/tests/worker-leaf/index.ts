import { webhooks } from "@openpromo/meta/webhooks";

export default {
  fetch(request: Request): Response {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({
        leaf: typeof webhooks.facebook.parse === "function",
        whatsapp: typeof webhooks.whatsapp.safeParse === "function",
      });
    }
    return new Response("ok");
  },
};
