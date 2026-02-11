import * as SecureStore from "expo-secure-store";

export const savePin = async (pin: string) => {
  await SecureStore.setItemAsync("user_pin", pin);
};

export const getPin = async () => {
  return await SecureStore.getItemAsync("user_pin");
};
