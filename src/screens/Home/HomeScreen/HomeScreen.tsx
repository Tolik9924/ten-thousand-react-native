import { BottomMenu } from "@/src/components/BottomMenu/BottomMenu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Hello, {user.name || "User"}!
            </Text>
          </View>

          <View style={styles.personalAdvisorContainer}>
            <View style={styles.advice}>
              <Text style={styles.adviceTitle}>Personal Advisor</Text>
              <Text style={styles.adviceExplanation}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>

          <View style={styles.personalAdvisorContainer}>
            <View style={styles.advice}>
              <Text style={styles.adviceTitle}>Before you start</Text>
              <Text style={styles.adviceExplanation}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>

          <View style={styles.postsContainer}>
            <Text style={styles.postsTitle}>Posts</Text>
            <View>
              {data.map((item: List) => (
                <View key={item.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("PostScreen", { postId: item.id })
                    }
                  >
                    <View style={styles.post}>
                      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                      <Text numberOfLines={2}>{item.body}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
}
