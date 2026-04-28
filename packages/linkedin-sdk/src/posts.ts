import type { LinkedInClient } from "./client.ts";
import type {
  LinkedInDistribution,
  LinkedInImagePostParams,
  LinkedInMultiImagePostParams,
  LinkedInPost,
  LinkedInPostOptions,
  LinkedInPostResult,
  LinkedInTextPostParams,
  LinkedInVideoPostParams,
} from "./types.ts";

const DEFAULT_DISTRIBUTION: LinkedInDistribution = {
  feedDistribution: "MAIN_FEED",
  targetEntities: [],
  thirdPartyDistributionChannels: [],
};

export function createPosts(client: LinkedInClient) {
  return {
    async createText(params: LinkedInTextPostParams): Promise<LinkedInPostResult> {
      validateCommentary(params.commentary);
      return createPost(client, {
        ...basePostBody(params.authorUrn, params.commentary, params.options),
      });
    },

    async createImage(params: LinkedInImagePostParams): Promise<LinkedInPostResult> {
      validateCommentary(params.commentary);
      return createPost(client, {
        ...basePostBody(params.authorUrn, params.commentary, params.options),
        content: {
          media: {
            id: params.imageUrn,
            ...(params.options?.altText ? { altText: params.options.altText } : {}),
          },
        },
      });
    },

    async createMultiImage(params: LinkedInMultiImagePostParams): Promise<LinkedInPostResult> {
      validateCommentary(params.commentary);
      if (params.images.length < 2) {
        throw new Error("LinkedIn multi-image posts require at least 2 images");
      }
      if (params.images.length > 20) {
        throw new Error("LinkedIn multi-image posts support a maximum of 20 images");
      }

      return createPost(client, {
        ...basePostBody(params.authorUrn, params.commentary, params.options),
        content: {
          multiImage: {
            images: params.images.map((image) => ({
              id: image.urn,
              ...(image.altText ? { altText: image.altText } : {}),
            })),
          },
        },
      });
    },

    async createVideo(params: LinkedInVideoPostParams): Promise<LinkedInPostResult> {
      validateCommentary(params.commentary);
      return createPost(client, {
        ...basePostBody(params.authorUrn, params.commentary, params.options),
        content: {
          media: {
            id: params.videoUrn,
            ...(params.title ? { title: params.title } : {}),
          },
        },
      });
    },

    async createRaw(body: Record<string, unknown>): Promise<LinkedInPostResult> {
      return createPost(client, body);
    },

    async get(
      postUrn: string,
      opts?: { viewContext?: "AUTHOR" | "READER" },
    ): Promise<LinkedInPost> {
      const response = await client.request<LinkedInPost>(`/posts/${encodeURIComponent(postUrn)}`, {
        query: { viewContext: opts?.viewContext },
      });
      return response.data;
    },

    async delete(postUrn: string): Promise<void> {
      await client.request(`/posts/${encodeURIComponent(postUrn)}`, {
        method: "DELETE",
        headers: { "X-RestLi-Method": "DELETE" },
      });
    },

    async updateCommentary(postUrn: string, commentary: string): Promise<void> {
      validateCommentary(commentary);
      await client.request(`/posts/${encodeURIComponent(postUrn)}`, {
        method: "POST",
        headers: { "X-RestLi-Method": "PARTIAL_UPDATE" },
        body: {
          patch: {
            $set: {
              commentary: commentary.trim(),
            },
          },
        },
      });
    },
  };
}

function basePostBody(authorUrn: string, commentary: string, options?: LinkedInPostOptions) {
  return {
    author: authorUrn,
    commentary: commentary.trim(),
    visibility: options?.visibility ?? "PUBLIC",
    distribution: DEFAULT_DISTRIBUTION,
    lifecycleState: "PUBLISHED",
    ...(options?.isReshareDisabledByAuthor !== undefined
      ? { isReshareDisabledByAuthor: options.isReshareDisabledByAuthor }
      : {}),
    ...(options?.callToAction
      ? {
          contentCallToActionLabel: options.callToAction.label,
          contentLandingPage: options.callToAction.url,
        }
      : {}),
  };
}

async function createPost(
  client: LinkedInClient,
  body: Record<string, unknown>,
): Promise<LinkedInPostResult> {
  const response = await client.request<Record<string, unknown>>("/posts", {
    method: "POST",
    body,
  });
  const postUrn =
    response.headers.get("x-restli-id") ??
    response.headers.get("X-RestLi-Id") ??
    (typeof response.data.id === "string" ? response.data.id : undefined);

  if (!postUrn) {
    throw new Error("LinkedIn post was created but no X-RestLi-Id was returned");
  }

  return { postUrn, body: response.data };
}

function validateCommentary(commentary: string) {
  const trimmed = commentary.trim();
  if (!trimmed) {
    throw new Error("LinkedIn post commentary cannot be empty");
  }
  if (trimmed.length > 3000) {
    throw new Error("LinkedIn post commentary exceeds 3000 characters");
  }
}
