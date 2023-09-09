import { PurchaseStore } from '../purchase/store/purchase.store';

export class AppStore {
  purchaseStore;

  constructor() {
    this.purchaseStore = new PurchaseStore();
  }
}
