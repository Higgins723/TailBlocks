import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: 'danger' | 'primary' | 'secondary' | 'success';
  children: ReactNode;
  disabled?: boolean;
  name?: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
