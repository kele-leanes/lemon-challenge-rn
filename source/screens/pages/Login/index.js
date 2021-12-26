import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import Logo from '../../../../assets/images/mapa.png';

import { styles } from './styles';
import { getUser } from '../../../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenContainer } from '../../../components/ScreenContainer';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '827080131298-crictnqipctatg78ncr5i8jbl2u34r8g.apps.googleusercontent.com',
    });
  }, []);

  const signIn = () => {
    dispatch(getUser());
  };

  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Covid App</Text>
        <Text style={styles.subtitle}>
          The app to find the latest Covid 19 information
        </Text>
      </View>
      <GoogleSigninButton
        style={styles.loginButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        disabled={isLoading}
        onPress={signIn}
      />
    </ScreenContainer>
  );
};

export default Login;
