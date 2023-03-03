import {color, size} from 'theme';

export const mainView = () => ({
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.semiTransBlack,
  height: size.deviceHeight,
  width: size.deviceWidth,
  position: 'absolute',
  transform: [{scale: 2}],
});
