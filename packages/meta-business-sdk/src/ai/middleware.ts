import type { Tool } from "ai";

export interface ToolMiddleware {
  /** Called before tool execution. Can modify params or throw to block. */
  beforeExecute?: (context: ToolCallContext) => Promise<void> | void;
  /** Called after successful execution. */
  afterExecute?: (
    context: ToolCallContext & { result: unknown; durationMs: number },
  ) => Promise<void> | void;
  /** Called on execution error. Return a value to use as fallback result, or rethrow. */
  onError?: (context: ToolCallContext & { error: unknown }) => Promise<unknown> | unknown;
}

export interface ToolCallContext {
  toolName: string;
  params: unknown;
  timestamp: number;
}

/**
 * Wrap a set of tools with middleware hooks.
 * Returns a new tools object with the same keys but wrapped execute functions.
 */
export function withMiddleware<T extends Record<string, Tool>>(
  tools: T,
  middleware: ToolMiddleware,
): T {
  const wrapped: Record<string, Tool> = {};

  for (const [name, originalTool] of Object.entries(tools)) {
    const origExecute = (originalTool as any).execute;
    if (!origExecute) {
      wrapped[name] = originalTool;
      continue;
    }

    wrapped[name] = {
      ...originalTool,
      execute: async (params: unknown, execOpts: unknown) => {
        const ctx: ToolCallContext = {
          toolName: name,
          params,
          timestamp: Date.now(),
        };

        // Before hook
        if (middleware.beforeExecute) {
          await middleware.beforeExecute(ctx);
        }

        const startTime = Date.now();
        try {
          const result = await origExecute(params, execOpts);
          const durationMs = Date.now() - startTime;

          // After hook
          if (middleware.afterExecute) {
            await middleware.afterExecute({ ...ctx, result, durationMs });
          }

          return result;
        } catch (error) {
          // Error hook
          if (middleware.onError) {
            const fallback = await middleware.onError({ ...ctx, error });
            if (fallback !== undefined) return fallback;
          }
          throw error;
        }
      },
    } as Tool;
  }

  return wrapped as T;
}
