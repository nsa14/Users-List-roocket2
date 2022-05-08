import React, {useState} from 'react';
import {ToastAlert} from "../Helper/toastComponent";

const EditSelectedUser = (props) => {
    const[userid, setUserId] = useState(props.userid);

    const btnEditUser = () => {
        props.propsClick(userid);
    }

    return (
        <>
            <button className={'btn btn-primary btn-xs m-1'} onClick={btnEditUser}>
                <i
                    className={'fas fa-edit'}/> ویرایش
            </button>
        </>
    );
};

export default EditSelectedUser;