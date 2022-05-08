import React, {useState} from "react";
import {Table} from "react-bootstrap";
import NewUserForm from "./newUserComponent";
import {ConvertTimestampToPersianDate} from "../Helper/persianDateComponent";
import {ToastAlert} from "../Helper/toastComponent";
import DeleteSelectedUser from "../Components/deleteUser";
import EditSelectedUser from "../Components/editUser";

const DataTable = (props) => {

    // const [userData, setUserData] = useState(props.data);
    let [userData, setUserData] = useState([]);

    // delete User from state userListDataState
    const deleteUser = (id) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserData(removeUserItem)
        ToastAlert('شماره کاربری ' + id + ' به درستی حذف شد.')
    }
    const deleteUserParent = (id) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserData(removeUserItem)
        ToastAlert('شماره کاربری ' + id + ' به درستی حذف شد.')
    }
    const editUserParent = (id) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserData(removeUserItem)
        ToastAlert('کاربر انتخابی بروزرسانی شد')
    }

    //add item form(child component) to this state
    const setStateOfParent = (newFormData) => {

        // userListDataState.push(newFormData);
        // setUserListDataState({...userListDataState});


        // setUserListDataState([...userListDataState, newFormData]);
        setUserData(currentArray => [...currentArray, newFormData])

        // setUserListDataState([...userListDataState, {...newFormData}]);
        console.log('newData : ');
        console.log(userData);
    }

    return (
        <>
            <div className="m-3 p-2">
                <NewUserForm data={userData} setStateOfParent={setStateOfParent}/>
            </div>
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
                {
                    userData.map(userdata => (

                        <tr key={userdata.id}>
                            <td>{userdata.id}</td>
                            <td>{userdata.name}</td>
                            <td>{userdata.family}</td>
                            <td>{userdata.password}</td>
                            <td>{userdata.email}</td>
                            <td className={'text-center'}>{userdata.IsAdmin ?
                                <i className='fas fa-check-circle text-success'/> :
                                <i className='fas fa-close text-danger'/>}</td>
                            <td className={'text-center'}>{userdata.IsStatus ?
                                <i className='fas fa-unlock text-success'/> :
                                <i className='fas fa-lock text-danger'/>}</td>
                            <td>{
                                // moment(new Date(userdata.created_at), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')
                                ConvertTimestampToPersianDate(userdata.created_at)
                            }</td>
                            <td>{
                                ConvertTimestampToPersianDate(userdata.created_at)
                            }</td>
                            <td>
                                {/*<button className={'btn btn-primary btn-xs m-1'}><i className={'fas fa-edit'}/> ویرایش*/}
                                {/*</button>*/}
                                <EditSelectedUser userid={userdata.id} propsClick={editUserParent}/>
                                <DeleteSelectedUser userid={userdata.id} propsClick={deleteUserParent}/>
                                {/*<button onClick={() => deleteUser(userdata.id)} className={'btn btn-danger btn-xs m-1'}>*/}
                                {/*    <i*/}
                                {/*        className={'fas fa-trash'}/> حذف*/}
                                {/*</button>*/}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    )

}

export default DataTable;