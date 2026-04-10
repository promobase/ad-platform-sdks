export interface McomPayoutsFields {
  number_of_orders: number;
  order_ids: string[];
  payout_amount: Record<string, unknown>;
  payout_provider_reference_id: string;
  payout_status: string;
  payout_time: number;
  provider: string;
}

