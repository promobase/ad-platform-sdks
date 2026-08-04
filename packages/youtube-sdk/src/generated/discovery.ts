// This file was generated from google-discovery/youtube-v3.json.
// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.

export const YOUTUBE_DISCOVERY = {
  "id": "youtube:v3",
  "revision": "20260729",
  "discoveryVersion": "v1",
  "protocol": "rest",
  "baseUrl": "https://youtube.googleapis.com/",
  "rootUrl": "https://youtube.googleapis.com/",
  "servicePath": "",
  "source": "https://youtube.googleapis.com/$discovery/rest?version=v3"
} as const;

export const YOUTUBE_MEDIA_UPLOADS = [
  {
    "operationId": "youtube.captions.insert",
    "accept": [
      "text/xml",
      "application/octet-stream",
      "*/*"
    ],
    "maxSize": "104857600",
    "protocols": {
      "simple": {
        "multipart": true,
        "path": "/upload/youtube/v3/captions"
      },
      "resumable": {
        "path": "/resumable/upload/youtube/v3/captions",
        "multipart": true
      }
    }
  },
  {
    "operationId": "youtube.captions.update",
    "accept": [
      "text/xml",
      "application/octet-stream",
      "*/*"
    ],
    "maxSize": "104857600",
    "protocols": {
      "simple": {
        "path": "/upload/youtube/v3/captions",
        "multipart": true
      },
      "resumable": {
        "multipart": true,
        "path": "/resumable/upload/youtube/v3/captions"
      }
    }
  },
  {
    "operationId": "youtube.channelBanners.insert",
    "accept": [
      "image/jpeg",
      "image/png",
      "application/octet-stream"
    ],
    "maxSize": "6291456",
    "protocols": {
      "simple": {
        "path": "/upload/youtube/v3/channelBanners/insert",
        "multipart": true
      },
      "resumable": {
        "multipart": true,
        "path": "/resumable/upload/youtube/v3/channelBanners/insert"
      }
    }
  },
  {
    "operationId": "youtube.playlistImages.insert",
    "accept": [
      "image/jpeg",
      "image/png",
      "application/octet-stream"
    ],
    "maxSize": "52428800",
    "protocols": {
      "simple": {
        "multipart": true,
        "path": "/upload/youtube/v3/playlistImages"
      },
      "resumable": {
        "path": "/resumable/upload/youtube/v3/playlistImages",
        "multipart": true
      }
    }
  },
  {
    "operationId": "youtube.playlistImages.update",
    "accept": [
      "image/jpeg",
      "image/png",
      "application/octet-stream"
    ],
    "maxSize": "52428800",
    "protocols": {
      "resumable": {
        "multipart": true,
        "path": "/resumable/upload/youtube/v3/playlistImages"
      },
      "simple": {
        "multipart": true,
        "path": "/upload/youtube/v3/playlistImages"
      }
    }
  },
  {
    "operationId": "youtube.thumbnails.set",
    "accept": [
      "image/jpeg",
      "image/png",
      "application/octet-stream"
    ],
    "maxSize": "52428800",
    "protocols": {
      "simple": {
        "multipart": true,
        "path": "/upload/youtube/v3/thumbnails/set"
      },
      "resumable": {
        "multipart": true,
        "path": "/resumable/upload/youtube/v3/thumbnails/set"
      }
    }
  },
  {
    "operationId": "youtube.videos.insert",
    "accept": [
      "video/*",
      "application/octet-stream"
    ],
    "maxSize": "274877906944",
    "protocols": {
      "resumable": {
        "multipart": true,
        "path": "/resumable/upload/youtube/v3/videos"
      },
      "simple": {
        "multipart": true,
        "path": "/upload/youtube/v3/videos"
      }
    }
  },
  {
    "operationId": "youtube.watermarks.set",
    "accept": [
      "image/jpeg",
      "image/png",
      "application/octet-stream"
    ],
    "maxSize": "10485760",
    "protocols": {
      "simple": {
        "path": "/upload/youtube/v3/watermarks/set",
        "multipart": true
      },
      "resumable": {
        "path": "/resumable/upload/youtube/v3/watermarks/set",
        "multipart": true
      }
    }
  }
] as const;
