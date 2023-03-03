import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Home = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.121 9.048l-7.585-7.586a5.008 5.008 0 00-7.072 0L.879 9.048A2.978 2.978 0 000 11.17v9.817a3 3 0 003 3h18a3 3 0 003-3V11.17a2.978 2.978 0 00-.879-2.12zM9 21.986v-3.934a3 3 0 016 0v3.934H9zm12 0a1 1 0 001-1v-9.82a1.008 1.008 0 00-.293-.7l-7.585-7.587a3.008 3.008 0 00-4.244 0l-7.585 7.583A1.008 1.008 0 002 11.17v9.817a1 1 0 001 1h4v-3.934a5 5 0 0110 0v3.934h4z"
        fill={props.fill ?? '#0094D5'}
      />
    </Svg>
  );
};
