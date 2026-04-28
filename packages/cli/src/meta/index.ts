import type { Command } from "commander";
import { registerFacebookCommands } from "./facebook.ts";
import { registerInstagramCommands } from "./instagram.ts";
import { registerThreadsCommands } from "./threads.ts";

export function registerMetaCommands(program: Command): void {
  const meta = program
    .command("meta")
    .description("Meta APIs grouped by domain: instagram, facebook, threads");

  registerInstagramCommands(meta);
  registerFacebookCommands(meta);
  registerThreadsCommands(meta);
}
