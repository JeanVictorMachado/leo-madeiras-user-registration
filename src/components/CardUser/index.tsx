import React from 'react';
import { useHistory } from 'react-router-dom';

import { EditAlt as EditAltIcon } from '@styled-icons/boxicons-solid/EditAlt';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { InputsProps } from '../../pages/Registration';

import * as S from './styles';

interface CardUserProps extends InputsProps {
  removeUser: (param: string) => void;
}

const CardUser = ({ removeUser, ...user }: CardUserProps) => {
  const histoty = useHistory();

  const cpf = user.cpf.replace(/[^\d]/g, '');
  const cpfFormatted = cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4'
  );

  const formatNumber: RegExpMatchArray | null =
    user.phone.length === 11
      ? user.phone.match(/(\d{2})(\d{5})(\d{4})/)
      : user.phone.match(/(\d{2})(\d{4})(\d{4})/);

  const finalNumber = `(${formatNumber && formatNumber[1]}) ${
    formatNumber && formatNumber[2]
  }-${formatNumber && formatNumber[3]}`;

  const redirectToEditUser = () => {
    histoty.push(`/edit-user/${user.cpf}`);
    return;
  };

  return (
    <S.Wrapper data-testid="wrapper-card">
      <S.ContentLeft>
        <span>
          <strong>Nome:</strong> {user.name}
        </span>
        <span>
          <strong>Email:</strong> {user.email}
        </span>
        <span>
          <strong>CPF:</strong> {cpfFormatted}
        </span>
        <span>
          <strong>Tel:</strong> {finalNumber}
        </span>
      </S.ContentLeft>

      <S.ContentRight>
        <S.UserEditContainer onClick={redirectToEditUser}>
          <EditAltIcon />
        </S.UserEditContainer>

        <S.UserDeleteContainer onClick={() => removeUser(user.cpf)}>
          <CloseIcon />
        </S.UserDeleteContainer>
      </S.ContentRight>
    </S.Wrapper>
  );
};

export default CardUser;
