import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  delete: {
    fontSize: 20,
    lineHeight: 40,
  },
  emptyItem: {
    width: 100,
    height: 60,
  },
  item: {
    width: 100,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 40,
  },
});
