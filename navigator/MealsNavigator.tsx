import { View, Text, Easing } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './ROUTES';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { CATEGORIES } from '../data/15.1 dummy-data';
import {
  CommonActions,
  createStaticNavigation,
  type ParamListBase,
} from '@react-navigation/native';
import { MEALS } from '../data/mealsDummyData';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { BottomNavigation } from 'react-native-paper';
type h = ParamListBase;
export type RootStackParams = {
  [ROUTES.CATEGORIES_SCREEN]: {};
  [ROUTES.CATEGORY_MEALS_SCREEN]: {
    categoryId: string;
  };
  [ROUTES.MEAL_DETAIL_SCREEN]: {
    mealId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParams, undefined>();
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
        options={({ route }) => {
          const { categoryId } = route.params;
          const category = CATEGORIES.find((cat) => cat.id === categoryId);

          return {
            headerTitle: category?.title ?? 'Meals',
            headerTitleAlign: 'center',
          };
        }}
      ></Stack.Screen>
      <Stack.Screen
        name={ROUTES.MEAL_DETAIL_SCREEN}
        component={MealDetailScreen}
        options={({ route }) => {
          const meal = MEALS.find((el) => el.id === route.params.mealId);
          return {
            headerTitle: meal?.title,
            headerRight: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title='star-outline'
                    iconName='star-outline'
                    onPress={() => console.log('favs')}
                  ></Item>
                </HeaderButtons>
              );
            },
          };
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const FavoritesStack = createNativeStackNavigator<{
  [ROUTES.MEAL_DETAIL_SCREEN]: {
    mealId: string;
  };
  FavoritesScreen: {};
}>();
const FavoritesNavigator = () => {
  return (
    <FavoritesStack.Navigator initialRouteName='FavoritesScreen'>
      <FavoritesStack.Screen
        component={FavoritesScreen}
        options={{ headerTitle: 'Your Favorites' }}
        name='FavoritesScreen'
      ></FavoritesStack.Screen>
      <FavoritesStack.Screen
        component={MealDetailScreen}
        name={ROUTES.MEAL_DETAIL_SCREEN}
      ></FavoritesStack.Screen>
    </FavoritesStack.Navigator>
  );
};
const MealsFavTabs = createBottomTabNavigator({
  screens: {
    Meals: {
      screen: MealsNavigator,
      options: {
        tabBarIcon({ color }) {
          return (
            <Ionicons
              color={color}
              name='fast-food-outline'
              size={20}
            ></Ionicons>
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      options: {
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarIcon({ color }) {
          return (
            <Ionicons color={color} name='star-outline' size={20}></Ionicons>
          );
        },
      },
    },
  },
  screenOptions: {
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'grey',
  },
  tabBar: ({ navigation, state, descriptors, insets }) => (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) =>
        descriptors[route.key].options.tabBarIcon?.({
          focused,
          color,
          size: 24,
        }) || null
      }
      activeColor='red'
      animationEasing={Easing.bounce}
      shifting={true}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
            ? options.title
            : route.name;

        return label;
      }}
    />
  ),
});
const MealsFavTabsNavigator = createStaticNavigation(MealsFavTabs);
// export default MealsNavigator;
export default MealsFavTabsNavigator;
