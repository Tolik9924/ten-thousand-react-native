import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PinCodeScreen from "../screens/Auth/PinCodeScreen";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [biometricChecked, setBiometricChecked] = useState(false);

  useEffect(() => {
    const checkBiometric = async () => {
      if (isLoggedIn) {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        if (compatible) {
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login with Biometrics",
          });
          if (result.success) setBiometricChecked(true);
        } else setBiometricChecked(true);
      }
    };
    checkBiometric();
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn && <AuthStack />}
      {isLoggedIn && !biometricChecked && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PinCode" component={PinCodeScreen} />
        </Stack.Navigator>
      )}
      {isLoggedIn && biometricChecked && <HomeStack />}
    </>
  );
}
