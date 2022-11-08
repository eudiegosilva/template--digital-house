import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global-styles';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    a11y: { disable: true },
    matchers: { color: /(background|color)$/i, date: /Date$/ },
    expanded: true,
    hideNoControlsWarning: true,
  },
  options: { storySort: { method: 'alphabetical' } },
  nextRouter: { Provider: RouterContext.Provider },
};
