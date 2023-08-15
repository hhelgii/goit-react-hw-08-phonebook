import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={persistor}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
// basename='/goit-react-hw-08-phonebook'
