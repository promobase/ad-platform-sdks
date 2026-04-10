import { test, expect } from "bun:test";
import { FacebookApiError } from "../../src/runtime/errors.ts";

test("FacebookApiError parses Graph API error response", () => {
  const body = {
    error: {
      message: "Invalid OAuth access token.",
      type: "OAuthException",
      code: 190,
      error_subcode: 463,
      fbtrace_id: "AbC123xYz",
    },
  };
  const err = FacebookApiError.fromResponse(400, body);
  expect(err).toBeInstanceOf(FacebookApiError);
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Invalid OAuth access token.");
  expect(err.status).toBe(400);
  expect(err.code).toBe(190);
  expect(err.subcode).toBe(463);
  expect(err.type).toBe("OAuthException");
  expect(err.fbtrace_id).toBe("AbC123xYz");
});

test("FacebookApiError handles missing subcode", () => {
  const body = {
    error: { message: "Some error", type: "Exception", code: 100, fbtrace_id: "xyz" },
  };
  const err = FacebookApiError.fromResponse(500, body);
  expect(err.subcode).toBeUndefined();
  expect(err.code).toBe(100);
});

test("FacebookApiError handles malformed response body", () => {
  const err = FacebookApiError.fromResponse(502, { unexpected: "shape" });
  expect(err.message).toBe("Unknown Facebook API error");
  expect(err.status).toBe(502);
  expect(err.code).toBe(0);
});
