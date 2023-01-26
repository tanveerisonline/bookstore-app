import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import bookStore from './redux/configureStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
