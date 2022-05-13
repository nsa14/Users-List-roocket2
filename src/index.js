import React from 'react';
import ReactDOM from 'react-dom/client';
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
