import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}