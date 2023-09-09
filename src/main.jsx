import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app.component';
import { AppStore } from './store/app.store';
import { AppStoreProvider } from './store/app-store-provider.component';
import './utils/i18n.utils';

import './index.css';

const appStore = new AppStore();
const createAppStore = () => appStore;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStoreProvider createAppStore={createAppStore}>
      <App />
    </AppStoreProvider>
  </React.StrictMode>,
);
