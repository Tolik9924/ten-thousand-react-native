import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

import { styles } from "./Button.styles";

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: "primary" | "secondary";
};

export const Button = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};
