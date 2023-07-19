import { AxiosInstance } from "axios";
import { ListBanksResponse, ListMMOResponse } from "../../types/miscellaneous";
import { KorapayDecorator } from "../utils";

export default class Miscellaneous {

    private request: AxiosInstance;

    constructor( request: AxiosInstance ){

        this.request = request;

    }

    @KorapayDecorator.forCatchingError()
    async list_banks( ){

        const response = await this.request.get('/misc/banks');

        return response.data as ListBanksResponse;

    }

    @KorapayDecorator.forCatchingError()
    async list_mmo( country_code: string ){

        const response = await this.request.get(`/misc/mobile-money?countryCode=${country_code}`);

        return response.data as ListMMOResponse;

    }

}