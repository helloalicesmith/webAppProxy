import React from 'react';
import {
  Box,
  Typography,
  Tab,
  Tabs
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const TabsWidget = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = React.useCallback((_event, newValue) => {
    setValue(newValue);
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Покупка" icon={<ShoppingBagIcon />} iconPosition="start" />
          <Tab label="Заказы" icon={<BookmarkBorderIcon />} iconPosition="start"/>
          <Tab label="Профиль" icon={<AccountBoxIcon />} iconPosition="start" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Lorem, ipsum dolor.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Lorem ipsum dolor sit.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Lorem ipsum dolor sit amet.
      </CustomTabPanel>
    </Box>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TabsWidget />
    </ThemeProvider>
  );
}

export default App