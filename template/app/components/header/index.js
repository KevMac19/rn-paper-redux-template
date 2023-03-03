import React from 'react';
import {Appbar} from 'react-native-paper';
import * as styles from './styles';

export const Header = props => {
  const {navigation, back, options} = props;
  return (
    <Appbar.Header style={styles.headerContainer()} mode="center-aligned">
      {back ? (
        <Appbar.BackAction
          // * go back to random screen issue fix REF: https://stackoverflow.com/questions/45489343/react-navigation-back-and-goback-not-working
          onPress={() => navigation.goBack(navigation.getState().key)}
          animated
        />
      ) : null}
      <Appbar.Content title={options.title} titleStyle={styles.titleStyle()} />
      {options?.headerRight ? options?.headerRight() : null}
    </Appbar.Header>
  );
};
