import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Avatar = ({ onPress, url, smallSize = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image(smallSize)} source={{ uri: url }} />
    </TouchableOpacity>
  );
};
