import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {BottomNavigation} from '../bottomTabNavigation';
import {AuthStackNavigation} from '../authStackNavigation';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export const MainStackNavigation = () => {
  const {isUserLogin} = useSelector(state => state.authReducer);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isUserLogin ? (
          <>
            <Stack.Screen
              name="authStackNavigation"
              component={AuthStackNavigation}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="bottomNavigation"
              component={BottomNavigation}
            />
          </>
        )}

        {/* INFO: all screens will be added here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
