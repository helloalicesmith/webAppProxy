import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Tab, Tabs } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { TabPanel } from './tab-panel.component';

export function TabsWidget(props) {
  const [value, setValue] = React.useState(0);
  const { WidgetComponent } = props;
  const { t } = useTranslation();

  const handleChange = React.useCallback((_event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ background: '#ded9e2' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label={t('tabs.purchase')} icon={<ShoppingBagIcon />} iconPosition="start" />
          <Tab label={t('tabs.orders')} icon={<BookmarkBorderIcon />} iconPosition="start" />
          <Tab label={t('tabs.profile')} icon={<AccountBoxIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      <TabPanel>
        {!!WidgetComponent && <WidgetComponent />}
      </TabPanel>
    </Box>
  );
}
