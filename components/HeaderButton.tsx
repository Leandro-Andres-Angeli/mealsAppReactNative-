import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButton,
  HeaderButtonProps,
} from 'react-navigation-header-buttons';
interface CustomHeaderButtonProps extends HeaderButtonProps {}
const CustomHeaderButton = (props: CustomHeaderButtonProps) => {
  return (
    <HeaderButton
      {...props}
      title='Favorite'
      iconName='star-outline'
      iconSize={23}
      IconComponent={Ionicons}
    ></HeaderButton>
  );
};

export default CustomHeaderButton;
