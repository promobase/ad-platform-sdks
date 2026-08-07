import type { BlueskyApiClient } from "./api-client.ts";

export interface PostImage {
  bytes: Blob | Uint8Array;
  alt: string;
  aspectRatio?: { width: number; height: number };
}

export interface CreatePostOptions {
  /** The caller's handle or DID (the `repo` of the createRecord call). */
  repo: string;
  text: string;
  image?: PostImage;
  /** Reply to an existing post: `{ uri, cid }` from the post record. */
  replyTo?: { uri: string; cid: string };
  /** Self-labels, e.g. `["sexual"]`. */
  labels?: string[];
  /** ISO-8601 timestamp; defaults to now. */
  createdAt?: string;
}

export interface CreatePostResult {
  uri: string;
  cid: string;
}

const POST_COLLECTION = "app.bsky.feed.post";
const URL_PATTERN = /(https?:\/\/[^\s<]+[^\s<.,;:!?"')\]])/g;

/** Extract link facets from post text using UTF-8 byte offsets. */
function linkFacets(text: string): {
  index: { byteStart: number; byteEnd: number };
  features: { $type: string; uri: string }[];
}[] {
  const encoder = new TextEncoder();
  const facets: {
    index: { byteStart: number; byteEnd: number };
    features: { $type: string; uri: string }[];
  }[] = [];
  for (const match of text.matchAll(URL_PATTERN)) {
    const start = match.index ?? 0;
    const end = start + match[0].length;
    const bytesBefore = encoder.encode(text.slice(0, start)).length;
    const bytesEnd = bytesBefore + encoder.encode(match[0]).length;
    facets.push({
      index: { byteStart: bytesBefore, byteEnd: bytesEnd },
      features: [{ $type: "app.bsky.richtext.facet#link", uri: match[0] }],
    });
  }
  return facets;
}

/**
 * Create an `app.bsky.feed.post` record, uploading the image first if given
 * and attaching auto-detected link facets.
 */
export async function createPostRecord(
  api: BlueskyApiClient,
  options: CreatePostOptions,
): Promise<CreatePostResult> {
  const { repo, text, image, replyTo, labels, createdAt } = options;

  const record: Record<string, unknown> = {
    $type: POST_COLLECTION,
    text,
    createdAt: createdAt ?? new Date().toISOString(),
  };

  const facets = linkFacets(text);
  if (facets.length > 0) record.facets = facets;
  if (labels && labels.length > 0) {
    record.labels = {
      $type: "com.atproto.label.defs#selfLabels",
      values: labels.map((val) => ({ val })),
    };
  }
  if (replyTo) record.reply = { root: replyTo, parent: replyTo };

  if (image) {
    const uploaded = await api.uploadBlob<{ blob: { $link: string } }>(image.bytes, "image/*");
    record.embed = {
      $type: "app.bsky.embed.images",
      images: [
        {
          image: uploaded.blob,
          alt: image.alt,
          ...(image.aspectRatio ? { aspectRatio: image.aspectRatio } : {}),
        },
      ],
    };
  }

  const result = await api.post<{ uri: string; cid: string }>(
    "/xrpc/com.atproto.repo.createRecord",
    { repo, collection: POST_COLLECTION, record },
  );
  return result;
}
