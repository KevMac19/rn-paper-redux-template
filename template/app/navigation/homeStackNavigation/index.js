import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {DemoScreen} from 'screens';
import {Header} from 'components';
import {LocalizationContext} from '../../App';

const HomeStack = createStackNavigator();

// INFO: all home tab screen will be added here
export const HomeStackNavigation = () => {
  const {t} = useContext(LocalizationContext);
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerShown: false,
        animationEnabled: true,
      }}>
      {/* // * COMMON SCREENS */}
      <HomeStack.Screen name="dashboardScreen" component={DemoScreen} />

      {/* INFO: all home tab screen will be added here */}
    </HomeStack.Navigator>
  );
};
