import * as React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';

import {ProfileStackNavigation} from '../profileStackNavigation';
import {HomeStackNavigation} from '../homeStackNavigation';
import {size, color, IcHome, IcAvatar} from 'theme';

// INFO: created bottom tab navigator
const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const {colors: paperTheme} = useTheme();

  // INFO: show or hide bottom-tab bar for specific screen
  const getBottomTabVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // INFO: reference link - https://reactnavigation.org/docs/upgrading-from-5.x/#the-tabbarvisible-option-is-no-longer-present
    // INFO: property to show bottom tab
    const show = {display: 'flex'};

    // INFO: property to hide bottom tab
    const hide = {display: 'none'};

    // INFO: check screen names to hide bottom tab, default is shown bottom tab
    switch (routeName) {
      case 'groupChatScreen':
        return hide;
      default:
        return show;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // INFO: used to show hide bottom tab for specific screen
        tabBarStyle: getBottomTabVisibility(route),
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        // INFO: updated initial active and in-active color
        tabBarActiveTintColor: paperTheme.secondary,
        tabBarInactiveColor: color.lightGray,
        unmountOnBlur: true,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({color: tabColor, size: iconSize}) => (
            <IcHome height={iconSize} width={iconSize} fill={tabColor} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({color: tabColor, size: iconSize}) => (
            <IcAvatar height={iconSize} width={iconSize} fill={tabColor} />
          ),
        }}
      />
      {/* INFO: other tabs will added here */}
    </Tab.Navigator>
  );
};
