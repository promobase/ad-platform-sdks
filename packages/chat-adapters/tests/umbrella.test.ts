import { expect, test } from "bun:test";

import {
  createFacebookCommentsAdapter,
  createInstagramAdapter,
  createMessengerAdapter,
  createTikTokCommentsAdapter,
  createTikTokMessagingAdapter,
} from "../src/index.ts";

const common = {
  appSecret: "test-secret",
  accessToken: "test-token",
  persistThreadHistory: false,
};

test("umbrella exports all first-party adapter factories", () => {
  const messenger = createMessengerAdapter({
    ...common,
    verifyToken: "verify",
    pageId: "page-1",
    adapterName: "workspace-1:facebook:dm",
  });
  const facebookComments = createFacebookCommentsAdapter({
    ...common,
    verifyToken: "verify",
    pageId: "page-1",
    adapterName: "workspace-1:facebook:comments",
  });
  const instagram = createInstagramAdapter({
    ...common,
    verifyToken: "verify",
    accountId: "instagram-1",
    adapterName: "workspace-1:instagram:dm",
  });
  const tiktok = createTikTokMessagingAdapter({
    ...common,
    businessId: "tiktok-1",
    adapterName: "workspace-1:tiktok:dm",
  });
  const tiktokComments = createTikTokCommentsAdapter({
    ...common,
    businessId: "tiktok-1",
    adapterName: "workspace-1:tiktok:comments",
  });

  expect(
    [messenger, facebookComments, instagram, tiktok, tiktokComments].map((adapter) => [
      adapter.name,
      adapter.persistThreadHistory,
    ]),
  ).toEqual([
    ["workspace-1:facebook:dm", false],
    ["workspace-1:facebook:comments", false],
    ["workspace-1:instagram:dm", false],
    ["workspace-1:tiktok:dm", false],
    ["workspace-1:tiktok:comments", false],
  ]);
});
