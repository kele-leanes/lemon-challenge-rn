import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{item.Country}</Text>
        <Text style={styles.subtitle}>{item.ISO2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
