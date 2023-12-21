import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({ type, value, onChange, placeholder }: InputProps) {
  return (
    <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
}