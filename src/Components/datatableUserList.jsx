import React, {useState} from "react";
import {Button, Modal, Table} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import NewUserForm from './newUserComponent';


const UserListDataTable = () => {

    let [UserListDataState, setUserListDataState] = useState([
        {
            id: 1,
            name: 'naser',
            family: ' zare',
            password: 'naser65',
            email: 'naser@gmail.com',
            IsAdmin: true,
            IsStatus: true,
            created_at: '1401/02/06',
            updated_at: '1401/02/06'
        },
        {
            id: 2,
            name: 'حسام',
            family: 'پویان فر',
            password: 'hess3345',
            email: 'hess@gmail.com',
            IsAdmin: false,
            IsStatus: false,
            created_at: '1401/02/06',
            updated_at: '1401/02/06'
        },
    ]);

    // let dataTableUsers = () => {
    //     return (<Table style={{direction: 'rtl', lineHeight: '60px'}} striped bordered hover>
    //         <thead>
    //         <tr className={'text-center'}>
    //             <th>ردیف</th>
    //             <th>نام</th>
    //             <th>نام خانوادگی</th>
    //             <th>رمز عبور</th>
    //             <th>ایمیل</th>
    //             <th>مدیر</th>
    //             <th>وضعیت</th>
    //             <th>تاریخ ثبت</th>
    //             <th>تاریخ ویرایش</th>
    //             <th>عملیات</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {
    //             UserListDataState.map(userdata => (
    //                 <tr key={userdata.id}>
    //                     <td>{userdata.id}</td>
    //                     <td>{userdata.name}</td>
    //                     <td>{userdata.family}</td>
    //                     <td>{userdata.password}</td>
    //                     <td>{userdata.email}</td>
    //                     <td className={'text-center'}>{userdata.IsAdmin ?
    //                         <i className='fas fa-check-circle text-success'/> :
    //                         <i className='fas fa-close text-danger'/>}</td>
    //                     <td className={'text-center'}>{userdata.IsStatus ? <i className='fas fa-unlock text-success'/> :
    //                         <i className='fas fa-lock text-warning'/>}</td>
    //                     <td>{userdata.created_at}</td>
    //                     <td>{userdata.updated_at}</td>
    //                     <td>
    //                         <button className={'btn btn-primary btn-xs m-1'}><i className={'fas fa-edit'}/> ویرایش
    //                         </button>
    //                         <button onClick={() => deleteUser(userdata.id)} className={'btn btn-danger btn-xs m-1'}><i
    //                             className={'fas fa-trash'}/> حذف
    //                         </button>
    //                     </td>
    //                 </tr>
    //             ))
    //         }
    //         </tbody>
    //     </Table>);
    // }
    let dataTableUsers = (UserListDataState)=> {
        return (
            UserListDataState.map(userdata => (
                <tr key={userdata.id}>
                    <td>{userdata.id}</td>
                    <td>{userdata.name}</td>
                    <td>{userdata.family}</td>
                    <td>{userdata.password}</td>
                    <td>{userdata.email}</td>
                    <td className={'text-center'}>{userdata.IsAdmin ?
                        <i className='fas fa-check-circle text-success'/> :
                        <i className='fas fa-close text-danger'/>}</td>
                    <td className={'text-center'}>{userdata.IsStatus ? <i className='fas fa-unlock text-success'/> :
                        <i className='fas fa-lock text-warning'/>}</td>
                    <td>{userdata.created_at}</td>
                    <td>{userdata.updated_at}</td>
                    <td>
                        <button className={'btn btn-primary btn-xs m-1'}><i className={'fas fa-edit'}/> ویرایش
                        </button>
                        <button onClick={() => deleteUser(userdata.id)} className={'btn btn-danger btn-xs m-1'}><i
                            className={'fas fa-trash'}/> حذف
                        </button>
                    </td>
                </tr>
            ))
        );
    }

    // delete User from state UserListDataState
    const deleteUser = (id) => {
        const removeUserItem = UserListDataState.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserListDataState(removeUserItem)
        toast.success('شماره کاربری ' + id + ' به درستی حذف شد.', {
            position: "bottom-right",
            autoClose: 3000,
            rtl: true,
            theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    const setStateOfParent = (newFormData) => {
        console.log('old data: ' + JSON.stringify(UserListDataState));
        console.log('add new data: ' + JSON.stringify(newFormData));
        UserListDataState.push(newFormData);
        setUserListDataState({...UserListDataState});
        dataTableUsers(UserListDataState);
        // setUserListDataState(prevState =>{
        //     return{
        //         ...prevState,
        //         newFormData
        //     }
        // })
        console.log((UserListDataState));
    }

    return (
        <>
            <div className="m-3 p-2">
                <NewUserForm setStateOfParent={setStateOfParent}/>
            </div>

            {/*{ dataTableUsers(UserListDataState) }*/}
            <Table style={{direction: 'rtl', lineHeight: '60px'}} striped bordered hover>
                <thead>
                <tr className={'text-center'}>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>رمز عبور</th>
                    <th>ایمیل</th>
                    <th>مدیر</th>
                    <th>وضعیت</th>
                    <th>تاریخ ثبت</th>
                    <th>تاریخ ویرایش</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                {dataTableUsers(UserListDataState)}
                </tbody>
            </Table>

            <ToastContainer rtl/>
        </>
    )

}

export default UserListDataTable;