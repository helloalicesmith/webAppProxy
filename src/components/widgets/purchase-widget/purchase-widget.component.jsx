import { Box, Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles';

import { Card } from '../../cards/card.component'

const Item = styled(Chip)(() => ({
    height: 'auto',
    '& .MuiChip-label': {
      display: 'block',
      whiteSpace: 'normal',
    },
}));

export const PurchaseWidgets = () => {
    const { t } = useTranslation()

    return (
        <Box display='flex' flexDirection='column' gap="20px">
            <Card title='IPv4 Shared'>
                <Chip size='small' label={t('widgets.purchase.label.one')} color="primary" variant="outlined" />
                <Chip size='small' label={t('widgets.purchase.label.two')} color="success" variant="outlined" />
            </Card>
            <Card title='IPv4'>
                <Chip size='small' label={t('widgets.orders.label.one')} color="primary" variant="outlined" />
                <Chip size='small' label={t('widgets.orders.label.two')} color="primary" variant="outlined" />
            </Card>
            <Card title='IPv6'>
                <Item size='small' label={t('widgets.profile.label.one')} color="success" variant="outlined" />
                <Chip size='small' label={t('widgets.profile.label.two')} color="primary" variant="outlined" />
            </Card>
        </Box>
    )
}