import { StyleSheet } from 'react-native';
import { theme } from '../../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  text: {
    color: theme.colors.lightText,
  },
  bold: {
    fontWeight: 'bold',
  },
});
