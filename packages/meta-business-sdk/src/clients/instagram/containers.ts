import type { ApiClient } from "@promobase/sdk-runtime";
import type { MediaType, ContainerStatus, PublishResult } from "./types.ts";

export interface CreateContainerParams {
  caption?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaType?: MediaType;
  isCarouselItem?: boolean;
  children?: string[];  // container IDs for carousel parent
  collaborators?: string[];
  shareToFeed?: boolean;
}

export function createContainers(client: ApiClient, igAccountId: string) {
  return {
    async create(params: CreateContainerParams): Promise<{ id: string }> {
      const body: Record<string, unknown> = {};
      if (params.caption) body.caption = params.caption;
      if (params.imageUrl) body.image_url = params.imageUrl;
      if (params.videoUrl) body.video_url = params.videoUrl;
      if (params.mediaType) body.media_type = params.mediaType;
      if (params.isCarouselItem) body.is_carousel_item = "true";
      if (params.children) body.children = params.children.join(",");
      if (params.collaborators?.length) body.collaborators = params.collaborators.map(c => c.replace(/^@/, "")).join(",");
      if (params.shareToFeed !== undefined) body.share_to_feed = String(params.shareToFeed);
      return client.post<{ id: string }>(`${igAccountId}/media`, body);
    },

    async getStatus(containerId: string): Promise<ContainerStatus> {
      const result = await client.get<{ status_code: ContainerStatus }>(containerId, {
        fields: ["status_code"],
      });
      return result.status_code;
    },

    async publish(containerId: string): Promise<PublishResult> {
      return client.post<PublishResult>(`${igAccountId}/media_publish`, {
        creation_id: containerId,
      });
    },
  };
}
