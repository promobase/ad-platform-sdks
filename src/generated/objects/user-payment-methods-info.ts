export interface UserPaymentMethodsInfoFields {
  account_id: string;
  available_card_types: string[];
  available_payment_methods: string[];
  available_payment_methods_details: Record<string, unknown>[];
  country: string;
  currency: string;
  existing_payment_methods: Record<string, unknown>[];
}

