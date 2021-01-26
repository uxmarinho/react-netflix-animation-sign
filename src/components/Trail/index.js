import React from 'react';

import { Container } from './styles';

function Trail({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default Trail;
