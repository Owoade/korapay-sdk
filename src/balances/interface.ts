import { Response } from "../miscellaneous/intercace";

interface BalanceInterface {
    pending_balance: number;
    available_balance: number;
}

type GetBalanceResponseData = Record<string, BalanceInterface>;

export type GetBalanceResponse = Response<GetBalanceResponseData>;