import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWTSECRET;

async function GenerateToken(id) {
  const token = jwt.sign({ id: id }, secret, { expiresIn: "1hr" });
  return token;
}

export default GenerateToken;
