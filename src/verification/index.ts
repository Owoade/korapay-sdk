import { AxiosInstance } from "axios";
import { ResolveBankAcoountPayload } from "./interface";
import { KorapayDecorator } from "../utils";

export default class Verification {

    protected request: AxiosInstance;

    constructor( request: AxiosInstance ){

        this.request = request;

    }

    @KorapayDecorator.forCatchingError()
    async resolve_bank_account( payload: ResolveBankAcoountPayload ){
        
        const response = await this.request.post("/misc/banks/resolve", payload );

        return response.data;

    }

    
}