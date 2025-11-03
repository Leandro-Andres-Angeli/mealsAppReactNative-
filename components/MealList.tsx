import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import MealItem from './MealItem';
import { IMeal } from '../models/meals';

const MealList = ({ displayMeals }: { displayMeals: IMeal[] }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => {
          return <MealItem itemData={item}></MealItem>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
export default MealList;
