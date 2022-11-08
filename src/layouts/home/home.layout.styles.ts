import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => css`
    background-color: ${theme.colors['primary-01']};
  `};
`;

export const Section = styled.section``;

export const Title = styled.h1``;

export const Strong = styled.strong``;

export const Description = styled.p``;
