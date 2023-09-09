import { action, makeObservable, observable } from 'mobx';

export class PurchaseFiltersStore {
  title;

  constructor() {
    makeObservable(this, {
      title: observable,
      setFiltersValues: action.bound,
    });
  }

  setFiltersValues(data) {
    this.title = data.title;
  }
}
