import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { ThemePreference } from './ThemePreference';

import './index.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <ThemePreference>
      <App />
    </ThemePreference>
  </React.StrictMode>
);
