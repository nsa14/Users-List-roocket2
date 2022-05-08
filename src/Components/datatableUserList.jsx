import React, {useState} from "react";
import {ToastContainer} from 'react-toastify';
import DataTable from './userDataTableComponent';

const UserListDataTable = (props) => {

    // let [userListDataState, setUserListDataState] = useState([
    //     {
    //         id: 1,
    //         name: 'naser222',
    //         family: ' zare',
    //         password: 'naser65',
    //         email: 'naser@gmail.com',
    //         IsAdmin: true,
    //         IsStatus: true,
    //         created_at: '1401/02/06',
    //         updated_at: '1401/02/06'
    //     },
    //     {
    //         id: 2,
    //         name: 'حسام',
    //         family: 'پویان فر',
    //         password: 'hess3345',
    //         email: 'hess@gmail.com',
    //         IsAdmin: false,
    //         IsStatus: false,
    //         created_at: '1401/02/06',
    //         updated_at: '1401/02/06'
    //     }
    // ]);
    let [newData, setNewData] = useState([]);

    return (
        <>
            <DataTable data={newData}/>
            <ToastContainer rtl/>
        </>
    )
}

export default UserListDataTable;