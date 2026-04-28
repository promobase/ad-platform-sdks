declare const Buffer:
  | {
      from(input: string | Uint8Array, encoding?: string): { toString(encoding?: string): string };
    }
  | undefined;

declare const process: { versions: { bun?: string; node: string } } | undefined;

interface ErrorConstructor {
  captureStackTrace?(targetObject: object, constructorOpt?: Function): void;
}

declare module "bun:test" {
  export function test(name: string, fn: () => void | Promise<void>): void;
  export function expect(actual: unknown): {
    toBeDefined(): void;
    toBe(expected: unknown): void;
  };
}
