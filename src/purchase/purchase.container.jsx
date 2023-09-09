import React from 'react';

import { PurchaseListContainer } from './containers/purchase-list.container';
import { PurchaseFiltersContainer } from './containers/purchase-filters.container';

export function PurchaseContainer() {
  return (
    <>
      <PurchaseListContainer />
      <PurchaseFiltersContainer />
    </>
  );
}
