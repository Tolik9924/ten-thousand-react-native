import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#FA8A34",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
