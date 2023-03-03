import React from 'react';
import {View, Text, Image} from 'react-native';
import Lottie from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as styles from './styles';
import {IcAvatar, lottieIcons, fontSize, images, fonts} from 'theme';

import {userLogin} from 'redux-actions';
import {Button} from 'react-native-paper';

export const DemoScreen = () => {
  const dispatch = useDispatch();

  const {isUserLogin} = useSelector(state => state.authReducer);

  const demoFunction = () => {
    // INFO: sample redux action
    dispatch(userLogin(!isUserLogin));
  };

  return (
    <View style={styles.container()}>
      <Text style={{fontSize: fontSize.small}}>DemoScreen</Text>
      {/* INFO: Redux persisted state example */}
      <Text style={{fontSize: fontSize.small}}>
        User Login status : {`${isUserLogin}`}
      </Text>
      {/* INFO: SVG Image Example */}
      <IcAvatar height={30} width={40} fill={'red'} />
      {/* INFO: Lottie file example */}
      <Lottie
        source={lottieIcons.loader}
        style={{height: 50, width: 50}}
        autoPlay
        loop
      />
      <Button onPress={demoFunction}>
        <Text style={{fontSize: 20, fontFamily: fonts.robotoBlack}}>
          {isUserLogin ? 'Logout' : 'Login'}
        </Text>
      </Button>
      {/* INFO: Image file  example */}
      <Image source={images.imgAvatar} style={{height: 50, width: 50}} />

      {/* INFO: Roboto-Fonts */}
      <Text style={{fontSize: 20, fontFamily: fonts.robotoLight}}>Light</Text>
      <Text style={{fontSize: 20, fontFamily: fonts.robotoThin}}>Thin</Text>
      <Text style={{fontSize: 20, fontFamily: fonts.robotoRegular}}>
        Regular
      </Text>
      <Text style={{fontSize: 20, fontFamily: fonts.robotoMedium}}>Medium</Text>
      <Text style={{fontSize: 20, fontFamily: fonts.robotoBold}}>Bold</Text>
      <Text style={{fontSize: 20, fontFamily: fonts.robotoBlack}}>Black</Text>
    </View>
  );
};
