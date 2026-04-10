import type { ApiClient } from "@promobase/sdk-runtime";
import type { PublishStoryOptions, PublishResult, PollingConfig } from "./types.ts";
import { createContainers } from "./containers.ts";
import { waitForContainer } from "./polling.ts";

export function createStories(client: ApiClient, igAccountId: string, pollingConfig: PollingConfig) {
  const containers = createContainers(client, igAccountId);

  return {
    async publish(opts: PublishStoryOptions): Promise<PublishResult> {
      if (!opts.imageUrl && !opts.videoUrl) {
        throw new Error("Story requires either imageUrl or videoUrl");
      }

      const isVideo = !!opts.videoUrl;
      const container = await containers.create({
        imageUrl: opts.imageUrl,
        videoUrl: opts.videoUrl,
        mediaType: "STORIES",
      });

      await waitForContainer({
        containerId: container.id,
        isVideo,
        polling: pollingConfig,
        getStatus: containers.getStatus,
        label: "story",
      });

      return containers.publish(container.id);
    },
  };
}
