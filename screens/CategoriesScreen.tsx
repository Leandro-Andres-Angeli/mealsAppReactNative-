import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ScreenStackProps } from 'react-native-screens';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ROUTES } from '../navigator/ROUTES';
import CategoryMealsScreen from './CategoryMealsScreen';
import { CATEGORIES } from '../data/15.1 dummy-data';
import { Category } from '../models/category';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import RenderGridItem from '../components/RenderGridItem';

type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParams,
  typeof ROUTES.CATEGORIES_SCREEN
>;
const CategoriesScreen = (props: CategoriesScreenProps) => {
  const navigation =
    useNavigation<
      NavigationProp<RootStackParams, typeof ROUTES.CATEGORIES_SCREEN>
    >();
  const onSelect = (id: any) =>
    navigation.navigate(ROUTES.CATEGORY_MEALS_SCREEN, {
      categoryId: id,
    });
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <FlatList
        style={{
          flex: 1,

          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
        }}
        data={CATEGORIES}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <RenderGridItem itemData={item} {...{ onSelect }} />
        )}
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
