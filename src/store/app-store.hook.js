import * as React from 'react';

import { StoreContext } from './app-store.context';

export function useAppStore() {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error('useAppStore must be used within AppStoreProvider');
  }

  return context;
}
