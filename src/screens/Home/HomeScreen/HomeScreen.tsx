import { BottomMenu } from "@/src/components/BottomMenu/BottomMenu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SplashScreen from "../../Splash/SplashScreen";

import { styles } from "./HomeScreen.styles";

type List = {
  body: string;
  id: string;
  title: string;
  userId: string;
};

export default function HomeScreen({ navigation }: any) {
  const user = useSelector((state: RootState) => state.user);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=3",
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
  });

  if (isLoading) return <SplashScreen />;
  if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 24, marginBottom: 10 }}>
            Hello, {user.name || "User"}!
          </Text>

          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            Personal Advisor
          </Text>
          <View
            style={{ height: 50, backgroundColor: "#eee", marginBottom: 20 }}
          />

          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            Before you Start
          </Text>
          <View
            style={{ height: 50, backgroundColor: "#eee", marginBottom: 20 }}
          />

          <Text style={{ fontSize: 18, marginBottom: 10 }}>Posts</Text>
          <View>
            {data.map((item: List) => (
              <View key={item.id}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("PostScreen", { postId: item.id })
                  }
                >
                  <View
                    style={{
                      borderWidth: 1,
                      padding: 10,
                      marginBottom: 10,
                      borderRadius: 8,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                    <Text numberOfLines={2}>{item.body}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Button
            title="Go to Search"
            onPress={() => navigation.navigate("Search")}
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
}
