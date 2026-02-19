import bcrypt from "bcrypt";

async function CheckHash(passwordhash, hashedPassword) {
  if (!passwordhash) {
    console.log("please enter valid hash");
  }
  const valid = await bcrypt.compare(passwordhash, hashedPassword);
  return valid;
}

export default CheckHash;
