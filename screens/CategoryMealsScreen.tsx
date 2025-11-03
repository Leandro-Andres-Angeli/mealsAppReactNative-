import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoriesScreen from './CategoriesScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';
import { CATEGORIES } from '../data/15.1 dummy-data';
import { MEALS } from '../data/mealsDummyData';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
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
  if (!selectedCategory) {
    return (
      <View>
        <Text>Category Not Found</Text>
      </View>
    );
  }
  const displayMeals = MEALS.filter((meal) =>
    meal.categoryId.includes(selectedCategory?.id)
  );

  return (
    <>
      {selectedCategory && <MealList displayMeals={displayMeals}></MealList>}

      <Button title='Go back' onPress={() => navigation.goBack()}></Button>
    </>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
