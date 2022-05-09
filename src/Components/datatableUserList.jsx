import React from "react";
import {ToastContainer} from 'react-toastify';
import DataTable from './userDataTableComponent';

const UserListDataTable = () => {

    return (
        <>
            <DataTable/>
            <ToastContainer rtl/>
        </>
    )
}

export default UserListDataTable;

// [{"id":1,"name":"fff","family":"bb","password":"bbb","email":"fff@gmail.com","IsAdmin":true,"IsStatus":true,"created_at":1652085401184,"updated_at":1652085401184},{"id":2,"name":"sdfsdf","family":"aaa","password":"sss","email":"ssss","IsAdmin":true,"created_at":1652085425009,"updated_at":1652085425009}]
