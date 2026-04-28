# @promobase/youtube-sdk

Type-safe TypeScript SDK for YouTube Data API v3 publishing, uploads, and channel workflows.

This package is generated from Google's official Discovery document:

- Source URL: https://youtube.googleapis.com/$discovery/rest?version=v3
- Snapshot: `../../google-discovery/youtube-v3.json`
- Revision: `20260427`

The generated surface currently covers the OpenPromo migration path:

- Videos: list, insert, update, delete, rate, rating, report abuse
- Uploads: Web-standard resumable video upload helper
- Channels, playlists, playlist items
- Comments and comment threads
- Captions, thumbnails, and search

## Generate

```bash
bun --filter='./packages/youtube-sdk' run codegen
```

## Use

```ts
import { YouTube } from "@promobase/youtube-sdk";

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
