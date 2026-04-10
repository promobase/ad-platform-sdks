import type { PublishResult } from "./types.ts";
import type { IGUserCreateMediaParams } from "../../generated/objects/ig-user.ts";
import type { ShadowIGMediaBuilderFields } from "../../generated/objects/shadow-ig-media-builder.ts";

type CreateClientReturn = ReturnType<typeof import("../../generated/index.ts").createClient>;
type IGUserNode = ReturnType<CreateClientReturn["iGUser"]>;

/** Container status as returned by the API. */
export type ContainerStatus = ShadowIGMediaBuilderFields["status_code"];

export type CreateContainerParams = IGUserCreateMediaParams;

export function createContainers(api: CreateClientReturn, igUser: IGUserNode) {
  return {
    /** Create a media container using the generated IGUser.media.create() endpoint. */
    async create(params: CreateContainerParams): Promise<{ id: string }> {
      const result = await igUser.media.create(params);
      return { id: (result as { id: string }).id };
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
      const result = await igUser.createMediaPublish({ creation_id: Number(containerId) });
      return { id: (result as { id: string }).id };
    },
  };
}
