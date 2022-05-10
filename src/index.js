import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index-custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserListComponent from './UserList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/*effect background*/}
        <div className={'row'} >
            <div className="area">
                <div className="col-md-12 pt-4">
                    <UserListComponent style={{zIndex:'999999'}} />
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
