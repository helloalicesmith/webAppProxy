import React from 'react';

import * as locales from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PurchaseContainer } from './purchase/purchase.container';
import { AnimationBackground } from './components/animation/animation-background.component';

import { TabsWidget } from './components/tabs/tabs.component';
import i18n from './utils/i18n.utils';

export function App() {
  const [locale, setLocale] = React.useState('ruRu');

  const onChangeLocale = React.useCallback(() => {
    setLocale('ruRu');
    i18n.changeLanguage();
  }, []);

  const themeWithLocale = React.useMemo(() => createTheme({
    palette: {
      primary: {
        main: '#75c9c8',
      },
      secondary: {
        main: '#507d7c',
        light: '#e6ecf0',
      },
      warning: {
        main: '#fcba04',
      },
    },
    typography: {
      fontSize: 12,
      fontFamily: 'Gilroy, sans-serif',
      h2: {
        color: '#1b1d1e',
        fontWeight: 'bold',
      },
      h5: {
        color: '#1b1d1e',
        fontWeight: 'bold',
      },
    },
  }, locales[locale]), [locale]);

  return (
    <ThemeProvider theme={themeWithLocale}>
      <CssBaseline />

      <TabsWidget WidgetComponent={PurchaseContainer} />
      <AnimationBackground />
    </ThemeProvider>
  );
}

export default App;
