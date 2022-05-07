import React from "react";
import {Table} from "react-bootstrap";

const DataTable = (props) => {

    const [userData, setUserData] = props.data;

    // delete User from state UserListDataState
    const deleteUser = (id) => {
    }

    return (
        <>
            {props.data.family}
            {/*<Table style={{direction: 'rtl', lineHeight: '60px'}} striped bordered hover>*/}
            {/*    <thead>*/}
            {/*    <tr className={'text-center'}>*/}
            {/*        <th>ردیف</th>*/}
            {/*        <th>نام</th>*/}
            {/*        <th>نام خانوادگی</th>*/}
            {/*        <th>رمز عبور</th>*/}
            {/*        <th>ایمیل</th>*/}
            {/*        <th>مدیر</th>*/}
            {/*        <th>وضعیت</th>*/}
            {/*        <th>تاریخ ثبت</th>*/}
            {/*        <th>تاریخ ویرایش</th>*/}
            {/*        <th>عملیات</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        userData.map(userdata => (*/}
            {/*            <tr key={userdata.id}>*/}
            {/*                <td>{userdata.id}</td>*/}
            {/*                <td>{userdata.name}</td>*/}
            {/*                <td>{userdata.family}</td>*/}
            {/*                <td>{userdata.password}</td>*/}
            {/*                <td>{userdata.email}</td>*/}
            {/*                <td className={'text-center'}>{userdata.IsAdmin ?*/}
            {/*                    <i className='fas fa-check-circle text-success'/> :*/}
            {/*                    <i className='fas fa-close text-danger'/>}</td>*/}
            {/*                <td className={'text-center'}>{userdata.IsStatus ? <i className='fas fa-unlock text-success'/> :*/}
            {/*                    <i className='fas fa-lock text-warning'/>}</td>*/}
            {/*                <td>{userdata.created_at}</td>*/}
            {/*                <td>{userdata.updated_at}</td>*/}
            {/*                <td>*/}
            {/*                    <button className={'btn btn-primary btn-xs m-1'}><i className={'fas fa-edit'}/> ویرایش*/}
            {/*                    </button>*/}
            {/*                    <button onClick={() => deleteUser(userdata.id)} className={'btn btn-danger btn-xs m-1'}><i*/}
            {/*                        className={'fas fa-trash'}/> حذف*/}
            {/*                    </button>*/}
            {/*                </td>*/}
            {/*            </tr>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*    </tbody>*/}
            {/*</Table>*/}
        </>
    )

}

export default DataTable;