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
          <strong>CPF:</strong> {user.cpf}
        </span>
        <span>
          <strong>Tel:</strong> {user.phone}
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
