export interface InitiatePayOutPayload  {
    reference: string;
    destination: {
      type: string;
      amount: number;
      currency: string;
      narration?: string;
      bank_account: {
        bank: string;
        account: string;
      };
      customer: {
        name?: string;
        email: string;
      };
    };
}

 interface InitiatePayoutResponseData {
    amount: string;
    fee: string;
    currency: string;
    status: string;
    reference: string;
    narration: string;
    customer: CustomerData;
  }
  
  interface CustomerData {
    name: string;
    email: string;
    phone: string;
  }

export type InitiatePayoutResponse = Response<InitiatePayoutResponseData>

interface VerifyPayoutResponseData {
    amount: number;
    fee: number;
    narration: string;
    currency: string;
    status: string;
    reference: string;
    trace_id: string;
    customer: CustomerData;
}

export type VerifyPayoutResponse = Response<VerifyPayoutResponseData>
  

