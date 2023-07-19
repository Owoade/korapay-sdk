import { AxiosError, AxiosInstance } from "axios";
import Korapay from "../..";
import  { KorapayDecorator } from "../utils";
import * as types  from "../../types"
import { AuthorizeCardPayload, AuthorizeCardResponse, ErrorResponse, ChargeCardResponse, ResendOtpResponse } from "../../types/pay_ins/card";

export default class Card  {

    protected request: AxiosInstance

    constructor( request: AxiosInstance ){

        this.request = request;

        this.charge = this.charge.bind(this);

        this.authorize = this.authorize.bind(this);
        
        this.resend_otp = this.resend_otp.bind(this);

    }

    @KorapayDecorator.forCatchingError()
    async charge( charge_data: string ){

        const response = await this.request.post("/charges/card", { charge_data });

        return response.data as ChargeCardResponse;

    }

    @KorapayDecorator.forCatchingError()
    async authorize( payload: AuthorizeCardPayload ){

        const response = await this.request.post("/charges/card/authorize", payload );

        return response.data as AuthorizeCardResponse;

    }

    @KorapayDecorator.forCatchingError()
    async resend_otp(transaction_reference: string){

        const response = await this.request.post("/charges/card/authorize", { transaction_reference });

        return response.data as ResendOtpResponse;

    }

}