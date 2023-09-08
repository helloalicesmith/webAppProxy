import PropTypes from 'prop-types';
import { Box, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 120,
    border: '1px solid #d7d7d7',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center'
}));

export const Card = (props) => {
    const { title, children } = props
    const { t } = useTranslation()

    return (
        <Item>
            <Box display="grid" gridTemplateColumns="3fr 1fr" gap='12px' width="100%">
                <Box display="flex" minWidth="175px" flexDirection="column" justifyContent="space-around">
                    <Typography sx={{ fontWeight: 'bold' }} variant='h6'>{title}</Typography>

                    <Box marginTop='6px' display='flex' flexDirection='column' gap='4px'>
                        {children}
                    </Box>
                </Box>

                <Button color="warning" variant="contained">
                    <Typography color="white">
                        {t('common.buy')}
                    </Typography>
                </Button>
            </Box>
        </Item>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};