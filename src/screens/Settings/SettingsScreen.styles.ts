import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  personInfo: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
  },
  name: {
    fontSize: 20,
  },
  languages: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  languagesTitle: {
    fontSize: 20,
  },
  changeLanguage: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 70,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    marginTop: 100,
  },
});
