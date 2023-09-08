import React from 'react'
import { useTranslation } from 'react-i18next';
import { Box, Tab, Tabs } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { PurchaseWidgets } from '../widgets/purchase-widget/purchase-widget.component'
import { CustomTabPanel } from './tab-panel.component'

export const TabsWidget = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation()

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} variant='fullWidth' style={{ background: '#171717' }}>
          <Tab label={t('tabs.purchase')} icon={<ShoppingBagIcon />} iconPosition="start" />
          <Tab label={t('tabs.orders')} icon={<BookmarkBorderIcon />} iconPosition="start"/>
          <Tab label={t('tabs.profile')} icon={<AccountBoxIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <PurchaseWidgets />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}