/* eslint-disable no-unused-vars */
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import './styles/spinner.css';
import './styles/index.css';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/tokens.css';
import '@radix-ui/themes/components.css';
import '@radix-ui/themes/utilities.css';
import '@radix-ui/themes/layout.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme, ThemePanel } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme accentColor='red' radius='large'>
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);

reportWebVitals();
