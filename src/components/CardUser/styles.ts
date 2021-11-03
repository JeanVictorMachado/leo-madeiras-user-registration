import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    border-radius: 3px;
    box-shadow: 0 2px 7px lightgray;
  `}
`;

export const ContentLeft = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    > span {
      line-height: 22px;
    }
  `}
`;

export const ContentRight = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid lightgray;
    padding-left: 16px;
  `}
`;

export const UserEditContainer = styled.div`
  ${({ theme }) => css`
    > svg {
      width: 35px;

      &:hover {
        transition: 0.3s;
        color: ${theme.colors.secondary};

        ${Wrapper} {
          box-shadow: 0 2px 7px ${theme.colors.secondary};
        }
      }
    }
  `}
`;

export const UserDeleteContainer = styled.div`
  ${() => css`
    > svg {
      width: 35px;

      &:hover {
        transition: 0.3s;
        color: red;

        ${Wrapper} {
          box-shadow: 0 2px 7px red;
        }
      }
    }
  `}
`;
