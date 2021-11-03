import styled, { css } from 'styled-components';

type WrapperProps = {
  width?: string;
  height?: string;
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 3px;
    background-color: ${theme.colors.secondary};
    font-size: large;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 32px;
    box-shadow: 0 2px 7px lightgray;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  `}
`;
