import { ChargeCardData } from "./pay_ins/card";

declare module "korapay-node" {

    class KorapayInstance {

        charge: ChargeInstance;

        payout: PayoutsInstance;

        verification: VerificationInstance;

        misc: MiscellaneousInstance;

        balances: BalancesInstance;

        virtual_accounts: VirtualAccountsInstance;
        
    }

}