import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ScreenStackProps } from 'react-native-screens';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '../navigator/ROUTES';
import CategoryMealsScreen from './CategoryMealsScreen';
import { CATEGORIES } from '../data/15.1 dummy-data';
import { Category } from '../models/category';

const renderGridItem = (itemData: Category) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{itemData.title}</Text>
    </View>
  );
};

type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.CATEGORIES_SCREEN
>;
const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={CATEGORIES}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => renderGridItem(item)}
        numColumns={2}
      ></FlatList>
    </View>
  );
  //   return (
  //     <View>
  //       <Text>CategoriesScreen</Text>
  //       <Button
  //         onPress={() => navigation.navigate(ROUTES.CATEGORY_MEALS_SCREEN, {})}
  //         title='Navigate'
  //       ></Button>
  //     </View>
  //   );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
