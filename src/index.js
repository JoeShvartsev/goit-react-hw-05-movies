import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { MoviesProvider } from 'components/Context/MoviesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-05-movies">
    <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>

    </React.StrictMode>
  </BrowserRouter>
);
