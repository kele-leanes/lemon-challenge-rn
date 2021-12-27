import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.lightText,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.white,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    color: theme.colors.lightText,
  },
});
