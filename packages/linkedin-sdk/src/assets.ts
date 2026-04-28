import type { LinkedInClient } from "./client.ts";
import { LinkedInUploadError } from "./errors.ts";
import type {
  LinkedInImageUploadSession,
  LinkedInUrn,
  LinkedInVideoUploadInstruction,
  LinkedInVideoUploadSession,
} from "./types.ts";

type UploadBody = Blob | ArrayBuffer | Uint8Array | ReadableStream<Uint8Array>;

export function createAssets(client: LinkedInClient) {
  return {
    async initializeImageUpload(ownerUrn: LinkedInUrn): Promise<LinkedInImageUploadSession> {
      const response = await client.request<{
        value?: { uploadUrl?: string; image?: string; uploadUrlExpiresAt?: number };
      }>("/images", {
        method: "POST",
        query: { action: "initializeUpload" },
        body: {
          initializeUploadRequest: {
            owner: ownerUrn,
          },
        },
      });

      const value = response.data.value;
      if (!value?.uploadUrl || !value.image) {
        throw new Error("LinkedIn image upload initialization did not return uploadUrl and image");
      }

      return {
        uploadUrl: value.uploadUrl,
        imageUrn: value.image,
        uploadUrlExpiresAt: value.uploadUrlExpiresAt,
      };
    },

    async uploadImage(
      uploadUrl: string,
      body: UploadBody,
      opts?: { contentType?: string; includeAuthorization?: boolean },
    ): Promise<void> {
      await uploadToUrl(client, uploadUrl, body, {
        contentType: opts?.contentType ?? resolveBodyContentType(body) ?? "image/jpeg",
        includeAuthorization: opts?.includeAuthorization ?? true,
      });
    },

    async uploadImageFromUrl(
      ownerUrn: LinkedInUrn,
      imageUrl: string,
      opts?: { contentType?: string; includeAuthorization?: boolean },
    ): Promise<LinkedInUrn> {
      const session = await this.initializeImageUpload(ownerUrn);
      const image = await fetchRemoteAsset(client, imageUrl);
      await this.uploadImage(session.uploadUrl, image.body, {
        contentType: opts?.contentType ?? image.contentType ?? undefined,
        includeAuthorization: opts?.includeAuthorization,
      });
      return session.imageUrn;
    },

    async initializeVideoUpload(
      ownerUrn: LinkedInUrn,
      fileSizeBytes: number,
      opts?: { uploadCaptions?: boolean; uploadThumbnail?: boolean },
    ): Promise<LinkedInVideoUploadSession> {
      const response = await client.request<{
        value?: {
          video?: string;
          uploadInstructions?: LinkedInVideoUploadInstruction[];
          uploadToken?: string;
          uploadUrlsExpireAt?: number;
        };
      }>("/videos", {
        method: "POST",
        query: { action: "initializeUpload" },
        body: {
          initializeUploadRequest: {
            owner: ownerUrn,
            fileSizeBytes,
            uploadCaptions: opts?.uploadCaptions ?? false,
            uploadThumbnail: opts?.uploadThumbnail ?? false,
          },
        },
      });

      const value = response.data.value;
      if (!value?.video || !value.uploadInstructions?.length) {
        throw new Error("LinkedIn video upload initialization did not return upload instructions");
      }

      return {
        videoUrn: value.video,
        uploadInstructions: value.uploadInstructions,
        uploadToken: value.uploadToken,
        uploadUrlsExpireAt: value.uploadUrlsExpireAt,
      };
    },

    async uploadVideoChunks(
      instructions: LinkedInVideoUploadInstruction[],
      body: ArrayBuffer,
    ): Promise<string[]> {
      const etags: string[] = [];

      for (const instruction of instructions) {
        const chunk = body.slice(instruction.firstByte, instruction.lastByte + 1);
        const response = await uploadToUrl(client, instruction.uploadUrl, chunk, {
          contentType: "application/octet-stream",
          includeAuthorization: false,
        });
        const etag = response.headers.get("etag");
        if (etag) etags.push(etag);
      }

      return etags;
    },

    async finalizeVideoUpload(
      videoUrn: LinkedInUrn,
      uploadedPartIds: string[],
      uploadToken?: string,
    ): Promise<void> {
      await client.request("/videos", {
        method: "POST",
        query: { action: "finalizeUpload" },
        body: {
          finalizeUploadRequest: {
            video: videoUrn,
            uploadToken: uploadToken ?? "",
            uploadedPartIds,
          },
        },
      });
    },

    async uploadVideoFromUrl(ownerUrn: LinkedInUrn, videoUrl: string): Promise<LinkedInUrn> {
      const video = await fetchRemoteAsset(client, videoUrl);
      const buffer = await toArrayBuffer(video.body);
      const session = await this.initializeVideoUpload(ownerUrn, buffer.byteLength);
      const uploadedPartIds = await this.uploadVideoChunks(session.uploadInstructions, buffer);
      await this.finalizeVideoUpload(session.videoUrn, uploadedPartIds, session.uploadToken);
      return session.videoUrn;
    },
  };
}

async function uploadToUrl(
  client: LinkedInClient,
  uploadUrl: string,
  body: UploadBody,
  opts: { contentType: string; includeAuthorization: boolean },
): Promise<Response> {
  const headers: Record<string, string> = {
    "Content-Type": opts.contentType,
  };
  if (opts.includeAuthorization) {
    headers.Authorization = `Bearer ${client.accessToken}`;
  }

  const response = await client.fetchRaw(uploadUrl, {
    method: "PUT",
    headers,
    body: body as RequestInit["body"],
  });

  if (!response.ok) {
    const text = await response.text();
    throw new LinkedInUploadError(
      `LinkedIn upload failed with ${response.status}`,
      response.status,
      text,
    );
  }

  return response;
}

async function fetchRemoteAsset(
  client: LinkedInClient,
  url: string,
): Promise<{ body: Blob; contentType?: string }> {
  const response = await client.fetchRaw(url);
  if (!response.ok) {
    const text = await response.text();
    throw new LinkedInUploadError(`Failed to fetch remote asset ${url}`, response.status, text);
  }
  return {
    body: await response.blob(),
    contentType: response.headers.get("content-type") ?? undefined,
  };
}

function resolveBodyContentType(body: UploadBody): string | undefined {
  return typeof Blob !== "undefined" && body instanceof Blob && body.type ? body.type : undefined;
}

async function toArrayBuffer(body: UploadBody): Promise<ArrayBuffer> {
  if (body instanceof ArrayBuffer) return body;
  if (body instanceof Uint8Array) {
    const arrayBuffer = new ArrayBuffer(body.byteLength);
    const copy = new Uint8Array(arrayBuffer);
    copy.set(body);
    return arrayBuffer;
  }
  if (typeof Blob !== "undefined" && body instanceof Blob) {
    return body.arrayBuffer();
  }
  return new Response(body as RequestInit["body"]).arrayBuffer();
}
