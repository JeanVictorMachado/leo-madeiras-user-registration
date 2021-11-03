import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
    padding: 16px 32px;
    position: relative;
    box-shadow: 0 2px 7px lightgray;
    display: flex;
    flex-direction: column;

    ${media.lessThan('medium')`
      padding: 16px 16px;
    `}
  `}
`;

export const IconsContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.lessThan('medium')`
      justify-content: flex-end;
    `}
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 70px;
    border: 1px solid ${theme.colors.background};
    border-radius: 0 3px 3px 3px;
    box-shadow: 0 2px 7px gray;

    ${media.lessThan('medium')`
      width: 60px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    `}
  `}
`;

export const RedirectUsersContainer = styled.div`
  svg {
    width: 40px;
    cursor: pointer;
    color: #313131;

    ${media.lessThan('medium')`
        width: 35px;
      `}

    &:hover {
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`;

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    width: 35%;
    height: 43px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    ${media.lessThan('medium')`
      position: relative;
      width: 100%;
      margin-top: 16px;
    `}

    > input {
      width: 100%;
      height: 35px;
      padding-left: 8px;
      border: 1px solid ${theme.colors.secondary};
      border-radius: 4px 0 0 4px;
      background-color: ${theme.colors.background};
    }

    > div {
      width: 50px;
      height: 35px;
      border-radius: 0 4px 4px 0;
      background-color: #313131;
      margin-left: -1px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.9;
        transition: 0.5s;
      }

      > svg {
        width: 25px;
        color: ${theme.colors.background};
        cursor: pointer;
      }
  `}
`;
