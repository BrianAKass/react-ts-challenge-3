import './app.css';

import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { useStore } from '../../stores';
import { AppView } from './app-view';

export const AppContainer = observer(() => {
  const store = useStore();
  return <AppView loaded={store.textSegmentStore.loading} />;
});

export default AppContainer;
