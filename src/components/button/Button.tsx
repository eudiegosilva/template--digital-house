import * as s from './button.styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <s.ButtonWrapper onClick={onClick}>{children}</s.ButtonWrapper>;
};

export { Button };
