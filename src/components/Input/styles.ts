import styled, { css } from 'styled-components';

interface WrapperProps {
  error?: string | boolean | null;
  disabled?: boolean;
}

export const Wrapper = styled.label<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.text};
    margin-bottom: 16px;

    > span {
      font-size: 18px;
      font-weight: 600;
    }

    > input {
      width: 100%;
      height: 35px;
      padding-left: 8px;
      margin-top: 5px;
      border: 1px solid ${!error ? theme.colors.secondary : 'red'};
      border-radius: 4px;
      background-color: ${theme.colors.background};
      opacity: ${disabled && '0.5'};
    }

    p {
      color: red;
      margin-top: 5px;
      font-size: 14px;
    }
  `}
`;
