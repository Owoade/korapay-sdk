import { Response } from "../miscellaneous/intercace.js";

interface InitiateChargePayload {
    amount: number;
    redirect_url?: string;
    currency: string;
    reference: string;
    channels?: string[];
    default_channel?: string;
    notification_url: string;
    narration: string;
    customer: CustomerData;
  }
  
interface CustomerData {
    email: string;
    name?: string;
}

interface InitiateChargeResponseData {
    reference:	string,	
    checkout_url:	string
}

type InitiateChargeResponse = Response<InitiateChargeResponseData>

interface QueryChargeResponseData {
  reference: string;
  amount: number;
  amount_paid: number;
  fee: number;
  currency: string;
  status: string;
  description: string;
  created_at: Date;
  metadata: Record<string, any>;
  payer_bank_account?: {
    account_number: string;
    account_name: string;
    bank_name: string;
  };
  payment_attempts?: any[];
}

  interface InitiateBankTransferPayload {
    account_name: string;
    amount: number;
    currency: string;
    reference: string;
    customer: CustomerData;
  }

type QueryChargeResponse = Response<QueryChargeResponseData>

interface BankAccountData {
    account_name: string;
    account_number: string;
    bank_name: string;
    bank_code: string;
    expiry_date_in_utc: string;
  }
    
  interface InitiateBankTransferResponseData {
    currency: string;
    amount: number;
    amount_expected: number;
    fee: number;
    vat: number;
    reference: string;
    payment_reference: string;
    status: string;
    narration: string;
    merchant_bears_cost: boolean;
    bank_account: BankAccountData;
    customer: CustomerData;
}

type InitiateBankTransferResponse = Response<InitiateBankTransferResponseData>

export {
  InitiateChargePayload,
  InitiateChargeResponse,
  InitiateBankTransferPayload,
  QueryChargeResponse,
  InitiateBankTransferResponse
}
  

  
    


  



