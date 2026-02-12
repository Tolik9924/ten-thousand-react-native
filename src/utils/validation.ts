export const validatePassword = (password: string) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]\\/~`+=;']).{8,64}$/;
  return regex.test(password);
};
