// @generated
// fingerprint: sha256:da0a3e722549d6426515b35a2ba07bf56575b2c379b017d40bb6045819795661
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { createEndpointClient, type EndpointClient, type EndpointClientConfig } from "@openpromo/sdk-runtime/effect";
import { endpointDescriptors } from "./endpoints.ts";

export { capabilities } from "./capabilities.ts";
export * from "./endpoints.ts";
export * from "./schemas.ts";

export function createEffectClient(
  config: EndpointClientConfig = {},
): EndpointClient<typeof endpointDescriptors> {
  return createEndpointClient(endpointDescriptors, config);
}
