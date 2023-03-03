// INFO: global font size
import {size} from './Size';

export const fontSize = {
  tinySmall: size.moderateScale(6),
  extraSmall: size.moderateScale(10),
  verySmall: size.moderateScale(13),
  small: size.moderateScale(16),
  medium: size.moderateScale(20),
  mediumSemiLarge: size.moderateScale(22),
  mediumLarge: size.moderateScale(24),
  large: size.moderateScale(30),
  veryLarge: size.moderateScale(44),
};

// 12,13,14 —> verySmall
// 16 —> small
// 18,20 ->medium
// 23,24,25 —> mediumLarge
// 28,30,33 —> large
// 44 —> veryLarge
