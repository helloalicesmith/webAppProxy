import React from 'react';
import { observer } from 'mobx-react-lite';

import { PurchaseFiltersWidget } from '../../components/widgets/purchase-filters-widget/purchase-filters-widget.component';
import { usePurchaseStore } from '../store/purchase.store.hook';

export const PurchaseFiltersContainer = observer(() => {
  const { isOpenFilters, setIsOpenFilters, purchaseFiltersStore } = usePurchaseStore();
  const { title } = purchaseFiltersStore;

  return (
    <PurchaseFiltersWidget title={title} isOpen={isOpenFilters} onClose={setIsOpenFilters} />
  );
});
