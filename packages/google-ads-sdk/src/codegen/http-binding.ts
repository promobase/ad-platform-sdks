export interface ParsedHttpPath {
  template: string;
  pathParams: string[];
}

export function parseHttpPath(path: string): ParsedHttpPath {
  const pathParams: string[] = [];
  const template = path.replace(/\{([a-z_][a-z_0-9]*)(?:=[^}]*)?\}/g, (_match, name: string) => {
    pathParams.push(name);
    return `\${${snakeToCamel(name)}}`;
  });
  return { template, pathParams };
}

export function snakeToCamel(s: string): string {
  return s.replace(/_([a-z])/g, (_m, c: string) => c.toUpperCase());
}
