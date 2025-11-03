import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '../navigator/ROUTES';
import { RootStackParams } from '../navigator/MealsNavigator';
import { MEALS } from '../data/mealsDummyData';
type MealDetailScreen = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.MEAL_DETAIL_SCREEN
>;
const MealDetailScreen = ({ navigation, route }: MealDetailScreen) => {
  // console.log(route.params.mealId)
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);
  return (
    <View>
      <Text>MealDetailScreen</Text>
      <Text> {JSON.stringify(meal)} </Text>
      <Button title='Go Home' onPress={() => navigation.popToTop()}></Button>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
