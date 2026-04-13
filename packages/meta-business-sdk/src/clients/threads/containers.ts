import type { ApiClient } from "@promobase/sdk-runtime";
import type {
  PublishResult,
  ThreadsContainerStatus,
  ThreadsMediaType,
  ThreadsReplyControl,
} from "./types.ts";

export interface CreateContainerParams {
  mediaType: ThreadsMediaType;
  text?: string;
  imageUrl?: string;
  videoUrl?: string;
  isCarouselItem?: boolean;
  children?: string[];
  replyToId?: string;
  replyControl?: ThreadsReplyControl;
  allowlistedCountryCodes?: string[];
}

export function createContainers(client: ApiClient, threadsUserId: string) {
  return {
    async create(params: CreateContainerParams): Promise<{ id: string }> {
      const body: Record<string, unknown> = { media_type: params.mediaType };
      if (params.text) body.text = params.text;
      if (params.imageUrl) body.image_url = params.imageUrl;
      if (params.videoUrl) body.video_url = params.videoUrl;
      if (params.isCarouselItem) body.is_carousel_item = "true";
      if (params.children) body.children = params.children.join(",");
      if (params.replyToId) body.reply_to_id = params.replyToId;
      if (params.replyControl) body.reply_control = params.replyControl;
      if (params.allowlistedCountryCodes)
        body.allowlisted_country_codes = JSON.stringify(params.allowlistedCountryCodes);
      return client.post<{ id: string }>(`${threadsUserId}/threads`, body);
    },

    async getStatus(
      containerId: string,
    ): Promise<{ status: ThreadsContainerStatus; errorMessage?: string }> {
      const result = await client.get<{ status: ThreadsContainerStatus; error_message?: string }>(
        containerId,
        { fields: ["status", "error_message"] },
      );
      return { status: result.status, errorMessage: result.error_message };
    },

    async publish(containerId: string): Promise<PublishResult> {
      return client.post<PublishResult>(`${threadsUserId}/threads_publish`, {
        creation_id: containerId,
      });
    },
  };
}
