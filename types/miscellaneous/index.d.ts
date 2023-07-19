import { Response } from "../pay_ins/card";

interface ListBanksResponseData {
    name: string;
    slug: string;
    code: string;
    nibss_bank_code: string;
    country: string;
}

export type ListBanksResponse = Response<ListBanksResponseData[]>;

interface ListMMOResponseData {
    name: string;
    slug: string;
    country: string;
    code: string;
    min: number;
    max: number;
}

export type ListMMOResponse = Response<ListMMOResponseData[]>;
