import jwt from "jsonwebtoken";

function DecodeToken(token) {
  try {
    const errors = [];
    const tokenParts = token.split(" ");

    if (tokenParts !== 2 || tokenParts[0] !== "Bearer") {
      errors.push("invalid token");
    } else {
      if (errors.lenght === 0) {
        const decodedToken = jwt.decode(token);
        return decodedToken;
      }
      else{
        return errors
      }
    }
  } catch (err) {
    console.log("failed to decode token", err);
  }
}

export default DecodeToken;
