import * as React from 'react';
import { useLocalObservable } from 'mobx-react-lite';

import { StoreContext } from './app-store.context';

export function AppStoreProvider(props) {
  const { createAppStore, children } = props;
  const store = useLocalObservable(createAppStore);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
