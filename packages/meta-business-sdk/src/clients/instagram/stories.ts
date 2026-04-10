import type { PublishStoryOptions, PublishResult, PollingConfig } from "./types.ts";
import type { createContainers } from "./containers.ts";
import { waitForContainer } from "./polling.ts";

type Containers = ReturnType<typeof createContainers>;

export function createStories(containers: Containers, pollingConfig: PollingConfig) {
  return {
    /** Publish a story (photo or video). Stories expire after 24 hours. */
    async publish(opts: PublishStoryOptions): Promise<PublishResult> {
      if (!opts.imageUrl && !opts.videoUrl) {
        throw new Error("Story requires either imageUrl or videoUrl");
      }

      const isVideo = !!opts.videoUrl;
      const container = await containers.create({
        image_url: opts.imageUrl,
        video_url: opts.videoUrl,
        media_type: "STORIES",
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
