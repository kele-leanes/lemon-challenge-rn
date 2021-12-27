import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: smallSize => ({
    borderRadius: 50,
    width: smallSize ? 30 : 100,
    height: smallSize ? 30 : 100,
  }),
});
