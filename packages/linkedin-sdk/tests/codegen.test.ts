import { expect, test } from "bun:test";

import { normalizeCollection } from "../scripts/postman.ts";
import { createEffectClient, endpointDescriptors } from "../src/generated/effect/index.ts";
import {
  createLinkedInGeneratedClient,
  LINKEDIN_POSTMAN_EXCLUDED_REQUEST_COUNT,
  LINKEDIN_POSTMAN_REQUEST_COUNT,
  LINKEDIN_POSTMAN_SOURCE_COUNT,
  linkedinOperations,
} from "../src/generated/rest/index.ts";
import { LinkedInClient } from "../src/index.ts";

test("normalizes Postman folders, templates, and Rest.li headers", () => {
  const operations = normalizeCollection(
    { name: "Campaign Management", uid: "1-test", access: "marketing" },
    {
      info: { name: "Campaign Management" },
      item: [
        {
          name: "Campaigns",
          item: [
            {
              name: "Batch update campaigns",
              id: "request-id",
              request: {
                method: "POST",
                header: [{ key: "X-RestLi-Method", value: "BATCH_UPDATE" }],
                body: { mode: "raw" },
                url: "{{baseUrl}}/adCampaigns?ids=List({{campaign_id}})",
              },
            },
          ],
        },
      ],
    },
  );

  expect(operations).toHaveLength(1);
  expect(operations[0]).toMatchObject({
    name: "Batch update campaigns",
    folder: ["Campaigns"],
    method: "POST",
    url: "/adCampaigns?ids=List({campaign_id})",
    variables: ["campaign_id"],
    hasBody: true,
    restliMethod: "BATCH_UPDATE",
  });
});

test("generated catalog covers every official public collection", () => {
  expect(LINKEDIN_POSTMAN_SOURCE_COUNT).toBe(11);
  expect(LINKEDIN_POSTMAN_REQUEST_COUNT).toBeGreaterThanOrEqual(280);
  expect(LINKEDIN_POSTMAN_EXCLUDED_REQUEST_COUNT).toBe(1);
  expect(linkedinOperations.length).toBe(LINKEDIN_POSTMAN_REQUEST_COUNT);
  expect(new Set(linkedinOperations.map((operation) => operation.collection)).size).toBe(11);
});

test("generated client resolves templates and fixed Rest.li method headers", async () => {
  let call: { url: string; init?: RequestInit } | undefined;
  const client = new LinkedInClient({
    accessToken: "token",
    fetch: (async (input: RequestInfo | URL, init?: RequestInit) => {
      call = { url: String(input), init };
      return new Response(JSON.stringify({ elements: [] }), {
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch,
  });
  const generated = createLinkedInGeneratedClient(client);
  const operation = generated.operations.find(
    (candidate) => "restliMethod" in candidate && candidate.variables.length > 0,
  );
  expect(operation).toBeDefined();

  await generated.invoke(operation!.id, {
    variables: Object.fromEntries(operation!.variables.map((name) => [name, 42])),
    body: operation!.hasBody ? { elements: [] } : undefined,
  });

  expect(call?.url).not.toContain("{");
  const requestHeaders = call?.init?.headers as Record<string, string> | undefined;
  expect(requestHeaders?.["X-RestLi-Method"]).toBe(
    "restliMethod" in operation! ? operation.restliMethod : undefined,
  );
});

test("generated client makes missing template inputs explicit", () => {
  const generated = createLinkedInGeneratedClient(new LinkedInClient({ accessToken: "token" }));
  const operation = generated.operations.find((candidate) => candidate.variables.length > 0)!;
  expect(() => generated.invoke(operation.id)).toThrow("Missing LinkedIn operation variables");
});

test("generated client supports provider upload URLs and raw bodies", async () => {
  let call: { url: string; body?: BodyInit | null } | undefined;
  const generated = createLinkedInGeneratedClient(
    new LinkedInClient({
      accessToken: "token",
      fetch: (async (input: RequestInfo | URL, init?: RequestInit) => {
        call = { url: String(input), body: init?.body };
        return new Response(null, { status: 200 });
      }) as unknown as typeof fetch,
    }),
  );
  const operation = generated.operations.find((candidate) => candidate.url === "/{upload_url}")!;
  const bytes = new Uint8Array([1, 2, 3]);

  await generated.invoke(operation.id, {
    variables: { upload_url: "https://uploads.linkedin.example/image" },
    rawBody: bytes.buffer,
  });

  expect(call?.url).toBe("https://uploads.linkedin.example/image");
  expect(call?.body).toBe(bytes.buffer);
});

test("generated Effect client applies LinkedIn runtime defaults", async () => {
  let call: { url: string; headers?: HeadersInit } | undefined;
  const client = createEffectClient({
    accessToken: "token",
    fetch: (async (input: RequestInfo | URL, init?: RequestInit) => {
      call = { url: String(input), headers: init?.headers };
      return new Response(JSON.stringify({ elements: [] }), {
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch,
  });
  const descriptor = endpointDescriptors.find(
    (candidate) => candidate.method === "GET" && candidate.parameters.length === 0,
  )!;

  await client.promise(descriptor, {});
  await client.dispose();

  const headers = call?.headers as Record<string, string> | undefined;
  expect(call?.url).toStartWith("https://api.linkedin.com/rest/");
  expect(headers?.Authorization).toBe("Bearer token");
  expect(headers?.["LinkedIn-Version"]).toBe("202607");
});
