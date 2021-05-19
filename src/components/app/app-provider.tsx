import { createMuiTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import React, { FC, PropsWithChildren } from 'react';

import { StoreProvider } from '../../stores';
import { themeSettings } from '../theme';

export const AppProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const { palette, ...rest } = themeSettings;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...palette,
        },
        ...rest,
      }),
    [palette, rest],
  );

  return (
    <StylesProvider injectFirst>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StoreProvider>
    </StylesProvider>
  );
};

export default AppProvider;
