import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Home from './Home/Home';
import CompA from './Props/CompA';
import Parent from './Session4/Parent';
import Counter from './Counter/Counter';
import Counter1 from './Session 5/Counter1';
import Propsdata1 from './Session 5/Propsdata1';
import Task1 from './Session7/Task1';
import Practice1 from './Session7/Practice1';
import Register from './Session7/Register';
import List from './List/List';
import Testing1 from './MaterialUI/Testing1';
import Navigator from './Navigator/Navigator';
import Proj_home from './Project_React/Proj_home';
import Proj_login from './Project_React/Proj_login'
// import Lifecycle from './Lifecycle/Lifecycle';
import Hooks from './Hooks/Hooks';
import Usestate from './Hooks/Usestate';
import Apihandling from './ApiHandling/Apihandling';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigator/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
