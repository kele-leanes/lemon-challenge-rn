import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const DetailsItem = ({ item }) => {
  const date = new Date(item.Date).toLocaleDateString('es-AR');

  const toCommas = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.bold]}>Fecha</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View>
        <Text style={[styles.text, styles.bold]}>Numero de casos</Text>
        <Text style={[styles.text, styles.right]}>{toCommas(item.Cases)}</Text>
      </View>
    </View>
  );
};
