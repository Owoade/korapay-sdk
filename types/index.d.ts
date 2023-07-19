import Balances from "../lib/balances";
import Miscellaneous from "../lib/miscellaneous";
import Charge from "../lib/pay_ins";
import Payouts from "../lib/pay_outs";
import Verification from "../lib/verification";
import VirtualAccounts from "../lib/virtual_accounts";
import { ChargeCardData } from "./pay_ins/card";

declare module "korapay-node" {

    class KorapayInstance {

        charge: Charge;

        payout: Payouts;

        verification: Verification;

        misc: Miscellaneous;

        balances: Balances;

        virtual_accounts: VirtualAccounts;

    }

}