import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index-custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UsersAppComponent from './UsersApp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <UsersAppComponent  />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
