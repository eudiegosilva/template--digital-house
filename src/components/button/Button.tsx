import * as s from './button.styles';

export type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <s.ButtonWrapper>{children}</s.ButtonWrapper>;
};

export { Button };
