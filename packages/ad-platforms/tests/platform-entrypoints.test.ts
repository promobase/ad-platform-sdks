import { expect, test } from "bun:test";

import { Facebook, createFacebookGraphClient } from "../src/facebook.ts";
import { Instagram } from "../src/instagram.ts";
import * as tiktokWebhooks from "../src/tiktok-webhooks.ts";
import { TikTok } from "../src/tiktok.ts";
import { webhooks } from "../src/webhooks.ts";
import { WhatsApp } from "../src/whatsapp.ts";

test("platform-first entrypoints expose direct provider surfaces", () => {
  expect(Facebook.createClient).toBeDefined();
  expect(createFacebookGraphClient).toBeDefined();
  expect(Instagram.createClient).toBeDefined();
  expect(WhatsApp.createClient).toBeDefined();
  expect(TikTok.createClient).toBeDefined();
  expect(tiktokWebhooks.safeParseTikTokWebhook).toBeDefined();
  expect(webhooks.facebook.schema).toBeDefined();
  expect(webhooks.instagram.schema).toBeDefined();
  expect(webhooks.whatsapp.schema).toBeDefined();
});
