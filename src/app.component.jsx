import React from 'react';

import * as locales from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PurchaseContainer } from './containers/purchase/purchase.container'

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
      primary: {
        main: '#75c9c8'
      },
      secondary: {
        main: '#507d7c',
      },
      warning: {
        main: '#fcba04',
      }
    },
    typography: {
      fontSize: 12,
      fontFamily: 'Gilroy, sans-serif',
      h2: {
        color: '#ffffff'
      }
    }
  }, locales[locale]), [locale])

  return (
    <ThemeProvider theme={themeWithLocale}>
        <div className='thumb' />
        <CssBaseline />

        <TabsWidget WidgetComponent={PurchaseContainer} />
    </ThemeProvider>
  )
}

export default App