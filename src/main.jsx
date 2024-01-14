import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'; 
import {parsistore} from './Redux/store.js'
import {newStore} from './Redux/store.js'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
  <BrowserRouter>
  <Provider store={newStore}> 
  <PersistGate loading={null} persistor={parsistore}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
  </React.Fragment>,
)
