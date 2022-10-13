
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from "./components/LoginForm/LoginForm"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import Modals from './Modal/Modals';

import AuthContextProvider from "./contexts/AuthContext"
ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider>
   <RegisterForm/>
</AuthContextProvider> */}
   <App/>
</React.StrictMode>,
  document.getElementById('root')
);