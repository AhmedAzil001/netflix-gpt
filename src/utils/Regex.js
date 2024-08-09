export const validateCred = (email, password) => {
  const emailReg = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  const passwordReg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if(!emailReg) return "Email is not valid";
  if(!passwordReg) return "Password is not valid";

  return null
};
