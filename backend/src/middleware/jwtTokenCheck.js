import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTSECRET;

function CheckToken(token) {
  if (!token) {
    console.log("token not found or is invalid");
  }
  const confirmation = jwt.verify(token, secret);
  return confirmation;
}

export default CheckToken;
