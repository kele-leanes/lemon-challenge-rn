import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { deviceWidth } from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  loginButton: {
    width: 192,
    height: 48,
  },
  logo: {
    width: deviceWidth,
    height: 300,
    tintColor: theme.colors.lightGreen,
  },
  titleContainer: {
    flexGrow: 1,
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: theme.colors.lightText,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.white,
  },
});
