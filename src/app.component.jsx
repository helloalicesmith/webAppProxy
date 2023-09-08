import React from 'react';

import * as locales from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { TabsWidget } from './components/tabs/tabs.component'
import i18n from './utils/i18n.utils';

const App = () => {
  const [locale, setLocale] = React.useState('ruRu');

  const onChangeLocale = React.useCallback(() => {
    setLocale('ruRu')
    i18n.changeLanguage()
  }, [])

  const themeWithLocale = React.useMemo(() => createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontSize: 12
    }
  }, locales[locale]), [locale])

  return (
    <ThemeProvider theme={themeWithLocale}>
      <CssBaseline />
      <TabsWidget />
    </ThemeProvider>
  )
}

export default App