import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import NewUserForm from "./newUserComponent";
import {ConvertTimestampToPersianDate} from "../Helper/persianDateComponent";
import {ToastAlert} from "../Helper/toastComponent";
import DeleteSelectedUser from "./deleteUserComponent";
import EditSelectedUser from "./editUserComponent";

const DataTable = () => {

    let [userData, setUserData] = useState([]);
    const lsDataCount = localStorage.getItem("data_practice_2") !== null ? localStorage.getItem("data_practice_2").length : 0;

    useEffect(() => {
        if(lsDataCount===0){
            localStorage.setItem("data_practice_2", '[]')
        }
        if (userData.length > 0) {
            localStorage.setItem("data_practice_2", JSON.stringify(userData));
        } else if(lsDataCount >2) {
            loadDataOnlyOnce();
        }else if(userData.length ===null) {
            loadDataOnlyOnce();
        }
    });

    /**
     * set localstorage data to state userDate
     */
    function loadDataOnlyOnce(){
        let LSUD = localStorage.getItem("data_practice_2");
        setUserData(JSON.parse(LSUD))
    }
    
    /**
     * delete User in state . use it parent .
     * @param id passed on child component and use in this parent method
     * if state count === 0 re-create localstorage empty
     */
    const deleteUserParent = (id) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(id);
        })
        setUserData(removeUserItem)
        ToastAlert('شماره کاربری ' + id + ' به درستی حذف شد.')
        if (removeUserItem.length===0){
            localStorage.setItem("data_practice_2", '[]')
        }
    }

    /**
     * edit User data with method.
     * @param update single object of row updating
     */
    const editUserParent = (update) => {
        const removeUserItem = userData.filter(function (ele) {
            return ele.id !== parseInt(update.id);
        })
        setUserData(currentArray => [...removeUserItem, update])
    }

    /**
     * add item form(child component) to this state
     * @param newFormData object of data add to state inside old data state
     */
    const setStateOfParent = (newFormData) => {
        // userListDataState.push(newFormData);
        // setUserListDataState({...userListDataState});

        // setUserListDataState([...userListDataState, newFormData]);
        setUserData(currentArray => [...currentArray, newFormData])
        // console.log('newFormData is : ');
        // console.log(newFormData);
        // console.log('userData is : ');
        // console.log(userData);


        // localStorage.setItem("data_practice", JSON.stringify(localStorageData));
        // setUserListDataState([...userListDataState, {...newFormData}]);

        // const localStorageData = JSON.parse(localStorage.getItem("data_practice_2"));
        // localStorageData.push(newFormData);
        // localStorage.setItem("data_practice_2", JSON.stringify([newFormData]))

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
                        <tr className="text-center">
                            <td colSpan={10}><span className="text-center text-danger">&#9785;  داده ایی در state برای نمایش وجود ندارد &#9785;</span>
                            </td>
                        </tr>
                }
                </tbody>
            </Table>
            <div>
                current State component is:<br/>
                <div role="alert" className="fade alert alert-dark show">
                    <small>{JSON.stringify(userData)}</small>
                </div>
            </div>
        </>
    )
}

export default DataTable;