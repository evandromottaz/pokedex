import React, { MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent) => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
