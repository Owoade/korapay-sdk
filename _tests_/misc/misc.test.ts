import korapay from "../env";

describe("Miscellaneous Module", ()=>{

    it("should list all banks", async()=>{

        const response = await korapay.misc.list_banks();

        expect(response.status).toEqual(true);

        expect(response.data).toBeDefined()

    })

    it("should list all MMOs", async ()=>{

        const response = await korapay.misc.list_mmo("NG");

        expect(response.status).toEqual(true);

        expect(response.data).toBeDefined();
        
    })
})