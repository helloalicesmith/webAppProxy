import { action, makeObservable, observable } from 'mobx';

import { PurchaseFiltersStore } from './purchase-filters.store';

export class PurchaseStore {
  isOpenFilters = false;

  purchaseFiltersStore;

  constructor() {
    makeObservable(this, {
      isOpenFilters: observable,
      setIsOpenFilters: action.bound,
    });

    this.purchaseFiltersStore = new PurchaseFiltersStore();
  }

  setIsOpenFilters(value) {
    this.isOpenFilters = value;
  }
}
