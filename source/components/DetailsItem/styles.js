import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.lightText,
  },
  bold: {
    fontWeight: 'bold',
  },
  right: {
    textAlign: 'right',
  },
});
