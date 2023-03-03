import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {DemoScreen} from 'screens';
import {LocalizationContext} from '../../App';

const AuthStack = createStackNavigator();

export const AuthStackNavigation = () => {
  const {t} = useContext(LocalizationContext);
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="loginScreen" component={DemoScreen} />

      {/* INFO: all auth stack screen will be added here */}
    </AuthStack.Navigator>
  );
};
