import type { ModelIr, SdkIr } from "./ir.ts";
import { emitEffectSchemaModule } from "./schema-emitter.ts";
import { emitTypeScriptModule } from "./typescript-emitter.ts";
import { emitValibotSchemaModule } from "./valibot-emitter.ts";

export interface GeneratedFile {
  readonly path: string;
  readonly content: string;
}

export interface CodegenTargetContext {
  readonly ir: SdkIr;
  readonly models: readonly ModelIr[];
}

export interface CodegenTarget {
  readonly id: string;
  emit(context: CodegenTargetContext): readonly GeneratedFile[];
}

function modelTarget(id: string, fileName: string, emit: (ir: SdkIr) => string): CodegenTarget {
  return {
    id,
    emit: ({ ir }) => [
      { path: fileName, content: emit(ir) },
      {
        path: "index.ts",
        content: [
          "// This file is generated. Do not edit by hand.",
          `export * from "./${fileName}";`,
          "",
        ].join("\n"),
      },
    ],
  };
}

export const typescriptTarget: CodegenTarget = modelTarget(
  "types",
  "types.ts",
  emitTypeScriptModule,
);

export const effectTarget = modelTarget("effect", "schemas.ts", emitEffectSchemaModule);

export const valibotTarget: CodegenTarget = modelTarget(
  "valibot",
  "schemas.ts",
  emitValibotSchemaModule,
);
