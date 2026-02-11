import * as SecureStore from "expo-secure-store";

export const savePin = async (pin: string) => {
  await SecureStore.setItemAsync("user_pin", pin);
};

export const getPin = async () => {
  return await SecureStore.getItemAsync("user_pin");
};

export const deletePin = async () => {
  try {
    await SecureStore.deleteItemAsync("user_pin");
  } catch (error) {
    console.error("Failed to delete PIN:", error);
  }
};
