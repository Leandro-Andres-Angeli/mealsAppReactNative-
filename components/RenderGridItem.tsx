import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Category } from '../models/category';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';
import { Text, TouchableOpacity, View } from 'react-native';
const RenderGridItem = ({ itemData }: { itemData: Category }) => {
  const navigation =
    useNavigation<
      NavigationProp<RootStackParams, typeof ROUTES.CATEGORIES_SCREEN>
    >();
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() =>
        navigation.navigate(ROUTES.CATEGORY_MEALS_SCREEN, {
          categoryId: itemData.id,
        })
      }
    >
      <View>
        <Text>{itemData.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RenderGridItem;
