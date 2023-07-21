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

export interface Response<T> {
    status: boolean;
    message: string;
    data: T
}
export interface  ErrorResponse extends Response<{}> {
    code: string
} 