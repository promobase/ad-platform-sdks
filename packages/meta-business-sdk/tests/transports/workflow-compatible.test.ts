import { expect, test } from "bun:test";

import { createFacebookMessengerTransport } from "../../src/transports/facebook-messenger.ts";
import { PlatformTransportError } from "../../src/transports/http.ts";
import {
  createInstagramTransport,
  isInstagramContainerStatusCode,
} from "../../src/transports/index.ts";

const credentials = {
  accessToken: "workflow-secret",
  apiVersion: "v25.0",
  baseUrl: "https://graph.example.test",
};

async function workflowStep<T>(operation: () => Promise<T>): Promise<T> {
  return JSON.parse(JSON.stringify(await operation())) as T;
}

test("Instagram transport exposes one atomic serializable operation per step", async () => {
  const requests: { url: string; init?: RequestInit }[] = [];
  const responses = [
    { id: "container_1" },
    { id: "container_1", status_code: "FINISHED" },
    { id: "media_1" },
    { id: "media_1", permalink: "https://instagram.example/media_1" },
  ];
  const fetchImpl = async (input: string | URL, init?: RequestInit) => {
    requests.push({ url: String(input), init });
    return new Response(JSON.stringify(responses.shift()), { status: 200 });
  };
  const createTransport = () =>
    createInstagramTransport({ ...credentials, instagramAccountId: "ig_123", fetch: fetchImpl });

  const created = await workflowStep(() =>
    createTransport().createMediaContainer({ imageUrl: "https://example.test/image.jpg" }),
  );
  const status = await workflowStep(() =>
    createTransport().getMediaContainerStatus({ containerId: created.containerId }),
  );
  const published = await workflowStep(() =>
    createTransport().publishMediaContainer({ containerId: created.containerId }),
  );
  const permalink = await workflowStep(() =>
    createTransport().fetchPermalink({ mediaId: published.mediaId }),
  );

  expect(created).toEqual({ containerId: "container_1" });
  expect(status).toEqual({ containerId: "container_1", status: "FINISHED" });
  expect(isInstagramContainerStatusCode(status.status)).toBe(true);
  expect(published).toEqual({ mediaId: "media_1" });
  expect(permalink).toEqual({ mediaId: "media_1", permalink: "https://instagram.example/media_1" });
  expect(requests).toHaveLength(4);
  expect(requests.map((request) => request.init?.method)).toEqual(["POST", "GET", "POST", "GET"]);
  expect(JSON.stringify(created)).not.toContain("workflow-secret");
  expect(JSON.stringify(status)).not.toContain("workflow-secret");
});

test("Instagram container status preserves undocumented future provider values", async () => {
  const transport = createInstagramTransport({
    ...credentials,
    instagramAccountId: "ig_123",
    fetch: async () =>
      new Response(JSON.stringify({ id: "container_1", status_code: "PAUSED_BY_REVIEW" }), {
        status: 200,
      }),
  });

  const result = await transport.getMediaContainerStatus({ containerId: "container_1" });

  expect(result).toEqual({ containerId: "container_1", status: "PAUSED_BY_REVIEW" });
  expect(isInstagramContainerStatusCode(result.status)).toBe(false);
});

test("Messenger transport uses a native typed send operation", async () => {
  let request: { url: string; init?: RequestInit } | undefined;
  const transport = createFacebookMessengerTransport({
    ...credentials,
    pageId: "page_123",
    fetch: async (input, init) => {
      request = { url: String(input), init };
      return new Response(JSON.stringify({ recipient_id: "user_123", message_id: "mid_1" }), {
        status: 200,
      });
    },
  });

  const result = await transport.sendText({ recipientId: "user_123", text: "Hello" });
  expect(result).toEqual({ recipientId: "user_123", messageId: "mid_1" });
  expect(request?.url).toBe("https://graph.example.test/v25.0/page_123/messages");
  expect(JSON.parse(String(request?.init?.body))).toEqual({
    messaging_type: "RESPONSE",
    recipient: { id: "user_123" },
    message: { text: "Hello" },
  });
});

test("transport errors preserve retry and provider metadata", async () => {
  const transport = createInstagramTransport({
    ...credentials,
    instagramAccountId: "ig_123",
    fetch: async () =>
      new Response(JSON.stringify({ error: { message: "Busy", code: 2, fbtrace_id: "trace_1" } }), {
        status: 503,
        headers: { "retry-after": "4" },
      }),
  });

  await expect(
    transport.createMediaContainer({ imageUrl: "https://example.test/image.jpg" }),
  ).rejects.toBeInstanceOf(PlatformTransportError);
  try {
    await transport.createMediaContainer({ imageUrl: "https://example.test/image.jpg" });
  } catch (error) {
    expect(error).toMatchObject({
      provider: "instagram",
      operation: "instagram.create_media_container",
      httpStatus: 503,
      providerCode: 2,
      requestId: "trace_1",
      retryable: true,
      retryAfterSeconds: 4,
    });
  }
});
