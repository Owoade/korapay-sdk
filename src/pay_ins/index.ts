import { AxiosInstance } from "axios";
import {
  InitiateBankTransferPayload,
  InitiateBankTransferResponse,
  InitiateChargePayload,
  InitiateChargeResponse,
  QueryChargeResponse,
} from "./interface";
import  { KorapayDecorator } from "../utils.js";
import Card from "./card";

export default class Charge {

  card: Card;

  private request: AxiosInstance;

  constructor( request: AxiosInstance ) {

    this.request = request

    this.card = new Card( request );

    this.initialize = this.initialize.bind(this);

    this.query = this.query.bind(this);

    this.bank_transfer = this.bank_transfer.bind(this);

  }

  @KorapayDecorator.forCatchingError()
  async initialize(payload: InitiateChargePayload) {

    const response = await this.request.post("/charges/initialize", payload);

    return response.data as InitiateChargeResponse;
    
  }

  @KorapayDecorator.forCatchingError()
  async query(reference: string) {

    const response = await this.request.get(`/charges/${reference}`);

    return response.data as QueryChargeResponse;

  }

  @KorapayDecorator.forCatchingError()
  async bank_transfer(payload: InitiateBankTransferPayload) {

    const response = await this.request.post("/charges/bank-transfer", payload );

    return response.data as InitiateBankTransferResponse;
    
  }
}
