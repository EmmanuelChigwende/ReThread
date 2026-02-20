import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWTSECRET;

async function GenerateToken(userDetails) {
  try {
    const token = jwt.sign({ id:userDetails }, secret, { expiresIn: "1hr" });
    return token;
  } catch (err) {
    console.log("failed to create token", err);
  }
}

export default GenerateToken;
