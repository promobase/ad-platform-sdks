// This file is generated. Do not edit by hand.
import { createEndpointClient, type EndpointClient, type EndpointClientConfig } from "@mosaic/sdk-runtime/effect";
import { endpointDescriptors } from "./endpoints.ts";

export { capabilities } from "./capabilities.ts";
export * from "./endpoints.ts";
export * from "./schemas.ts";

export function createEffectClient(
  config: EndpointClientConfig = {},
): EndpointClient<typeof endpointDescriptors> {
  return createEndpointClient(endpointDescriptors, config);
}
