import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginBottom: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  subtitle: {
    fontStyle: 'italic',
  },
});
