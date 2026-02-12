import { savePin } from "@/src/services/storage";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

import { BackNavigate } from "@/src/components/BackNavigate/BackNavigate";
import { Button } from "@/src/components/Button/Button";
import { styles } from "./PinCode.styles";
import { Dots } from "./components/Dots/Dots";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { NumberKey } from "./constants";

export default function CreatePinScreen({ navigation }: any) {
  const [pin, setPin] = useState("");

  const handlePress = (digit: NumberKey) => {
    if (pin.length < 5) {
      setPin((prev) => prev + digit);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleSavePin = async () => {
    if (pin.length < 5) {
      Alert.alert("Error", "PIN must be 5 digits");
      return;
    }

    try {
      await savePin(pin);
      navigation.replace("PinCode");
    } catch (error) {
      Alert.alert("Error", "Failed to save PIN");
      console.error(error);
    }
  };

  return (
    <View style={styles.page}>
      <BackNavigate />

      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleSvg}>
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                color="#00A36D"
              />
            </View>
            <Text style={styles.title}>Create a pin code</Text>
          </View>
          <View style={styles.pinCodeContainer}>
            <Text style={styles.explainText}>enter 5 digit code: </Text>
            <Dots pin={pin} />
          </View>
        </View>

        <View style={styles.keyboardContainer}>
          <View style={styles.keyboard}>
            <Keyboard handleDelete={handleDelete} handlePress={handlePress} />
          </View>
          <View style={styles.button}>
            <Button title="Save PIN" onPress={handleSavePin} />
          </View>
        </View>
      </View>
    </View>
  );
}
