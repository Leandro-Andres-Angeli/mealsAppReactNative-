import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { IMeal } from '../models/meals';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';

const MealItem = ({ itemData }: { itemData: IMeal }) => {
  const navigation =
    useNavigation<
      NavigationProp<RootStackParams, typeof ROUTES.MEAL_DETAIL_SCREEN>
    >();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.MEAL_DETAIL_SCREEN, { mealId: itemData.id })
      }
    >
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: itemData.imageUrl }}
            style={styles.bgImage}
          >
            <Text style={styles.title} numberOfLines={1}>
              {' '}
              {itemData.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <Text>{itemData.duration}</Text>
          <Text>{itemData.complexity}</Text>
          <Text>{itemData.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#cccc',
  },
  mealRow: { flexDirection: 'row' },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default MealItem;
