import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${(props) => props.theme.font.families.body};
    &::before,
    &::after { box-sizing: inherit; }
  }
    ${({ theme }) => css`
      body {
        font-family: ${theme.font.families.body};
        font-size: ${theme.font.sizes.md};
      }
    `}
`;

export default GlobalStyles;
