import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Charge from "./pay_ins/";
import Payouts from "./pay_outs/";
import Verification from "./verification/";
import Miscellaneous from "./miscellaneous/";
import Balances from "./balances/";
import VirtualAccounts from "./virtual_accounts/"

console.log = ()=>{};

export default class Korapay {

    protected sercret_key: string

    protected request: AxiosInstance

    protected public_request: AxiosInstance;

    charge: Charge;

    payout: Payouts;

    verification: Verification;

    misc: Miscellaneous;

    balances: Balances;

    virtual_accounts: VirtualAccounts;

    constructor( secret_key: string, public_key: string){

        this.sercret_key = secret_key;

        const base_url = 'https://api.korapay.com/merchant/api/v1';

        const config = ( key: string ) =>  ({
          baseURL: base_url,
          headers: {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
          },
        } as AxiosRequestConfig )

        this.request = axios.create( config(secret_key));

        this.public_request =  axios.create(config(public_key));  

        this.charge = new Charge( this.request );

        this.payout = new Payouts( this.request );

        this.verification = new Verification( this.request );

        this.misc = new Miscellaneous( this.public_request );

        this.balances = new Balances( this.request );

        this.virtual_accounts = new VirtualAccounts( this.request );


    }

}






