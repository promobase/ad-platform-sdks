// @generated
// fingerprint: sha256:8ee05ce961c454f459898e7ed5e120d75b0a93ed485f5e31a290397aade193a7
// DO NOT EDIT: generated file; changes will be overwritten.
import { toQueryString } from "../url/qs.js";

export function createRequestUrl(baseUrl: string, queryParameters?: Record<string, unknown>): string {
    const queryString = toQueryString(queryParameters, { arrayFormat: "repeat" });
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
