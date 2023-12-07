import { Response } from "../miscellaneous/intercace.js";

interface CardDetails  {
    type: "matercard" | "verve" | "visa",
    first_six: string,
    last_four: string,
    expiry: string
}

type TransactionStatus = 'success' | 'processing' | 'failed';
  
interface ChargeCardData {
    amount: number;
    amount_charged: number;
    auth_model: "OTP" | "3DS" | "AVS" | "PIN";
    currency: string & "NGN";
    fee: number;
    vat: number;
    response_message: string,
    payment_reference: string,
    status: TransactionStatus,
    transaction_reference: string,
    card: CardDetails
}

type ChargeCardResponse = Response<ChargeCardData>

interface AuthorizeCardPayload {
    transaction_reference:	string;
    authorization:	{
        pin: string,
        otp: string,
    }
    avs: {
        state: string;
        city: string;
        country: string;
        address: string;
        zip_codes: string;
    }
}

interface AuthorizeCardInterface  {
    amount: number;
    amount_charged: number;
    auth_model: string;
    currency: string;
    fee: number;
    vat: number;
    response_message: string;
    payment_reference: string;
    transaction_reference: string;
    status: string;
    card: CardDetails;
    authorization: object,
    redirect_url: string
}

type  AuthorizeCardResponse = Response<AuthorizeCardInterface>
  
interface ResendOtpInterface {
    status: TransactionStatus,
    response_message: string,
    metadata: {
        support_message: string
    }
}

type ResendOtpResponse = Response<ResendOtpInterface>

export {
    ResendOtpResponse,
    ResendOtpInterface,
    AuthorizeCardResponse,
    AuthorizeCardPayload,
    ChargeCardResponse, 
    ChargeCardData
}