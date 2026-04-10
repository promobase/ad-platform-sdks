import { tool } from "ai";
import { z } from "zod";
import type { Tool } from "ai";
import { filterTools, type ToolCategory } from "./filter.ts";

export interface RouterOptions {
  /** All available tools */
  tools: Record<string, Tool>;
  /** Tool categories available for routing */
  categories?: ToolCategory[];
}

/**
 * Create a two-stage router. Returns a small set of routing tools.
 *
 * Stage 1: Agent sees only `select_tool_category` and `list_categories`.
 * Stage 2: After selecting a category, the relevant tools are returned.
 *
 * This is designed for use with the AI SDK's `prepareStep` callback.
 */
export function createRouter(opts: RouterOptions) {
  const allTools = opts.tools;
  const categories = opts.categories ?? ["instagram", "facebook", "threads", "campaigns"];

  // Track which categories have been selected
  let selectedCategories: ToolCategory[] = [];

  const routerTools = {
    select_tool_category: tool({
      description: `Select which tool categories to activate. Available categories: ${categories.join(", ")}. You can select multiple. After selecting, the specific tools for those categories will become available.`,
      inputSchema: z.object({
        categories: z.array(z.enum(categories as [string, ...string[]])).describe("Categories to activate"),
      }),
      execute: async ({ categories: selected }: { categories: string[] }) => {
        selectedCategories = selected as ToolCategory[];
        const filtered = filterTools(allTools, selectedCategories);
        const toolNames = Object.keys(filtered);
        return {
          activated: selectedCategories,
          availableTools: toolNames,
          count: toolNames.length,
          message: `Activated ${toolNames.length} tools for: ${selectedCategories.join(", ")}. These tools are now available.`,
        };
      },
    }),

    list_categories: tool({
      description: "List all available tool categories and their tool counts.",
      inputSchema: z.object({}),
      execute: async () => {
        const summary: Record<string, number> = {};
        for (const cat of categories) {
          const filtered = filterTools(allTools, [cat as ToolCategory]);
          summary[cat] = Object.keys(filtered).length;
        }
        return { categories: summary };
      },
    }),
  };

  return {
    /** Router tools (give these to the agent in step 1) */
    routerTools,

    /** Get the currently selected tools (use in prepareStep) */
    getSelectedTools(): Record<string, Tool> {
      if (selectedCategories.length === 0) return routerTools;
      return { ...routerTools, ...filterTools(allTools, selectedCategories) };
    },

    /** Get selected categories */
    getSelectedCategories(): ToolCategory[] {
      return [...selectedCategories];
    },

    /** Reset selection */
    reset(): void {
      selectedCategories = [];
    },
  };
}
