import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTSECRET;

function CheckToken(req, res, next) {
  const token = req.userDetails.id;

  if (!token) {
    console.log("no token found.");
  } else {
    if (!jwt.verify(token, secret)) {
      console.log("invalid token");
    } else {
      next();
    }
  }
}

export default CheckToken;
