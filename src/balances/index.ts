import { AxiosInstance } from "axios";
import { KorapayDecorator } from "../utils.js";
import { GetBalanceResponse } from "./interface";

export default class Balances {

    protected request: AxiosInstance;

    constructor( request: AxiosInstance ){

        this.request = request;

    }

    @KorapayDecorator.forCatchingError()
    async get(){

        const response = await this.request.get('/balances');

        return response.data as GetBalanceResponse;

    }

}