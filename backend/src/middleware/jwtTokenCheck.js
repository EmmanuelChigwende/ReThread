import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function CheckToken(token) {
  if (!token) {
    return res.status(400).json({ message: "no token found" });
  } else {
    const secret = process.env.JWTSECRET;
    console.log(jwt.verify(token, secret));
  }
}

export default CheckToken;
