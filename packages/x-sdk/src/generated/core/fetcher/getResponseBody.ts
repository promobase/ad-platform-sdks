// @generated
// fingerprint: sha256:960adc16b6fe9a53f4cb7ab341d1f420b705a31286501a6997ae2a4cc63f7be2
// DO NOT EDIT: generated file; changes will be overwritten.
import { fromJson } from "../json.js";
import { getBinaryResponse } from "./BinaryResponse.js";

// Pins the upstream Response so undici's FinalizationRegistry can't GC it and cancel the body stream.
function retainResponse(target: object, response: Response): void {
    Object.defineProperty(target, "__fern_response_ref", {
        value: response,
        enumerable: false,
        configurable: true,
        writable: false,
    });
}

export async function getResponseBody(response: Response, responseType?: string): Promise<unknown> {
    switch (responseType) {
        case "binary-response":
            return getBinaryResponse(response);
        case "blob":
            return await response.blob();
        case "arrayBuffer":
            return await response.arrayBuffer();
        case "sse":
            if (response.body == null) {
                return {
                    ok: false,
                    error: {
                        reason: "body-is-null",
                        statusCode: response.status,
                    },
                };
            }
            retainResponse(response.body, response);
            return response.body;
        case "streaming":
            if (response.body == null) {
                return {
                    ok: false,
                    error: {
                        reason: "body-is-null",
                        statusCode: response.status,
                    },
                };
            }

            retainResponse(response.body, response);
            return response.body;

        case "text":
            return await response.text();
    }

    // if responseType is "json" or not specified, try to parse as JSON
    const text = await response.text();
    if (text.length > 0) {
        try {
            const responseBody = fromJson(text);
            return responseBody;
        } catch (_err) {
            return {
                ok: false,
                error: {
                    reason: "non-json",
                    statusCode: response.status,
                    rawBody: text,
                },
            };
        }
    }
    return undefined;
}
