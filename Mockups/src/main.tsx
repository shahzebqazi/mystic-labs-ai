import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BackgroundOnlyPage } from './app/BackgroundOnlyPage';
import { TitlePage, hasSeenTitle } from './app/TitlePage';
import './styles/index.css';

const isBackgroundOnly = window.location.hash === '#background' || window.location.search.includes('background=1');

function Root() {
  const [showTitle, setShowTitle] = useState(() => !hasSeenTitle());

  if (isBackgroundOnly) return <BackgroundOnlyPage />;
  if (showTitle) return <TitlePage onStart={() => setShowTitle(false)} />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
