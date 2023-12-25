import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children, type, ...props }: ButtonProps) {
  const validType: "button" | "submit" | "reset" | undefined = type;

  return (
    <StyledButton data-testid="button" type={validType} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
