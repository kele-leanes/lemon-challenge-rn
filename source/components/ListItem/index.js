import React from 'react';
import Flag from 'react-native-flags';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  const onHandlePless = () => {
    navigation.navigate('Casos confirmados', {
      slug: item.Slug,
      title: item.Country,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlePless}>
      <Flag code={item.ISO2} size={32} type={'flat'} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.Country}
        </Text>
        <Text style={styles.subtitle}>Código ISO: {item.ISO2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
