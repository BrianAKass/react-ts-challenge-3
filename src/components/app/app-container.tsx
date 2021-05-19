import './app.css';

import { observer } from 'mobx-react';
import React from 'react';

import { useStore } from '../../stores';
import { AppView } from './app-view';

export const AppContainer = observer(() => {
  const store = useStore();

  return <AppView />;
});

export default AppContainer;
