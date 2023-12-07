import { Response } from "../miscellaneous/intercace.js";

export interface ResolveBankAcoountPayload {
    bank: string;
    account: string;
}

interface ResolveBankAcoountResponseData {
    bank_name: string;
    bank_code: string;
    account_number: string;
    account_name: string;
}

export type ResolveBankAcoountResponse = Response<ResolveBankAcoountResponseData>;



