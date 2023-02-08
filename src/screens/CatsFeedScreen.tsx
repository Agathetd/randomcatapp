/* eslint-disable react-native/no-unused-styles /
/ eslint-disable camelcase */
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

import { useBoss } from "../hooks/useBoss";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

interface ItemProps {
name: string;
id: string;
description: string;
image: string;
}

const Item = ({
name,
id,
description,
image,
}: ItemProps) => (
<Card style={styles.item}>
<Card.Content>
<Text>Name: {name}</Text>
<Text>ID: {id}</Text>
<Text>Description: {description}</Text>
<Image source={{ uri: image }} style={styles.image} />
</Card.Content>
</Card>
);

export const BossFeedScreen = () => {
const navigation = useNavigation();
const bosses = useBoss();
const bossesArray = Object.values(bosses);
if (!bosses) {
    return <Text>No bosses found!</Text>;
  }
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={bossesArray}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            id={item.id}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
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
image: {
width: 200,
height: 200,
},
});  