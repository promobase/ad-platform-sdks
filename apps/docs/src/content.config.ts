import { docsCollection, partialsCollection } from "@cloudflare/nimbus-docs/content";
// `z` re-exported from `astro:content` is deprecated; import it from
// `astro/zod` (the pattern nimbus-docs' own schema helpers document).
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

export const collections = {
  docs: defineCollection(
    docsCollection({
      schemaFields: {
        // Nimbus docs are agent-friendly by default. Set `audience: human`
        // to flag a page that's written primarily for human readers.
        audience: z.literal("human").optional(),
        generated: z.boolean().optional(),
        platform: z.string().optional(),
        sourceVersion: z.string().optional(),
      },
    }),
  ),
  partials: defineCollection(partialsCollection()),
};
