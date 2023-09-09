import React from 'react';
import { observer } from 'mobx-react-lite';

import { PurchaseWidgets } from '../../components/widgets/purchase-list-widget/purchase-list-widget.component';
import { usePurchaseStore } from '../store/purchase.store.hook';

export const PurchaseListContainer = observer(() => {
  const { setIsOpenFilters, purchaseFiltersStore } = usePurchaseStore();
  const { setFiltersValues } = purchaseFiltersStore;

  const onBuyIPv4Shared = React.useCallback(() => {
    setIsOpenFilters(true);
    setFiltersValues({
      title: 'IPv4 Shared',
    });
  }, [setIsOpenFilters, setFiltersValues]);

  const onBuyIPv4 = React.useCallback(() => {
    setIsOpenFilters(true);
    setFiltersValues({
      title: 'IPv4',
    });
  }, [setFiltersValues, setIsOpenFilters]);

  const onBuyIPv6 = React.useCallback(() => {
    setIsOpenFilters(true);
    setFiltersValues({
      title: 'IPv6',
    });
  }, [setFiltersValues, setIsOpenFilters]);

  return (
    <PurchaseWidgets
      onBuyIPv4Shared={onBuyIPv4Shared}
      onBuyIPv4={onBuyIPv4}
      onBuyIPv6={onBuyIPv6}
    />
  );
});
