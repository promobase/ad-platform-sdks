export interface QueryState<FromR extends string, Sel extends string> {
  readonly from: FromR;
  readonly select: readonly Sel[];
  readonly where?: string;
  readonly orderBy?: string;
  readonly limit?: number;
  readonly parameters?: string;
}

export function serialize<R extends string, S extends string>(
  state: QueryState<R, S>,
): string {
  if (state.select.length === 0) {
    throw new Error("gaql: select() must be called with at least one field");
  }
  const parts: string[] = [
    `SELECT ${state.select.join(", ")}`,
    `FROM ${state.from}`,
  ];
  if (state.where) parts.push(`WHERE ${state.where}`);
  if (state.orderBy) parts.push(`ORDER BY ${state.orderBy}`);
  if (state.limit !== undefined) parts.push(`LIMIT ${state.limit}`);
  if (state.parameters) parts.push(`PARAMETERS ${state.parameters}`);
  return parts.join(" ");
}
