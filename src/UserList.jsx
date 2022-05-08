import React from "react";
import DatatableUserList from './Components/datatableUserList'
import './userlist.css'

export default function Main(){
    return(
        <div className={'bg-main col-md-10 mx-auto p-5'} style={{borderRadius:8}}>
            <DatatableUserList />
        </div>
    )
}