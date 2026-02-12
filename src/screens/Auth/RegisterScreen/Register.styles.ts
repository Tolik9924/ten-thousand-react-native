import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {},
  chevronBack: {
    position: "absolute",
    top: 50,
    left: 10,
  },
  container: {
    marginTop: 150,
    backgroundColor: "#fff",
    height: "80%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 12,
  },
  header: {
    padding: 20,
    boxSizing: "border-box",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEFF5",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  userContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "#E9F7F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    display: "flex",
    gap: 5,
  },
  title: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 24,
    color: "#06070A",
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 16,
    color: "#606773",
  },
  formContainer: {
    padding: 20,
    boxSizing: "border-box",
  },
  formItem: {
    display: "flex",
    gap: 5,
  },
});
