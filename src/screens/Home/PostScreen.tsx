import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";

export default function PostScreen({ route }: any) {
  const { postId } = route.params;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", postId],
    queryFn: async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
  });

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (isError) return <Text style={{ padding: 20 }}>Error loading post</Text>;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {data.title}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>{data.body}</Text>
    </ScrollView>
  );
}
