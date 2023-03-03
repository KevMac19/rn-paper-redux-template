import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Avatar = props => {
  return (
    <Svg
      width={19}
      height={25}
      viewBox="0 0 19 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.572 7a6.148 6.148 0 01-6.286 6A6.154 6.154 0 013 7a6.148 6.148 0 016.286-6 6.148 6.148 0 016.286 6zM9.288 3a4.1 4.1 0 014.188 4 4.1 4.1 0 01-4.19 4A4.1 4.1 0 015.1 7a4.1 4.1 0 014.188-4z"
        fill={props.fill ?? '#0094D5'}
      />
      <Path
        d="M9.286 15A9.156 9.156 0 000 24a1.032 1.032 0 002.063 0 7.114 7.114 0 017.222-7 7.114 7.114 0 017.222 7 1.032 1.032 0 002.063 0 9.156 9.156 0 00-9.284-9z"
        fill={props.fill ?? '#0094D5'}
      />
    </Svg>
  );
};
