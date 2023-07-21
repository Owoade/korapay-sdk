import { AxiosInstance } from "axios";
import { CreditSandboxVirtualAccountPayload, CreditSandboxVirtualAccountResponse, CreateVirtualAccountPayload, CreateVirtualAccountResponse, GetVirtualAccountDetailsResponse } from "./interface";
import { KorapayDecorator } from "../utils";

export default class VirtualAccounts {

    private request: AxiosInstance;

    constructor(request: AxiosInstance){

        this.request = request;

    }

    @KorapayDecorator.forCatchingError()
    async create( payload: CreateVirtualAccountPayload ){

        const response = await this.request.post('/virtual-bank-account', payload);

        return response.data as CreateVirtualAccountResponse;

    }

    @KorapayDecorator.forCatchingError()
    async get_details( account_reference: string ){

        const response = await this.request.get(`/virtual-bank-account/${account_reference}`);

        return response.data as GetVirtualAccountDetailsResponse;

    }

    @KorapayDecorator.forCatchingError()
    async get_transactions( account_number: string ){

        const response = await this.request.get(`/virtual-bank-account/transactions?account_number=${account_number}`);

        return response.data;

    }

    @KorapayDecorator.forCatchingError()
    async credit_sandbox_account(payload: CreditSandboxVirtualAccountPayload ){

        const response = await this.request.post('/virtual-bank-account/sandbox/credit', payload);

        return response.data as CreditSandboxVirtualAccountResponse;

    }
}