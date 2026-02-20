import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWTSECRET;

function CheckToken(req, res, next) {
  const authHeader = req.headers.authorization;

  // 1️⃣ Check if header exists
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // 2️⃣ Check format (Bearer <token>)
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Invalid token format" });
  }

  const token = parts[1];

  try {
    // 3️⃣ Verify token
    const decoded = jwt.verify(token, secret);

    // 4️⃣ Attach user info to request
    req.user = decoded;

    next(); // 5️⃣ Allow request to continue
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default CheckToken;
