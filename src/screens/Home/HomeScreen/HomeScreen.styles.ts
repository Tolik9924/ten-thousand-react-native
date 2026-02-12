import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    width: "100%",
  },
  welcomeContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#FA8A34",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 10,
    color: "#fff",
  },
  personalAdvisorContainer: {
    width: "100%",
    marginTop: 10,
    padding: 20,
  },
  advice: {
    backgroundColor: "#EE6363",
    width: "100%",
    height: 200,
    borderRadius: 15,
    padding: 12,
    boxSizing: "border-box",
    gap: 10,
  },
  adviceTitle: {
    color: "#fff",
    fontSize: 20,
  },
  adviceExplanation: {
    fontSize: 15,
    color: "#fff",
  },
  postsContainer: {
    padding: 20,
  },
  postsTitle: {
    color: "#606773",
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 400,
  },
  post: {
    backgroundColor: "#fff",
    padding: 12,
    boxSizing: "border-box",
    marginBottom: 10,
    borderRadius: 16,
  },
});
