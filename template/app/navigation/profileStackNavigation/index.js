import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {DemoScreen} from 'screens';
import {Header} from 'components';
import {LocalizationContext} from '../../App';

const ProfileStack = createStackNavigator();

export const ProfileStackNavigation = () => {
  const {t} = useContext(LocalizationContext);
  return (
    <ProfileStack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerShown: false,
        animationEnabled: true,
      }}>
      <ProfileStack.Screen name="profileScreen" component={DemoScreen} />

      {/* INFO: all profile tab screen will be added here */}
    </ProfileStack.Navigator>
  );
};
