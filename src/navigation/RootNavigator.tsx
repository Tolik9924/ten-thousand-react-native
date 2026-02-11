import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CreatePinScreen from "../screens/Auth/CreatePinScreen";
import PinCodeScreen from "../screens/Auth/PinCodeScreen";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [pinExists, setPinExists] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPin = async () => {
      const pin = await SecureStore.getItemAsync("user_pin");
      setPinExists(!!pin);
    };
    if (isLoggedIn) {
      checkPin();
    }
  }, [isLoggedIn]);

  const getInitialRoute = () => {
    if (!isLoggedIn) return "AuthStack";
    if (isLoggedIn && !pinExists) return "CreatePin";
    if (isLoggedIn && pinExists) return "PinCode";
    return "AuthStack";
  };

  if (isLoggedIn && pinExists === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={getInitialRoute()}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="CreatePin" component={CreatePinScreen} />
      <Stack.Screen name="PinCode" component={PinCodeScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}
