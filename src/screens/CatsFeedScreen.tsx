/* eslint-disable react-native/no-unused-styles */
/* eslint-disable camelcase */
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

interface ItemProps {
  name: string;
  model: string;
  url: string;
}
const navigation = useNavigation();
const { isLoading, isError, data } = useCats();

const Item = ({
  name,
  model,
  url,
}: ItemProps) => (
  <Card style={styles.item}>
    <Card.Title title={name} subtitle={model} />
    <Card.Content>


    </Card.Content>
  </Card>
);

export const CatsFeedScreen = () => {
  
  if (isLoading) {
    return <Text>Loading ...</Text>;
  }
  if (isError) {
    return <Text>Error !</Text>;
  }

  // var text = ({model}: ItemProps) => {model};
  // text.replace(" ","");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            model={item.model}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {},
});
