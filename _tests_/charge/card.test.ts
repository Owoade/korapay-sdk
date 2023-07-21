import korapay from "../env";

describe("Card Module", ()=>{

    it("Authorize a card", async()=>{

        const authorization_payload = {
            transaction_reference: Date.now().toString(),
            authorization: {
                pin: "1202",
                otp: "1123"
            },
            avs:{
                state: "osun",
                city: "osogbo",
                country: "naija",
                address: "lekki phase 0.5",
                zip_codes: "10001"
            }
        }

        const response = await korapay.charge.card.authorize(authorization_payload);

        expect( response.status ).toEqual(true);

        expect(response.data.transaction_reference ).toEqual(authorization_payload.transaction_reference );

        console.log(response );
        
        expect(response.data.authorization ).toEqual(authorization_payload.authorization);

    })

    it("should resend otp", async ()=>{

        const reference = '1689909876743';
        
        const response = await korapay.charge.card.resend_otp( reference );

        console.log(response );

        expect(response.status).toEqual(true);

    } )
})