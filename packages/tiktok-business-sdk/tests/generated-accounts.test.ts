import { expect, test } from "bun:test";

import { createAccounts } from "../src/generated/index.ts";
import type {
  BusinessVideoListParams,
  BusinessVideoListResponse,
} from "../src/generated/types/accounts.ts";

test("generated Accounts client requests and returns post metrics", async () => {
  let requestUrl = "";
  let requestInit: RequestInit | undefined;
  const fetchMock = (async (input: Parameters<typeof fetch>[0], init?: RequestInit) => {
    requestUrl = String(input);
    requestInit = init;
    return Response.json({
      code: 0,
      message: "OK",
      request_id: "request-1",
      data: {
        videos: [
          {
            item_id: "video-1",
            likes: 12,
            comments: 3,
            shares: 2,
            reach: 90,
            video_views: 100,
            average_time_watched: 4.5,
          },
        ],
        has_more: false,
      } satisfies BusinessVideoListResponse,
    });
  }) as unknown as typeof fetch;

  const accounts = createAccounts({ accessToken: "token", fetch: fetchMock });
  const params: BusinessVideoListParams = {
    business_id: "business-1",
    fields: ["likes", "comments", "shares", "reach", "video_views"],
    filters: { video_ids: ["video-1"] },
  };
  const result = await accounts.listVideo(params);

  const url = new URL(requestUrl);
  expect(url.pathname).toBe("/open_api/v1.3/business/video/list/");
  expect(url.searchParams.get("business_id")).toBe("business-1");
  expect(url.searchParams.get("fields")).toBe(
    JSON.stringify(["likes", "comments", "shares", "reach", "video_views"]),
  );
  expect(url.searchParams.get("filters")).toBe(JSON.stringify({ video_ids: ["video-1"] }));
  const headers = requestInit?.headers as Record<string, string> | undefined;
  expect(headers?.["Access-Token"]).toBe("token");
  expect(result.videos?.[0]?.video_views).toBe(100);
  expect(result.videos?.[0]?.average_time_watched).toBe(4.5);
});

test("generated Accounts client exposes profile metrics without advertiser id", async () => {
  const fetchMock = (async () =>
    Response.json({
      code: 0,
      message: "OK",
      request_id: "request-2",
      data: { followers_count: 20, profile_views: 5 },
    })) as unknown as typeof fetch;

  const accounts = createAccounts({ accessToken: "token", fetch: fetchMock });
  const result = await accounts.getBusiness({
    business_id: "business-1",
    fields: ["followers_count", "profile_views"],
  });

  expect(result.followers_count).toBe(20);
});
