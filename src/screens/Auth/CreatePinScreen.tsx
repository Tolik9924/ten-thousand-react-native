import { savePin } from "@/src/services/storage";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
      <Text style={styles.title}>Create PIN Code</Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
