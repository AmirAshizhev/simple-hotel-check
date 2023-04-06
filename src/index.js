import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';


const defaultState = {
  loggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token')
}

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN": 
      return {
        ...state, 
        loggedIn: true, 
        token: action.payload.email
      }
    case "LOGOUT": 
      localStorage.removeItem('token')
      return {
        ...state, 
        loggedIn: false,
        token: null
      }
    default: 
      return state
  }
}

const store = createStore(reduser)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
