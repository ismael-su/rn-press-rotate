import React, { ReactNode } from 'react';

interface IRotatableProps {
  children: ReactNode;
}

function Rotatable({ children }: IRotatableProps) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default Rotatable;
