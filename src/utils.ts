import { ErrorResponse } from "./miscellaneous/intercace"; 


export const KorapayDecorator = {
    forCatchingError() {

        return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

          console.log(target, propertyKey)

        const originalMethod = descriptor.value;
      
        descriptor.value = async function (...args: any) {

          try {

            const result =  await originalMethod.apply(this, args);

            return result

          } catch (error) {

            const e = error as any;
    
            const response = e.response as any;

            return{ ...response.data, status_code: response.status } as ErrorResponse
           
          }
        };
      
      }
    }
}

