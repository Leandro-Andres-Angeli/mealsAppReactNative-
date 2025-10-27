import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoriesScreen from './CategoriesScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';
import { CATEGORIES } from '../data/15.1 dummy-data';
type CategoryMealsScreenProps = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.CATEGORY_MEALS_SCREEN
>;
const CategoryMealsScreen = ({
  route,
  navigation,
}: CategoryMealsScreenProps) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((el) => el.id === categoryId);
  return (
    <View>
      {selectedCategory && <Text> {selectedCategory.title}</Text>}
      <Text>CategoryMealsScreen</Text>
      <Button
        title='Navigate'
        onPress={() => navigation.navigate(ROUTES.MEAL_DETAIL_SCREEN, {})}
      ></Button>
      <Button title='Go back' onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
