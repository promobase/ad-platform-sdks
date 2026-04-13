import type { HttpClient } from "@promobase/sdk-runtime";
import type { FieldInfo, FieldMap } from "../../generated/v23/gaql/field-map.ts";
import type {
  GaqlResource,
  ResourceFieldMap,
} from "../../generated/v23/gaql/resource-map.ts";
import { googleAdsService } from "../../generated/v23/services/index.ts";
import { paginate } from "../../pagination.ts";
import { serialize, type QueryState } from "./serialize.ts";

type SplitDots<S extends string> = S extends `${infer H}.${infer T}`
  ? [H, ...SplitDots<T>]
  : [S];

type SetPath<Root, Path extends readonly string[], V> = Path extends readonly [
  infer Head extends string,
  ...infer Rest extends string[],
]
  ? Rest extends readonly []
    ? Root & { [K in Head]: V }
    : Root & {
        [K in Head]: SetPath<
          Root extends Record<Head, infer Sub> ? Sub : Record<string, unknown>,
          Rest,
          V
        >;
      }
  : Root;

type ContributionOf<K extends string> = K extends keyof FieldMap
  ? FieldMap[K] extends FieldInfo<infer NS, infer P, infer T>
    ? SetPath<{}, [NS, ...SplitDots<P>], T>
    : never
  : never;

type UnionToIntersection<U> = (
  U extends unknown ? (_: U) => void : never
) extends (_: infer I) => void
  ? I
  : never;

export type RowOf<Sel extends string> = UnionToIntersection<ContributionOf<Sel>>;

export class QueryBuilder<
  FromR extends GaqlResource,
  Sel extends string = never,
> {
  constructor(readonly state: QueryState<FromR, Sel>) {}

  select<F extends Extract<ResourceFieldMap[FromR], string>>(
    ...fields: readonly F[]
  ): QueryBuilder<FromR, Sel | F> {
    return new QueryBuilder<FromR, Sel | F>({
      ...this.state,
      select: [...this.state.select, ...fields] as readonly (Sel | F)[],
    });
  }

  where(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder<FromR, Sel>({ ...this.state, where: clause });
  }

  orderBy(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder<FromR, Sel>({ ...this.state, orderBy: clause });
  }

  limit(n: number): QueryBuilder<FromR, Sel> {
    return new QueryBuilder<FromR, Sel>({ ...this.state, limit: n });
  }

  parameters(clause: string): QueryBuilder<FromR, Sel> {
    return new QueryBuilder<FromR, Sel>({ ...this.state, parameters: clause });
  }

  toQuery(): string {
    return serialize(this.state);
  }

  async execute(
    client: HttpClient,
    customerId: string,
  ): Promise<{ rows: RowOf<Sel>[]; nextPageToken?: string }> {
    const res = await googleAdsService.search(client, customerId, {
      query: this.toQuery(),
    });
    return {
      rows: (res.results ?? []) as unknown as RowOf<Sel>[],
      nextPageToken: res.nextPageToken,
    };
  }

  stream(client: HttpClient, customerId: string): AsyncIterable<RowOf<Sel>> {
    const query = this.toQuery();
    return (async function* () {
      for await (const row of paginate(
        (req) => googleAdsService.search(client, customerId, req),
        { query },
      )) {
        yield row as unknown as RowOf<Sel>;
      }
    })();
  }

  async toArray(client: HttpClient, customerId: string): Promise<RowOf<Sel>[]> {
    const out: RowOf<Sel>[] = [];
    for await (const row of this.stream(client, customerId)) out.push(row);
    return out;
  }

  async take(
    n: number,
    client: HttpClient,
    customerId: string,
  ): Promise<RowOf<Sel>[]> {
    const out: RowOf<Sel>[] = [];
    for await (const row of this.stream(client, customerId)) {
      out.push(row);
      if (out.length >= n) break;
    }
    return out;
  }

  async first(
    client: HttpClient,
    customerId: string,
  ): Promise<RowOf<Sel> | null> {
    for await (const row of this.stream(client, customerId)) return row;
    return null;
  }
}

export const gaql = {
  from<R extends GaqlResource>(resource: R): QueryBuilder<R, never> {
    return new QueryBuilder<R, never>({ from: resource, select: [] });
  },
};
