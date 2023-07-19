import axios, { AxiosInstance } from "axios";
import Charge from "./lib/pay_ins";
import Payouts from "./lib/pay_outs";
import Verification from "./lib/verification";
import Miscellaneous from "./lib/miscellaneous";
import Balances from "./lib/balances";
import VirtualAccounts from "./lib/virtual_accounts";

export default class Korapay {

    private sercret_key: string

    protected request: AxiosInstance

    charge: Charge;

    payout: Payouts;

    verification: Verification;

    misc: Miscellaneous;

    public_request: AxiosInstance;

    balances: Balances;

    virtual_accounts: VirtualAccounts;

    constructor( secret_key: string, public_key: string){

        this.sercret_key = secret_key;

        const base_url = 'https://api.korapay.com/merchant/api/v1';

        const headers = {
            'Content-Type': 'application/json'
        }

        this.request = axios.create({
          baseURL: base_url,
          headers: {
            Authorization: `Bearer ${secret_key}`,
            ...headers,
          },
        });

        this.public_request =  axios.create({
            baseURL: base_url,
            headers: {
              Authorization: `Bearer ${public_key}`,
              ...headers,
            },
          });  

        this.charge = new Charge( this.request );

        this.payout = new Payouts( this.request );

        this.verification = new Verification( this.request );

        this.misc = new Miscellaneous( this.public_request );

        this.balances = new Balances( this.request );

        this.virtual_accounts = new VirtualAccounts( this.request );


    }

}




