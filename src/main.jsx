import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./app/store";
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Superestado que vamos a almacenar en la store */}
    <Provider store={store}>
      {/* Aplicamos la puerta de persistencia en el local Storage */}
      <PersistGate loading={null} persistor={persistor}>
        {/* HashRouter nos implementa la navegación entre páginas en gh-pages.*/}
          <HashRouter>
          <App />
          </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
