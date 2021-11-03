import React from 'react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  type: string;
  width?: string;
  height?: string;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  type = 'button',
  width,
  height,
  ...props
}: ButtonProps) => (
  <S.Wrapper type={type} width={width} height={height} {...props}>
    {children}
  </S.Wrapper>
);

export default Button;
