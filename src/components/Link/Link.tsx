import { Text } from "react-native";
import { styles } from "./Link.styles";

export const Link = ({
  text,
  navigate,
}: {
  text: string;
  navigate: () => void;
}) => {
  return (
    <Text style={styles.textLink} onPress={navigate}>
      {text}
    </Text>
  );
};
