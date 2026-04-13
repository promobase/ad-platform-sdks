import { expect, test } from "bun:test";
import { GoogleAdsError, parseGoogleAdsError } from "../src/errors.ts";

test("parseGoogleAdsError extracts nested GoogleAdsFailure details", () => {
  const body = {
    error: {
      code: 400,
      message: "Request contains an invalid argument.",
      status: "INVALID_ARGUMENT",
      details: [
        {
          "@type": "type.googleapis.com/google.ads.googleads.v23.errors.GoogleAdsFailure",
          errors: [
            {
              errorCode: { authenticationError: "NOT_ADS_USER" },
              message: "No Google Ads account",
              location: { fieldPathElements: [{ fieldName: "customer_id" }] },
            },
          ],
          requestId: "abc123",
        },
      ],
    },
  };

  const err = parseGoogleAdsError(400, body);
  expect(err).toBeInstanceOf(GoogleAdsError);
  expect(err.httpStatus).toBe(400);
  expect(err.requestId).toBe("abc123");
  expect(err.errors).toHaveLength(1);
  expect(err.errors[0]!.message).toBe("No Google Ads account");
  expect(err.errors[0]!.errorCode.authenticationError).toBe("NOT_ADS_USER");
  expect(err.message).toContain("NOT_ADS_USER");
});

test("parseGoogleAdsError falls back gracefully for unexpected shapes", () => {
  const err = parseGoogleAdsError(500, { something: "else" });
  expect(err).toBeInstanceOf(GoogleAdsError);
  expect(err.httpStatus).toBe(500);
  expect(err.errors).toEqual([]);
});

test("parseGoogleAdsError handles null body", () => {
  const err = parseGoogleAdsError(503, null);
  expect(err).toBeInstanceOf(GoogleAdsError);
  expect(err.httpStatus).toBe(503);
  expect(err.errors).toEqual([]);
});
