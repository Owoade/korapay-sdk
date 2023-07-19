import axios, { AxiosInstance } from "axios";
import { ErrorResponse } from "../types/pay_ins/card";


export const KorapayDecorator = {
    forCatchingError() {

        return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor?.value;
      
        descriptor.value = async function (...args: any) {

          try {

            const result =  await originalMethod.apply(this, args);

            return result

          } catch (error: any) {
    
            const response = error?.response;

            return{ ...response.data, status_code: response.status } as ErrorResponse
           
          }
        };
      
      }
    }
}

