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
  url: string;
}
const navigation = useNavigation();

const Item = ({
  url
}: ItemProps) => (
  <Card style={styles.item}
  >
    <Card.Title title="Cat" />
    <Card.Content>
      <Image style={styles.image} source={{url}}
    </Card.Content>
  </Card>
)







export default function StarshipFeedScreen() {
  const url = useCats();

  // var text = ({model}: ItemProps) => {model};
  // text.replace(" ","");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Image source={{url}}></Image>
    </SafeAreaView>
  );
}

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
