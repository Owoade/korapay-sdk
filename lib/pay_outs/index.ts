import { AxiosInstance } from "axios";
import { InitiatePayOutPayload, InitiatePayoutResponse, VerifyPayoutResponse } from "../../types/pay_outs";
import { KorapayDecorator } from "../utils";

export default class Payouts {

    protected request: AxiosInstance;

    constructor(  request: AxiosInstance ){

        this.request = request;

    }

    @KorapayDecorator.forCatchingError()
    async payout_to_bank( payload: InitiatePayOutPayload ){

        const response = await this.request.post("/transactions/disburse", payload );

        return response.data as InitiatePayoutResponse;

    }

    @KorapayDecorator.forCatchingError()
    async verify_payout( transaction_reference: string ){

        const response = await this.request.get(`/transactions/${transaction_reference}`);

        return response.data as VerifyPayoutResponse;
        
    }


}