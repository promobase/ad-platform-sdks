import { test, expect } from "bun:test";
import { FacebookApiError } from "../../src/errors.ts";
import { ApiError } from "@promobase/sdk-runtime";

test("FacebookApiError extends ApiError", () => {
  const err = FacebookApiError.fromResponse(400, {
    error: { message: "Bad", type: "OAuthException", code: 190, fbtrace_id: "abc" },
  });
  expect(err).toBeInstanceOf(FacebookApiError);
  expect(err).toBeInstanceOf(ApiError);
  expect(err).toBeInstanceOf(Error);
  expect(err.status).toBe(400);
  expect(err.code).toBe(190);
});

test("FacebookApiError handles missing subcode", () => {
  const err = FacebookApiError.fromResponse(500, {
    error: { message: "Err", type: "Exception", code: 100, fbtrace_id: "xyz" },
  });
  expect(err.subcode).toBeUndefined();
});

test("FacebookApiError handles malformed body", () => {
  const err = FacebookApiError.fromResponse(502, { unexpected: "shape" });
  expect(err.message).toBe("Unknown Facebook API error");
  expect(err.code).toBe(0);
});
