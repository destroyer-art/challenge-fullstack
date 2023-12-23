import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: string;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}