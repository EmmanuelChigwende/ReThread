import bcrypt from "bcrypt";

async function EncryptPassword(passwordString) {
  const hashedPassword = await bcrypt.hash(passwordString, 10);
  return hashedPassword;
}

export default EncryptPassword;
