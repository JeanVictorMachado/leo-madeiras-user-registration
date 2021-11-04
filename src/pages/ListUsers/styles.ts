import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    color: ${theme.colors.text};
    display: flex;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  ${() => css`
    width: 470px;
    margin: auto;

    ${media.lessThan('medium')`
      width: 100%;
      padding: 0 16px;
    `}
  `}
`;

export const TitleContainer = styled.div`
  padding: 32px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  ${media.lessThan('medium')`
    padding: 20px;
  `}
`;

export const CardContainer = styled.div`
  ${() => css``}
`;
