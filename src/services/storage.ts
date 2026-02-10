import * as Keychain from "react-native-keychain";

export const savePin = async (pin: string) => {
  await Keychain.setGenericPassword("pin", pin, {
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
  });
};

export const getPin = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) return credentials.password;
  return null;
};
