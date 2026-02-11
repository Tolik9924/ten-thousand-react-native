import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PinCodeScreen from "../screens/Auth/PinCodeScreen";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <>
          <Stack.Screen name="PinCode" component={PinCodeScreen} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
        </>
      )}
    </Stack.Navigator>
  );
}
