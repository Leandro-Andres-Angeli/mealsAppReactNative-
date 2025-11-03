import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Category } from '../models/category';
import { RootStackParams } from '../navigator/MealsNavigator';
import { ROUTES } from '../navigator/ROUTES';
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface RenderGridItemProps {
  itemData: Category;
  onSelect: (id: any) => void;
}
const RenderGridItem = ({ itemData, onSelect }: RenderGridItemProps) => {
  let TouchableComp: typeof TouchableOpacity | typeof TouchableNativeFeedback;
  if (Platform.OS === 'android') {
    TouchableComp = TouchableNativeFeedback;
  } else {
    TouchableComp = TouchableOpacity;
  }
  return (
    <TouchableComp onPress={() => onSelect(itemData.id)} style={{}}>
      <View
        style={{
          alignContent: 'center',
          backgroundColor: itemData.color,
          paddingVertical: 50,
          height: '100%',
          position: 'relative',
          minWidth: '50%',
        }}
      >
        <Text
          numberOfLines={2}
          style={{ textAlign: 'right', fontFamily: 'open-sans', fontSize: 30 }}
        >
          {itemData.title}
        </Text>
      </View>
    </TouchableComp>
  );
};
export default RenderGridItem;
