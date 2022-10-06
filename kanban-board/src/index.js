
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from "./components/LoginForm/LoginForm"
import AuthContextProvider from "./contexts/AuthContext"
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
   <LoginForm/>
   </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);