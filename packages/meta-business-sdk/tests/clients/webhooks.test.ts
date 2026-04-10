import { test, expect } from "bun:test";
import { verifyWebhookChallenge, verifyWebhookSignature } from "../../src/clients/webhooks.ts";

test("verifyWebhookChallenge returns challenge on valid request", () => {
  const result = verifyWebhookChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "test_challenge_123", "hub.verify_token": "my_token" },
    "my_token",
  );
  expect(result.valid).toBe(true);
  expect(result.challenge).toBe("test_challenge_123");
});

test("verifyWebhookChallenge rejects wrong verify_token", () => {
  const result = verifyWebhookChallenge(
    { "hub.mode": "subscribe", "hub.challenge": "test", "hub.verify_token": "wrong" },
    "correct_token",
  );
  expect(result.valid).toBe(false);
});

test("verifyWebhookChallenge rejects missing hub.mode", () => {
  const result = verifyWebhookChallenge(
    { "hub.challenge": "test", "hub.verify_token": "my_token" },
    "my_token",
  );
  expect(result.valid).toBe(false);
});

test("verifyWebhookSignature validates correct HMAC signature", async () => {
  const body = '{"test":"data"}';
  const secret = "test_secret";
  // Pre-compute expected signature
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  const hex = Array.from(new Uint8Array(signed)).map(b => b.toString(16).padStart(2, "0")).join("");

  const valid = await verifyWebhookSignature(body, `sha256=${hex}`, secret);
  expect(valid).toBe(true);
});

test("verifyWebhookSignature rejects wrong signature", async () => {
  const valid = await verifyWebhookSignature('{"test":"data"}', "sha256=deadbeef", "secret");
  expect(valid).toBe(false);
});
