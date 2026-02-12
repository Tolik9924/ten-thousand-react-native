import { LogoSVG } from "@/assets/LogoSvg";
import { Button } from "@/src/components/Button/Button";
import { InfoContainer } from "@/src/components/InfoContainer/InfoContainer";
import { Link } from "@/src/components/Link/Link";
import { View } from "react-native";
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
        <Link text="Sign in" navigate={() => navigation.navigate("Login")} />
        <Button
          title="Sign up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
