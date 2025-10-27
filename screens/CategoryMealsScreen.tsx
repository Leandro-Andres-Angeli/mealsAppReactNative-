import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoriesScreen from './CategoriesScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';
type CategoryMealsScreenProps = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.CATEGORY_MEALS_SCREEN
>;
const CategoryMealsScreen = ({ navigation }: CategoryMealsScreenProps) => {
  return (
    <View>
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
