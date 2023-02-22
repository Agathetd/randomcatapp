import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useCats } from "../hooks/useCats";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

interface Cat {
  id: string;
  url: string;
}

const queryClient = new QueryClient();

export default function CatsFeedScreen() {
  const navigation = useNavigation();
  const { data: cats } = useQuery<Cat[]>("cats", async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const data = await response.json();
    return data.map((cat: any) => ({ url: cat.url }));
  });

  return (
    <SafeAreaView style={styles.safeContainer}>
      <QueryClientProvider client={queryClient}>
        <FlatList
          data={cats}
          keyExtractor={(cat) => cat.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Image style={styles.image} source={{ uri: item.url }} />
              </Card.Content>
            </Card>
          )}
        />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
