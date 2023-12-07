import { Response } from "../miscellaneous/intercace.js";

interface BalanceInterface {
    pending_balance: number;
    available_balance: number;
}

type GetBalanceResponseData = Record<string, BalanceInterface>;

 type GetBalanceResponse = Response<GetBalanceResponseData>;

 export { GetBalanceResponse }