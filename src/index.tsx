import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app';
import AppProvider from './components/app/app-provider';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);
