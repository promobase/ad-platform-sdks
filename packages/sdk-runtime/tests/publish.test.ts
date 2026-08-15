import { expect, test } from "bun:test";

import {
  acceptedPublish,
  publishedPublish,
  PublishPhases,
  type PlatformPublishResult,
} from "../src/publish.ts";

test("publishing phases declare workflow-visible retry semantics", () => {
  expect(PublishPhases.initialize).toMatchObject({ effect: "write", idempotency: "keyed" });
  expect(PublishPhases.publish).toMatchObject({ effect: "publish", idempotency: "keyed" });
  expect(PublishPhases.status).toMatchObject({ effect: "read", idempotency: "safe" });
  expect(PublishPhases.reconcile).toMatchObject({ effect: "read", idempotency: "safe" });
});

test("publication helpers keep operation IDs separate from final post IDs", () => {
  const accepted: PlatformPublishResult<{ share_id: string }> = acceptedPublish(
    {
      platform: "tiktok",
      operationId: "publish-1",
      idempotencyKey: "content-1:tiktok:publish",
    },
    { share_id: "publish-1" },
  );
  expect(accepted).toMatchObject({ state: "accepted", operationId: "publish-1" });
  expect("postId" in accepted).toBe(false);

  const published = publishedPublish({
    platform: "instagram",
    operationId: "container-1",
    postId: "media-1",
    permalinkUrl: "https://instagram.example/media-1",
    raw: { id: "media-1" },
  });
  expect(published).toMatchObject({
    state: "published",
    operationId: "container-1",
    postId: "media-1",
  });
  expect(JSON.parse(JSON.stringify(published))).toEqual(published);
});
