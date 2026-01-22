import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './app/layout';
import Home from './app/page';

const App = () => {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}