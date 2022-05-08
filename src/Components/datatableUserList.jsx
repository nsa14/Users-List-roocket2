import React, {useState} from "react";
import {ToastContainer} from 'react-toastify';
import DataTable from './userDataTableComponent';

const UserListDataTable = (props) => {

    let [newData, setNewData] = useState([]);

    return (
        <>
            <DataTable data={newData}/>
            <ToastContainer rtl/>
        </>
    )
}

export default UserListDataTable;