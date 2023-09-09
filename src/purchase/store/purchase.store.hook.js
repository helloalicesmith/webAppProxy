import { useAppStore } from '../../store/app-store.hook';

export function usePurchaseStore() {
  const { purchaseStore } = useAppStore();

  if (!purchaseStore) {
    throw new Error('useGoogleStore must be used within AppStoreProvider');
  }

  return purchaseStore;
}
