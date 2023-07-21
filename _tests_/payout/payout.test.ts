import korapay from "../env";

describe("Payout Module", ()=>{

    it("should initiate payout to bank", async ()=>{

        const payout_payload = {
            reference:  '1689909876743',
            destination: {
                type: "bank-account",
                amount: 2000,
                currency: "NGN",
                bank_account: {
                    bank: "033",
                    account: "212123467"
                },
                customer: {
                    email: "owoadeanu@checkoutonce.com"
                }
            }
        }

        const response = await korapay.payout.payout_to_bank( payout_payload);
        console.log(response );

        expect(response.status).toEqual(true);

        expect(response.data.customer.email ).toEqual(payout_payload.destination.customer.email)

    })

})