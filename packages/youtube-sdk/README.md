# @mosaic/youtube

Type-safe TypeScript SDK for YouTube Data API v3 publishing, uploads, and channel workflows.

This package is generated from Google's official Discovery documents:

- Data API v3: `../../google-discovery/youtube-v3.json`
- Analytics API v2: `../../google-discovery/youtube-analytics-v2.json`
- Reporting API v1: `../../google-discovery/youtube-reporting-v1.json`

The generated catalog accounts for all 98 operations in the pinned snapshots:

- All 32 Data API resource groups, including Live Streaming resources
- Analytics targeted metric queries through `client.analytics`
- Bulk report jobs and downloads through `client.reporting`
- Discovery-driven generic resumable uploads for videos, captions, thumbnails, banners, and
  playlist images

## Generate

```bash
bun --filter='./packages/youtube-sdk' run codegen
bun --filter='./packages/youtube-sdk' run codegen:refresh
```

## Use

```ts
import { YouTube } from "@mosaic/youtube";

const youtube = YouTube.createClient({
  accessToken: process.env.YOUTUBE_ACCESS_TOKEN!,
});

const video = await youtube.uploads.uploadVideoResumable({
  params: { part: ["snippet", "status"] },
  metadata: {
    snippet: {
      title: "New launch",
      description: "Launch walkthrough",
      categoryId: "22",
    },
    status: { privacyStatus: "private" },
  },
  media: await fetch("https://cdn.example.com/video.mp4").then((res) => res.blob()),
  mediaType: "video/mp4",
});

console.log(video.id);
```

```ts
const metrics = await youtube.analytics.reportsQuery({
  ids: "channel==MINE",
  startDate: "2026-08-01",
  endDate: "2026-08-03",
  metrics: "views,likes,comments",
});
```
