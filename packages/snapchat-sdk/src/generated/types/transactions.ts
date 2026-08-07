// Auto-generated types for transactions — do not edit

export interface Transaction {
  id: string;
  account_id: string;
  payment_items: {
  payment_item_id: string;
  name: string;
  start_date: string;
  end_date: string;
  subtotal_amount: {
    amount: number;
    currency_type: string;
  };
  quantity: number;
}[];
  payment_action_id: string;
  payment_action_type: string;
  credential_type: string;
  credential_id: string;
  payment_method_id: string;
  total_amount: {
  amount: number;
  currency_type: string;
};
  status: string;
  created_time: string;
  last_update_time: string;
}


export interface ListTransactionsParams {
  organizationId: string;
  start_time?: string;
  end_time?: string;
}
