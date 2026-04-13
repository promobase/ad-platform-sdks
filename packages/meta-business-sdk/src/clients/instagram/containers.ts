import type { ContentPublishingLimitResponseFields } from "../../generated/objects/content-publishing-limit-response.ts";
import type { IGUserCreateMediaParams } from "../../generated/objects/ig-user.ts";
import type { ShadowIGMediaBuilderFields } from "../../generated/objects/shadow-ig-media-builder.ts";
import type { PublishResult } from "./types.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type IGUserNode = ReturnType<CreateClientReturn["iGUser"]>;

/** Container status as returned by the API. */
export type ContainerStatus = ShadowIGMediaBuilderFields["status_code"];

export type CreateContainerParams = IGUserCreateMediaParams;

export interface ResumableUploadOptions {
  /** The container ID returned from create() with upload_type: "resumable" */
  containerId: string;
  /** Access token */
  accessToken: string;
  /** API version (e.g., "v25.0") */
  apiVersion?: string;
  /** Upload from a public URL */
  fileUrl?: string;
  /** Upload from a local file as Blob/ArrayBuffer */
  fileData?: Blob | ArrayBuffer;
  /** File size in bytes (required for fileData uploads) */
  fileSize?: number;
}

export function createContainers(api: CreateClientReturn, igUser: IGUserNode) {
  return {
    /** Create a media container using the generated IGUser.media.create() endpoint. */
    async create(params: CreateContainerParams): Promise<{ id: string }> {
      const result = await igUser.media.create(params);
      return { id: (result as { id: string }).id };
    },

    /**
     * Create a resumable upload container for large videos.
     * After creating, call uploadResumable() to upload the video, then poll and publish.
     */
    async createResumable(
      params: Omit<CreateContainerParams, "upload_type">,
    ): Promise<{ id: string }> {
      const result = await igUser.media.create({ ...params, upload_type: "resumable" });
      return { id: (result as { id: string }).id };
    },

    /**
     * Upload video to a resumable upload container.
     * Uses rupload.facebook.com (different host from the Graph API).
     */
    async uploadResumable(opts: ResumableUploadOptions): Promise<{ success: boolean }> {
      const version = opts.apiVersion ?? "v25.0";
      const url = `https://rupload.facebook.com/ig-api-upload/${version}/${opts.containerId}`;

      const headers: Record<string, string> = {
        Authorization: `OAuth ${opts.accessToken}`,
      };

      let body: Blob | ArrayBuffer | undefined;

      if (opts.fileUrl) {
        // Upload from a public URL
        headers.file_url = opts.fileUrl;
      } else if (opts.fileData) {
        // Upload from local file data
        headers.offset = "0";
        headers.file_size = String(
          opts.fileSize ??
            (opts.fileData instanceof Blob ? opts.fileData.size : opts.fileData.byteLength),
        );
        body = opts.fileData;
      } else {
        throw new Error("Either fileUrl or fileData must be provided for resumable upload");
      }

      const response = await fetch(url, {
        method: "POST",
        headers,
        body,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(`Resumable upload failed: ${JSON.stringify(error)}`);
      }

      return response.json() as Promise<{ success: boolean }>;
    },

    /** Check container processing status using the generated ShadowIGMediaBuilder node. */
    async getStatus(containerId: string): Promise<string> {
      const result = await api.shadowIGMediaBuilder(containerId).get({
        fields: ["status_code"],
      });
      return result.status_code;
    },

    /** Publish a finished container using the generated IGUser.createMediaPublish() endpoint. */
    async publish(containerId: string): Promise<PublishResult> {
      // creation_id is typed as number in the spec but container IDs are large integers
      // that would lose precision with Number(). Pass as-is since the HTTP layer
      // serializes to string in URL-encoded form anyway.
      const result = await igUser.createMediaPublish({
        creation_id: containerId as unknown as number,
      });
      return { id: (result as { id: string }).id };
    },

    /**
     * Check the account's current publishing rate limit usage.
     * Instagram accounts are limited to 100 API-published posts per 24-hour period.
     */
    async getPublishingLimit() {
      return igUser
        .contentPublishingLimit({
          fields: ["config", "quota_usage"] as (keyof ContentPublishingLimitResponseFields)[],
        })
        .toArray();
    },
  };
}
