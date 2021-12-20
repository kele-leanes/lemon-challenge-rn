import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Logo from '../../../../assets/images/mapa.png';

import { styles } from './styles';

const Login = () => {
  const [user, setUserInfo] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '827080131298-crictnqipctatg78ncr5i8jbl2u34r8g.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error.code, 'error');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
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
        onPress={signIn}
      />
    </SafeAreaView>
  );
};

export default Login;
