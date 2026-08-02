import { expect, test } from "bun:test";

import { GoogleBusinessProfile, LinkedIn, Meta, TikTok, X, YouTube } from "../src/index.ts";
import { createAdPlatforms } from "../src/operations/index.ts";

const rejectingFetch = (async () => {
  throw new Error("OpenPromo contract tests must not call provider APIs");
}) as unknown as typeof fetch;

test("exposes the complete OpenPromo first-party provider surface", () => {
  const metaApi = Meta.createClient({ accessToken: "meta", fetch: rejectingFetch });
  const facebook = Meta.Facebook.createClient({
    api: metaApi,
    pageId: "page",
    accessToken: "page-token",
    fetch: rejectingFetch,
  });
  const instagram = Meta.Instagram.createClient({
    api: metaApi,
    igAccountId: "instagram",
    fetch: rejectingFetch,
  });
  const threads = Meta.Threads.createClient({
    accessToken: "threads",
    threadsUserId: "threads-user",
    fetch: rejectingFetch,
  });
  const tiktok = TikTok.createClient({
    accessToken: "tiktok",
    businessId: "business",
    fetch: rejectingFetch,
  });
  const tiktokDeveloper = TikTok.Developer.createClient({
    accessToken: "developer",
    fetch: rejectingFetch,
  });
  const linkedin = LinkedIn.createClient({ accessToken: "linkedin", fetch: rejectingFetch });
  const x = X.createClient({ token: "x", fetch: rejectingFetch });
  const youtube = YouTube.createClient({ accessToken: "youtube", fetch: rejectingFetch });
  const googleBusinessProfile = GoogleBusinessProfile.createClient({
    accessToken: "google",
    fetch: rejectingFetch,
  });

  expect(facebook.webhooks.unsubscribe).toBeFunction();
  expect(instagram.webhooks.unsubscribe).toBeFunction();
  expect(threads.posts.getInsights).toBeFunction();
  expect(tiktok.videos.list).toBeFunction();
  expect(tiktokDeveloper.videos.query).toBeFunction();
  expect(tiktokDeveloper.publish.getStatus).toBeFunction();
  expect(linkedin.posts.listByAuthor).toBeFunction();
  expect(linkedin.analytics.getSocialMetadata).toBeFunction();
  expect(x.directMessages.sendToParticipant).toBeFunction();
  expect(youtube.resources.videos.batchGetStats).toBeFunction();
  expect(googleBusinessProfile.resources.localPosts.reportInsights).toBeFunction();
  expect(
    googleBusinessProfile.resources.performance.fetchMultiDailyMetricsTimeSeries,
  ).toBeFunction();

  expect(Meta.Facebook.OAuth).toBeDefined();
  expect(Meta.Instagram.OAuth).toBeDefined();
  expect(TikTok.Developer.OAuth).toBeFunction();
  expect(X.OAuth).toBeFunction();
  expect(YouTube.OAuth).toBeFunction();
  expect(GoogleBusinessProfile.OAuth).toBeFunction();

  const platforms = createAdPlatforms({
    connections: {
      facebook: { api: metaApi },
      instagram,
      threads,
      tiktok,
      tiktokDeveloper,
      linkedin,
      x,
      youtube,
      googleBusinessProfile,
    },
  });

  expect(platforms.instagram.posts.getMetrics).toBeFunction();
  expect(platforms.instagram.posts.getMetricsMany).toBeFunction();
  expect(platforms.googleBusinessProfile.posts.getMetricsMany).toBeFunction();
  expect(platforms.tiktokDeveloper.posts.getMetricsMany).toBeFunction();
  expect(platforms.operations.list().length).toBeGreaterThanOrEqual(9);
});
