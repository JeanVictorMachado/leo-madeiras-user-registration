import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputsProps } from '../../pages/Registration';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';

import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search';
import { PeopleList as PeopleListIcon } from '@styled-icons/fluentui-system-filled/PeopleList';
import { UserPlus as UserPlusIcon } from '@styled-icons/fa-solid/UserPlus';
import { PeopleSearch as PeopleSearchIcon } from '@styled-icons/fluentui-system-filled/PeopleSearch';

import * as S from './styles';

const Heading = () => {
  const [isSerchIcon, setIsSerchIcon] = useState(false);
  const [serchByCpf, setSearchByCpf] = useState('');
  const history = useHistory();

  const pathname = useLocation().pathname;
  const isCreateUser = pathname.includes('/list-users');

  const filterUserByCpf = (serchByCpf: string) => {
    const usersInfos = localStorage.getItem('@userInfos:');
    const users = JSON.parse(String(usersInfos)) as InputsProps[];
    const cpfExist = users?.filter(
      (user) => user.cpf === serchByCpf.replace(/[^\d]+/g, '')
    );

    setSearchByCpf('');

    if (cpfExist.length > 0) {
      history.push(`/list-users/${serchByCpf.replace(/[^\d]+/g, '')}`);
    }
  };

  return (
    <S.Wrapper isSerchIcon={isSerchIcon}>
      <S.IconsContainer>
        <S.Logo src="/logo-leo-madeiras.jpg" alt="logo-leo-madeiras" />

        <S.SearchIconContainer onClick={() => setIsSerchIcon(!isSerchIcon)}>
          <PeopleSearchIcon />
        </S.SearchIconContainer>

        <S.RedirectUsersContainer>
          {!isCreateUser ? (
            <Link to="/list-users/all-users">
              <PeopleListIcon />
            </Link>
          ) : (
            <Link to="/">
              <UserPlusIcon />
            </Link>
          )}
        </S.RedirectUsersContainer>
      </S.IconsContainer>

      <S.SearchInputContainer isSerchIcon={isSerchIcon}>
        <InputMask
          name="filterUser"
          mask={'999.999.999.99'}
          onChange={({ target }) => setSearchByCpf(target.value)}
          type="text"
          value={serchByCpf}
          placeholder="Digite um CPF"
        />
        <div onClick={() => filterUserByCpf(serchByCpf)}>
          <SearchIcon />
        </div>
      </S.SearchInputContainer>
    </S.Wrapper>
  );
};

export default Heading;
