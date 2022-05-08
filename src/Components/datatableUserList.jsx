import React, {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
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
    //             userListDataState.map(userdata => (
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
    // let dataTableUsers = ()=> {
    //     return (
    //         userListDataState.map(userdata => (
    //             <tr key={userdata.id}>
    //                 <td>{userdata.id}</td>
    //                 <td>{userdata.name}</td>
    //                 <td>{userdata.family}</td>
    //                 <td>{userdata.password}</td>
    //                 <td>{userdata.email}</td>
    //                 <td className={'text-center'}>{userdata.IsAdmin ?
    //                     <i className='fas fa-check-circle text-success'/> :
    //                     <i className='fas fa-close text-danger'/>}</td>
    //                 <td className={'text-center'}>{userdata.IsStatus ? <i className='fas fa-unlock text-success'/> :
    //                     <i className='fas fa-lock text-warning'/>}</td>
    //                 <td>{userdata.created_at}</td>
    //                 <td>{userdata.updated_at}</td>
    //                 <td>
    //                     <button className={'btn btn-primary btn-xs m-1'}><i className={'fas fa-edit'}/> ویرایش
    //                     </button>
    //                     <button onClick={() => deleteUser(userdata.id)} className={'btn btn-danger btn-xs m-1'}><i
    //                         className={'fas fa-trash'}/> حذف
    //                     </button>
    //                 </td>
    //             </tr>
    //         ))
    //     );
    // }

    // delete User from state userListDataState
    const deleteUser = (id) => {
        const removeUserItem = newData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setNewData(removeUserItem)
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


    return (
        <>

            {/*{ dataTableUsers(userListDataState) }*/}
            <DataTable data={newData}/>

            <ToastContainer rtl/>
        </>
    )

}

export default UserListDataTable;