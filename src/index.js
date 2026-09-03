import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/nanny-services-react-pet-project">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
