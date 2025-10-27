import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '../navigator/ROUTES';
import { RootStackParams } from '../navigator/MealsNavigator';
type MealDetailScreen = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.MEAL_DETAIL_SCREEN
>;
const MealDetailScreen = ({ navigation }: MealDetailScreen) => {
  return (
    <View>
      <Text>MealDetailScreen</Text>
      <Button title='Go Home' onPress={() => navigation.popToTop()}></Button>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
