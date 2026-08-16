import { BaseFormatConverter, type Root, parseMarkdown, stringifyMarkdown } from "chat";

/**
 * Plain-text/markdown converter for platforms with no native rich rendering.
 * Kept as one explicit class so future card/button rendering hooks live in a
 * single place per platform family.
 */
export class MarkdownFormatConverter extends BaseFormatConverter {
  toAst(platformText: string): Root {
    return parseMarkdown(platformText);
  }

  fromAst(ast: Root): string {
    return stringifyMarkdown(ast);
  }
}
