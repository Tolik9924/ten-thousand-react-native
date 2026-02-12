import { savePin } from "@/src/services/storage";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./PinCode.styles";

export default function CreatePinScreen({ navigation }: any) {
  const [pin, setPin] = useState("");

  const handleSavePin = async () => {
    if (pin.length < 4 || pin.length > 6) {
      Alert.alert("Error", "PIN must be 4-6 digits");
      return;
    }

    try {
      await savePin(pin);
      Alert.alert("Success", "PIN saved successfully");

      await savePin(pin);
      navigation.replace("PinCode");
    } catch (error) {
      Alert.alert("Error", "Failed to save PIN");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={(text) => setPin(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
        maxLength={6}
        secureTextEntry
        placeholder="Enter PIN"
      />

      <TouchableOpacity style={styles.button} onPress={handleSavePin}>
        <Text style={styles.buttonText}>Save PIN</Text>
      </TouchableOpacity>
    </View>
  );
}
