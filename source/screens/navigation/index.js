import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import { theme } from '../../constants/theme';
import { Details } from '../pages/Details';

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
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return <Login />;
  }

  return <StackNavigation />;
};

export default RootNavigator;
