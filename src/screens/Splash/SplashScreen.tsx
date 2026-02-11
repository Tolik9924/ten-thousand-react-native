import { SplashSVG } from "@/assets/SplashSvg";
import React from "react";
import { StyleSheet, View } from "react-native";

interface SplashScreenProps {
  showLoader?: boolean; // чи показувати спінер під картинкою
}

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <View style={styles.container}>
      <SplashSVG />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // можна поставити фон свій
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, // відступ для спінера
  },
});

export default SplashScreen;
