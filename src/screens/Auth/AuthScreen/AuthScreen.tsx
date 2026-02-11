import { LogoSVG } from "@/assets/LogoSvg";
import { Button } from "@/src/components/Button/Button";
import { InfoContainer } from "@/src/components/InfoContainer/InfoContainer";
import { Text, View } from "react-native";
import { styles } from "./AuthScreen.styles";

const AuthScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.sideContent}>
          <View style={styles.logoContainer}>
            <LogoSVG />
          </View>
          <InfoContainer />
          <InfoContainer />
        </View>
        <View style={[styles.sideContent, { marginTop: 75 }]}>
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </View>
      </View>
      <View style={styles.linksContainer}>
        <Text
          style={styles.textLink}
          onPress={() => navigation.navigate("Login")}
        >
          Sign in
        </Text>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
