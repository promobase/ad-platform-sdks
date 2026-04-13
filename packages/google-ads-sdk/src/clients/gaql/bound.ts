import type { HttpClient } from "@promobase/sdk-runtime";
import type { GaqlResource, ResourceFieldMap } from "../../generated/v23/gaql/resource-map.ts";
import { QueryBuilder, type RowOf } from "./builder.ts";

export class BoundQueryBuilder<FromR extends GaqlResource, Sel extends string = never> {
  constructor(
    private readonly inner: QueryBuilder<FromR, Sel>,
    private readonly client: HttpClient,
    private readonly customerId: string,
  ) {}

  select<F extends Extract<ResourceFieldMap[FromR], string>>(
    ...fields: readonly F[]
  ): BoundQueryBuilder<FromR, Sel | F> {
    return new BoundQueryBuilder(this.inner.select(...fields), this.client, this.customerId);
  }

  where(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.where(clause), this.client, this.customerId);
  }

  orderBy(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.orderBy(clause), this.client, this.customerId);
  }

  limit(n: number): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.limit(n), this.client, this.customerId);
  }

  parameters(clause: string): BoundQueryBuilder<FromR, Sel> {
    return new BoundQueryBuilder(this.inner.parameters(clause), this.client, this.customerId);
  }

  toQuery(): string {
    return this.inner.toQuery();
  }

  execute(): Promise<{ rows: RowOf<Sel>[]; nextPageToken?: string }> {
    return this.inner.execute(this.client, this.customerId);
  }

  stream(): AsyncIterable<RowOf<Sel>> {
    return this.inner.stream(this.client, this.customerId);
  }

  toArray(): Promise<RowOf<Sel>[]> {
    return this.inner.toArray(this.client, this.customerId);
  }

  take(n: number): Promise<RowOf<Sel>[]> {
    return this.inner.take(n, this.client, this.customerId);
  }

  first(): Promise<RowOf<Sel> | null> {
    return this.inner.first(this.client, this.customerId);
  }
}

export function gaqlFactory(client: HttpClient, customerId: string) {
  return {
    from<R extends GaqlResource>(resource: R): BoundQueryBuilder<R, never> {
      return new BoundQueryBuilder<R, never>(
        new QueryBuilder<R, never>({ from: resource, select: [] }),
        client,
        customerId,
      );
    },
  };
}
