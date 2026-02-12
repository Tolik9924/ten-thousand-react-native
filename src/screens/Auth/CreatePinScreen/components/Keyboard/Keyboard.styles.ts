import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    gap: 20,
  },
  delete: {
    fontSize: 20,
  },
  emptyItem: {
    width: 80,
    height: 80,
  },
  item: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 40,
  },
});
