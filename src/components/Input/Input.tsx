import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./Input.styles";

interface CustomInputProps extends TextInputProps {
  value: string;
  onChangeText: () => void;
  label?: string;
  error?: string;
  secureText?: boolean;
}

const Input: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  label,
  error,
  secureText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureText);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <TextInput
          {...props}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureText && !isPasswordVisible}
        />
        {secureText && (
          <TouchableOpacity
            style={styles.showPassword}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="#00A36D"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.errorContainer}>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default Input;
