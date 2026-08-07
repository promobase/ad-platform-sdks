// This file is generated. Do not edit by hand.
import { createEndpointClient, type AnyEndpointDescriptor, type EndpointClient, type EndpointClientConfig } from "@mosaic/sdk-runtime/effect";
import { endpointDescriptors } from "./endpoints.ts";

export { capabilities } from "./capabilities.ts";
export * from "./endpoints.ts";
export * from "./schemas.ts";

export interface LinkedInEffectClientConfig extends EndpointClientConfig {
  readonly accessToken?: string;
  readonly apiVersion?: string;
}

export function createEffectClient(
  config: LinkedInEffectClientConfig = {},
): EndpointClient<typeof endpointDescriptors> {
  const { accessToken, apiVersion = "202607", ...runtime } = config;
  return createEndpointClient(endpointDescriptors, {
    ...runtime,
    baseUrl: runtime.baseUrl ?? "https://api.linkedin.com/rest/",
    headers: (descriptor) => ({
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      "LinkedIn-Version": apiVersion,
      "X-Restli-Protocol-Version": "2.0.0",
      ...resolveHeaders(runtime.headers, descriptor),
    }),
  });
}

function resolveHeaders(
  headers: EndpointClientConfig["headers"],
  descriptor: AnyEndpointDescriptor,
): Readonly<Record<string, string>> {
  return typeof headers === "function" ? headers(descriptor) : (headers ?? {});
}
