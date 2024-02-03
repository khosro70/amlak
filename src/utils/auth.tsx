var bcrypt = require("bcryptjs");

async function hashPassword(password: any) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password: any, hashedPassword: any) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

export { hashPassword, verifyPassword };
