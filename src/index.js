import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserProvider } from './AuthUserContext';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
  
  <AuthUserProvider>
  <BrowserRouter>
  
  <Provider store={store}>
    <App />
    
    </Provider>
  </BrowserRouter>
  </AuthUserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
