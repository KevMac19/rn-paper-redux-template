import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import * as styles from './styles';

import {color} from 'theme';

export const Loader = () => {
  return (
    <View style={styles.mainView()}>
      <ActivityIndicator size={'small'} color={color.primary} />
    </View>
  );
};
