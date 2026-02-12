import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthScreen from "../screens/Auth/AuthScreen/AuthScreen";
import CreatePinScreen from "../screens/Auth/CreatePinScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import PinCodeScreen from "../screens/Auth/PinCodeScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="CreatePin" component={CreatePinScreen} />
      <Stack.Screen name="PinCode" component={PinCodeScreen} />
    </Stack.Navigator>
  );
}
