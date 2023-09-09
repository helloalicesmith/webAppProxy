import React from 'react';
import { Typography, Drawer } from '@mui/material';

export function PurchaseFiltersWidget(props) {
  const { title, isOpen } = props;
  const { onClose } = props;

  const onCloseHandler = React.useCallback(() => {
    onClose(false);
  }, [isOpen, onClose]);

  return (
    <Drawer
      open={isOpen}
      anchor="bottom"
      onClose={onCloseHandler}
    >
      <Typography variant="h5">{title}</Typography>
    </Drawer>
  );
}
