import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InputsProps } from '../Registration';

import Heading from '../../components/Heading';
import CardUser from '../../components/CardUser';

import * as S from './styles';

interface RouteParamProps {
  id: string;
}

const ListUsers = () => {
  const [usersList, setUsersList] = useState<InputsProps[]>([]);
  const routeParam: RouteParamProps = useParams();

  const handleRemoveUser = (cpf: string) => {
    const newListUser = usersList.filter((user) => user.cpf !== cpf);
    localStorage.setItem('@userInfos:', JSON.stringify(newListUser));

    setUsersList(newListUser);
  };

  useEffect(() => {
    const usersInfos = localStorage.getItem('@userInfos:');
    const users = JSON.parse(String(usersInfos)) as InputsProps[];

    if (routeParam?.id !== 'all-users') {
      const usersInfos = localStorage.getItem('@userInfos:');
      const users = JSON.parse(String(usersInfos)) as InputsProps[];
      const userByCpf = users?.filter((user) => user.cpf === routeParam?.id);

      setUsersList(userByCpf);
      return;
    }

    setUsersList(users);
  }, [routeParam?.id]);

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
