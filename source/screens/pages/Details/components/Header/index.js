import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Header = ({ desc, order, onPressDesc, onPressOrder }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressOrder}>
        <Text style={styles.text}>
          Ordenar por{' '}
          <Text style={styles.bold}>
            {order === 'Date' ? 'Fecha' : 'Casos'}
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDesc}>
        <Text style={[styles.text, styles.bold]}>
          {desc ? 'Ascendente' : 'Descendente'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
