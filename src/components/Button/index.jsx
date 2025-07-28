import { ContainerButton } from "./styles";

export const Button = ({ children, ...props }) => {
  return <ContainerButton {...props}>{children}</ContainerButton>;
};
