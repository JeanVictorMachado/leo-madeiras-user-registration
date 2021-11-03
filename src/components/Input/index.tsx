import React, { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { InputsProps } from '../../pages/Registration';
import InputMask from 'react-input-mask';

import * as S from './styles';

type InputProps = {
  label: string;
  fieldName: Path<InputsProps>;
  register: UseFormRegister<InputsProps>;
  error?: string | boolean | null;
  mask: string;
  isMask?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  register,
  fieldName,
  error,
  mask,
  isMask = false,
  disabled,
  ...props
}: InputProps) => {
  return (
    <S.Wrapper error={error} disabled={disabled}>
      <span>{label}</span>
      {isMask ? (
        <InputMask
          mask={mask}
          disabled={disabled}
          {...register(fieldName)}
          {...props}
        />
      ) : (
        <input {...register(fieldName)} {...props} />
      )}
      <p>{error}</p>
    </S.Wrapper>
  );
};

export default Input;
