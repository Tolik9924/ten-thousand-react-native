import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./BottomMenu.styles";

const MENU = [
  {
    iconName: "home",
    name: "Home",
    navigate: "Home",
  },
  {
    iconName: "briefcase",
    name: "Portfolio",
    navigate: "Home",
  },
  {
    iconName: "search",
    name: "Search",
    navigate: "Search",
  },
  {
    iconName: "person",
    name: "Profile",
    navigate: "Settings",
  },
] as const;

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BottomMenu = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  console.log("ROUTE: ", route);

  return (
    <View style={styles.container}>
      {MENU.map((item) => (
        <TouchableOpacity
          style={styles.item}
          key={item.name}
          onPress={() => navigation.navigate(item.navigate)}
        >
          <Ionicons
            name={item.iconName}
            size={28}
            color={item.name === route.name ? "#FA8A34" : "#858C94"}
          />
          <Text
            style={[
              styles.menuText,
              route.name === item.name && styles.routeText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
