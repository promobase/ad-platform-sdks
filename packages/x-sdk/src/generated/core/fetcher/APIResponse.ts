// @generated
// fingerprint: sha256:4229943bb6f25bf294937c9a9edc664ea1924ae3b38fd00186151a6226bd04ae
// DO NOT EDIT: generated file; changes will be overwritten.
import type { RawResponse } from "./RawResponse.js";

/**
 * The response of an API call.
 * It is a successful response or a failed response.
 */
export type APIResponse<Success, Failure> = SuccessfulResponse<Success> | FailedResponse<Failure>;

export interface SuccessfulResponse<T> {
    ok: true;
    body: T;
    /**
     * @deprecated Use `rawResponse` instead
     */
    headers?: Record<string, any>;
    rawResponse: RawResponse;
}

export interface FailedResponse<T> {
    ok: false;
    error: T;
    rawResponse: RawResponse;
}
