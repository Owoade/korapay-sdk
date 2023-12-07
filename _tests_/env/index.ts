import dotenv from "dotenv";
import Korapay from "../../dist";

dotenv.config();

const public_key = process.env.KORAPAY_PUBLIC_KEY as string;

const secret_key = process.env.KORAPAY_SECRET_KEY as string;

const korapay = new Korapay(secret_key,  public_key);

export default korapay;