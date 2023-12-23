import React from 'react';
import { StyledLabel } from './styles';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Label({ htmlFor, children, style }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor} style={style}>{children}</StyledLabel>;
}
