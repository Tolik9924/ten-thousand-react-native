import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60, // ⬅️ cacheTime перейменували!
  });

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (isError) return <Text style={{ padding: 20 }}>Error loading posts</Text>;

  const filteredPosts = data?.filter((post: any) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search posts..."
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
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
        )}
      />
    </View>
  );
}
