import React, { useState, useEffect } from 'react';

import { InputsProps } from '../Registration';

import Heading from '../../components/Heading';
import CardUser from '../../components/CardUser';

import * as S from './styles';

const ListUsers = () => {
  const [usersList, setUsersList] = useState<InputsProps[]>([]);

  const handleRemoveUser = (cpf: string) => {
    const newListUser = usersList.filter((user) => user.cpf !== cpf);
    localStorage.setItem('@userInfos:', JSON.stringify(newListUser));

    setUsersList(newListUser);
  };

  useEffect(() => {
    const usersInfos = localStorage.getItem('@userInfos:');
    const users = JSON.parse(String(usersInfos)) as InputsProps[];

    setUsersList(users);
  }, []);

  return (
    <S.Wrapper>
      <Heading />

      <S.Content>
        <S.TitleContainer>
          <h2>Lista de usuários</h2>
        </S.TitleContainer>

        <S.CardContainer>
          {usersList?.map((user, index) => (
            <CardUser key={index} {...user} removeUser={handleRemoveUser} />
          ))}
        </S.CardContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default ListUsers;
