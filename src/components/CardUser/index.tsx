import React from 'react';

import { UserEdit as UserEditIcon } from '@styled-icons/fa-solid/UserEdit';
import { UserTimes as UserTimesIcon } from '@styled-icons/fa-solid/UserTimes';

import { InputsProps } from '../../pages/Registration';

import * as S from './styles';

interface CardUserProps extends InputsProps {
  removeUser: (param: string) => void;
}

const CardUser = ({ removeUser, ...user }: CardUserProps) => {
  return (
    <S.Wrapper>
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
        <S.UserEditContainer>
          <UserEditIcon />
        </S.UserEditContainer>

        <S.UserDeleteContainer onClick={() => removeUser(user.cpf)}>
          <UserTimesIcon />
        </S.UserDeleteContainer>
      </S.ContentRight>
    </S.Wrapper>
  );
};

export default CardUser;
