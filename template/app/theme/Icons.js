import React from 'react';

import {Avatar} from './image/svgIcons/IcAvatar';
import {Home} from './image/svgIcons/IcHome';

// INFO: all svg icons will go below

export const IcHome = props => (
  <Home height={props.height} width={props.width} {...props} />
);

export const IcAvatar = props => (
  <Avatar height={props.height} width={props.width} {...props} />
);
