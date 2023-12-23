import { StyledLabel } from "./styles";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}
export default function Label({ htmlFor, children }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}