import PropTypes from 'prop-types';
import { Box, Chip, Typography } from '@mui/material'
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

export const PurchaseWidgets = (props) => {
    const { t } = useTranslation()
    const { onBuyIPv4Shared, onBuyIPv4, onBuyIPv6 } = props

    return (
        <Box>
            <Typography variant='h2'>{t('widgets.purchase.title')}</Typography>

            <Box display='flex' flexDirection='column' gap="20px" marginTop={2}>
                <Card title='IPv4 Shared' onClick={onBuyIPv4Shared}>
                    <Item size='small' label={t('widgets.purchase.label.one')} color="secondary" variant="filled" />
                    <Item size='small' label={t('widgets.purchase.label.two')} color="warning" variant="filled" />
                </Card>
                <Card title='IPv4' onClick={onBuyIPv4}>
                    <Item size='small' label={t('widgets.orders.label.one')} color="secondary" variant="filled" />
                    <Item size='small' label={t('widgets.orders.label.two')} color="secondary" variant="filled" />
                </Card>
                <Card title='IPv6' onClick={onBuyIPv6}>
                    <Item size='small' label={t('widgets.profile.label.one')} color="warning" variant="filled" />
                    <Item size='small' label={t('widgets.profile.label.two')} color="secondary" variant="filled" />
                </Card>
            </Box>
        </Box>
    )
}

PurchaseWidgets.propTypes = {
    onBuyIPv4Shared: PropTypes.func,
    onBuyIPv4: PropTypes.func,
    onBuyIPv6: PropTypes.func,
}