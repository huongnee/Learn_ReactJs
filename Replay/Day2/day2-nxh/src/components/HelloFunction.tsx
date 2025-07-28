// HelloFunction.tsx
import React from 'react';

type Props = {
  name: string;
};

const HelloFunction: React.FC<Props> = ({ name }) => {
  return <h2>Hello, {name} (from Function Component)</h2>;
};

export default HelloFunction;
