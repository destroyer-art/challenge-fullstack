import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  id?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({ id, type, value, onChange, placeholder }: InputProps) {
  return (
    <StyledInput id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
}