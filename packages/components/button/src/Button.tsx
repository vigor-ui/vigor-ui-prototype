import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button type="button">{children}</button>;
};
