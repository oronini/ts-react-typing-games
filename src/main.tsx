import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TypingGameProvider } from './context/useTypingGame.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TypingGameProvider>
      <App />
    </TypingGameProvider>
  </React.StrictMode>
);
