import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors['white-12']};
    background-color: ${theme.colors['primary-09']};
    padding: ${theme.spacings['sm']} ${theme.spacings['lg']};
    border: none;
    border-radius: ${theme.border.xs};
    transition: ${theme.transition.default};

    &:hover {
      background-color: ${theme.colors['primary-10']};
    }
  `}
`;
