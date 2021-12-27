import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../pages/Home';
import { theme } from '../../constants/theme';
import { Details } from '../pages/Details';
import { getCurrentUser } from '../../store/auth/actions';
import { Profile } from '../pages/Profile';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.colors.secondary,
    },
    headerTintColor: theme.colors.lightText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Países" component={Home} />
        <Stack.Screen
          name="Casos confirmados"
          component={Details}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }

  return <StackNavigation />;
};

export default RootNavigator;
