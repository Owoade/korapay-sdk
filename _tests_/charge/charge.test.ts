import korapay from "../env";

describe("Charge module", ()=>{

    it("should create a charge object", async ()=>{

        const charge_payload = {
            customer: {
                name: "Makinde Anuoluwapo",
                email: "owoade@checkoutonce.com"
            },
            amount: 2000,
            reference: Date.now().toString(),
            currency: "NGN",
            notification_url: "https://webhook.checkoutonce.com",
            narration: "Test payment"
        };

        const response = await korapay.charge?.initialize( charge_payload);

        expect( response.status).toEqual(true);

        expect( response.data.reference  ).toEqual( charge_payload.reference )

        expect( response.data.checkout_url ).toBeDefined();

    })

   describe('should query a transaction', () => {

     it('should return 404 for an invalid reference', async () => {

       const reference = Date.now().toString();

       const response = await korapay.charge.query(reference);

       expect(response.status).toEqual(false);

       expect(response.data).toEqual(null);

     });

     it("should return a transaction object", async()=>{

        const reference = '1689909876743';

        const response = await korapay.charge.query(reference);

        expect( response.status).toEqual(true);

        expect(response.data.reference ).toEqual(reference);

        
     })

   });

})

