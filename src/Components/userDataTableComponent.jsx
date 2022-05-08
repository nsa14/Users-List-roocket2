import React, {useState} from "react";
import {Table} from "react-bootstrap";
import NewUserForm from "./newUserComponent";
import {ConvertTimestampToPersianDate} from "../Helper/persianDateComponent";
import {ToastAlert} from "../Helper/toastComponent";
import DeleteSelectedUser from "./deleteUserComponent";
import EditSelectedUser from "./editUserComponent";

const DataTable = (props) => {

    let [userData, setUserData] = useState([]);

    const deleteUserParent = (id) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserData(removeUserItem)
        ToastAlert('شماره کاربری ' + id + ' به درستی حذف شد.')
    }
    const editUserParent = (update) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(update.id);
        })
        setUserData(currentArray => [...removeUserItem, update])
    }

    //add item form(child component) to this state
    const setStateOfParent = (newFormData) => {
        // userListDataState.push(newFormData);
        // setUserListDataState({...userListDataState});

        // setUserListDataState([...userListDataState, newFormData]);
        setUserData(currentArray => [...currentArray, newFormData])
        // setUserListDataState([...userListDataState, {...newFormData}]);
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
                    userData.length > 0 ?
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
                                        ConvertTimestampToPersianDate(userdata.created_at)
                                    }</td>
                                    <td>{
                                        ConvertTimestampToPersianDate(userdata.created_at)
                                    }</td>
                                    <td>
                                        <EditSelectedUser userid={userdata.id} userdata={userData}
                                                          propsUpdateParentClick={editUserParent}/>
                                        <DeleteSelectedUser userid={userdata.id} propsClick={deleteUserParent}/>
                                    </td>
                                </tr>
                            )
                        ) :
                        <tr className="text-center"><td colSpan={10}><span className="text-center text-danger">&#9785;  داده ایی در state برای نمایش وجود ندارد &#9785;</span></td></tr>
                }
                </tbody>
            </Table>
        </>
    )

}

export default DataTable;