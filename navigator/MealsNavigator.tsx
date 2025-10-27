import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './ROUTES';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
export type RootStackParams = {
  [ROUTES.CATEGORIES_SCREEN]: {};
  [ROUTES.CATEGORY_MEALS_SCREEN]: {
    categoryId: string;
  };
  [ROUTES.MEAL_DETAIL_SCREEN]: {};
};
const Stack = createNativeStackNavigator<RootStackParams>();
const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.CATEGORIES_SCREEN}
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'purple',
          },

          headerTintColor: 'white',
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={ROUTES.CATEGORY_MEALS_SCREEN}
        component={CategoryMealsScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={ROUTES.MEAL_DETAIL_SCREEN}
        component={MealDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MealsNavigator;
