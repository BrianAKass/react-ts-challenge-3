import { observer } from 'mobx-react';
import React, { Component } from 'react';

import { RootStore } from './root';

const storeContext = React.createContext<RootStore | null>(null);
const store = new RootStore();

if (process.env.NODE_ENV === 'development') {
  // expose the top root store to `window` for easy testing
  (window as any).store = store;
}

export const StoreProvider = observer(
  class StoreProvider extends Component {
    render() {
      const { children } = this.props;
      return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
    }
  },
);

/**
 * The root store hook
 */
export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
