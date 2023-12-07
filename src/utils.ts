import { ErrorResponse } from "./miscellaneous/intercace.js";

export const KorapayDecorator = {
  forCatchingError() {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      

      const originalMethod = descriptor.value;

      descriptor.value = async function (...args: any) {
        try {
          const result = await originalMethod.apply(this, args);

          return result;
        } catch (error) {
          const e = error as any;

          const response = e.response as any;

          return {
            ...response.data,
            status_code: response.status,
          } as ErrorResponse;
        }
      };
    };
  },
};


