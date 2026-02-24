import jwt from "jsonwebtoken";

function DecodeToken(token) {
  const parts = token.split(" ")
  if(parts.length !== 2 || parts[0] !== "Bearer"){
    console.log("invalid token provided")
  }
  else{
    const user = jwt.decode(parts[1])
    return user
  }
}

export default DecodeToken;
