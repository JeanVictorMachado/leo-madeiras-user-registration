import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { PeopleList as PeopleListIcon } from '@styled-icons/fluentui-system-filled/PeopleList';
import { UserPlus as UserPlusIcon } from '@styled-icons/fa-solid/UserPlus';

import * as S from './styles';

interface HeadingProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Heading = ({ onChange }: HeadingProps) => {
  const pathname = useLocation().pathname;
  const isCreateUser = pathname === '/list-users';

  return (
    <S.Wrapper>
      <S.IconsContainer>
        <S.Logo src="/logo-leo-madeiras.jpg" alt="logo-leo-madeiras" />

        <S.RedirectUsersContainer>
          {!isCreateUser ? (
            <Link to="/list-users">
              <PeopleListIcon />
            </Link>
          ) : (
            <Link to="/">
              <UserPlusIcon />
            </Link>
          )}
        </S.RedirectUsersContainer>
      </S.IconsContainer>

      <S.SearchInputContainer>
        <input onChange={onChange} type="text" placeholder="Digite um CPF" />
        <div>
          <SearchIcon />
        </div>
      </S.SearchInputContainer>
    </S.Wrapper>
  );
};

export default Heading;
