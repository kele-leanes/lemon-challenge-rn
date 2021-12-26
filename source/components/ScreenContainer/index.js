import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

export const ScreenContainer = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};
