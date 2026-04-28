import type { Command } from "commander";
import { registerGoogleAdsCommands } from "./google-ads.ts";
import { registerLinkedInCommands } from "./linkedin.ts";
import { registerMetaCommands } from "./meta/index.ts";
import { registerTikTokCommands } from "./tiktok.ts";
import { registerXCommands } from "./x.ts";
import { registerYouTubeCommands } from "./youtube.ts";

export function registerPlatformCommands(program: Command): void {
  registerMetaCommands(program);
  registerLinkedInCommands(program);
  registerTikTokCommands(program);
  registerXCommands(program);
  registerYouTubeCommands(program);
  registerGoogleAdsCommands(program);
}
