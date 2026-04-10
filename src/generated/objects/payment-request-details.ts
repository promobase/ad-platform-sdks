export interface PaymentRequestDetailsFields {
  amount: Record<string, unknown>;
  creation_time: number;
  note: string;
  payment_request_id: string;
  receiver_id: string;
  reference_number: string;
  sender_id: string;
  status: string;
  transaction_time: number;
}

