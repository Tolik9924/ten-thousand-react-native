import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { getPin } from "../../services/storage";

export default function PinCodeScreen({ navigation }: any) {
  const [inputPin, setInputPin] = React.useState("");

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (compatible) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Login with Biometrics",
        });
        if (result.success) navigation.replace("HomeStack");
      }
    })();
  }, []);

  const handleSubmit = async () => {
    const savedPin = await getPin();
    if (inputPin === savedPin) {
      navigation.replace("HomeStack");
    } else {
      Alert.alert("Incorrect PIN");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Enter PIN</Text>
      <TextInput
        value={inputPin}
        onChangeText={setInputPin}
        keyboardType="numeric"
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
