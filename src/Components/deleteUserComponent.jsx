import React, {useState} from 'react';

const DeleteSelectedUser = (props) => {
    const[userid, setUserId] = useState(props.userid);

    const btnDeleteUser = () => {
        props.propsClick(userid);
    }

    return (
        <>
            <button className={'btn btn-danger btn-xs m-1'} onClick={btnDeleteUser}>
                <i
                    className={'fas fa-trash'}/> حذف
            </button>
        </>
    );
};

export default DeleteSelectedUser;