import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import store from 'store/configureStore';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
