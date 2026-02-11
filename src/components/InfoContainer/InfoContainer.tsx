import { CraneSVG } from "@/assets/CraneSvg";
import { HomeSVG } from "@/assets/HomeSvg";
import { WorkBuildingSvg } from "@/assets/WorkBuildingSvg";
import { Text, View } from "react-native";
import { Wrapper } from "../Wrapper/Wrapper";
import { styles } from "./InfoContainer.styles";

export const InfoContainer = () => {
  return (
    <Wrapper>
      <View style={styles.circleItems}>
        <View
          style={[
            styles.circleItem,
            { backgroundColor: "#77CDD9", borderRadius: 50 },
          ]}
        >
          <CraneSVG />
        </View>
        <View
          style={[
            styles.circleItem,
            {
              backgroundColor: "#5AA5FA",
              borderRadius: 50,
              position: "absolute",
              margin: "auto",
              zIndex: 100,
            },
          ]}
        >
          <WorkBuildingSvg />
        </View>
        <View
          style={[
            styles.circleItem,
            { backgroundColor: "#565ED1", borderRadius: 50 },
          ]}
        >
          <HomeSVG />
        </View>
      </View>
      <Text style={styles.description}>Crowd real estate</Text>
    </Wrapper>
  );
};
