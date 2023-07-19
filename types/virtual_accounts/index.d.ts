import { Response } from "../pay_ins/card";

export interface CreateVirtualAccountPayload {
    account_name: string;
    account_reference: string;
    permanent: boolean;
    bank_code: string;
    customer: {
      name: string;
    };
}

interface CreateVirtualAccountResponseData {
    account_name: string;
    account_number: string;
    bank_code: string;
    bank_name: string;
    account_reference: string;
    unique_id: string;
    account_status: string;
    created_at: string;
    currency: string;
    customer: {
      name: string;
    };
}

export type CreateVirtualAccountResponse = Response<CreateVirtualAccountResponseData>;

export type GetVirtualAccountDetailsResponse = CreateVirtualAccountResponse;

interface GetVirtualAccountTransactionsResponseData {
    reference: string;
    status: string;
    amount: string;
    fee: string;
    currency: string;
    description: string;
    payer_bank_account: {
      account_number: string;
      account_name: string;
      bank_name: string;
    };
}

export type GetVirtualAccountTransactionsResponse = Response<GetVirtualAccountTransactionsResponseData[]>

export interface CreditSandboxVirtualAccountPayload  {
    account_number: string;
    amount: number;
    currency: string;
}

export type CreditSandboxVirtualAccountResponse = Response<any>



