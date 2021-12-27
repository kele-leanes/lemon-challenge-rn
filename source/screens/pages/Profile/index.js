import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '../../../components/Avatar';
import { ScreenContainer } from '../../../components/ScreenContainer';
import { userLogout } from '../../../store/auth/actions';
import { styles } from './styles';

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user.user);

  const onHandleLogOut = () => {
    dispatch(userLogout());
  };

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.wrapper}>
        <Avatar url={user.photo} />
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subtitle}>{user.email}</Text>
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={onHandleLogOut}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};
