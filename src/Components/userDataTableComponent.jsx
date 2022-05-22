import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
// import NewUserForm from "./newUserComponent";
import TableHead from './table/TableHead';
import UserDataTableItem from './userDataTableItemComponent';
import {ApiAddresses} from '../Helper/apiAddressesComponent';
import TableFooter from './table/TableFooter';
import Header from '../theme_section/Header';
// import SearchUser from "./searchUserComponent";
import Footer from "../theme_section/Footer";

const DataTable = () => {

    // const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : []);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(ApiAddresses()).then((response) => {
            console.log(response.data.length)
            if (response.data.length>0)
                setUsers(response.data)
        });
    }, []);
    useEffect(() => {
        localStorage.users = JSON.stringify(users)
        localStorage.tempUsers = JSON.stringify(users);
    }, [users]);


    /**
     * delete User in state . use it parent .
     * @param id passed on child component and use in this parent method
     * if state count === 0 re-create localstorage empty
     */
    const deleteUserParent = (id) => setUsers(users.filter((user) => user.id !== parseInt(id)));

    /**
     * edit User data with method.
     * @param update single object of row updating
     */
    const editUserParent = (update) => setUsers(users.map(user => (user.id === update.id) ? update : user));

    /**
     * add item form(child component) to this state
     * @param newFormData object of data add to state inside old data state
     */
    const addNewUserInParent = (newUser) => setUsers(prevUsers => [newUser, ...prevUsers]);

    /**
     * find name field in local storage and show
     * @param findUser is name field
     */
    const searchUserInParentMain = (findUser) => {
        // console.log(findUser)
        localStorage.tempUsers = JSON.stringify(users);

        if (findUser === null) {
            // localStorage.tempUsers='tempUsers' in localStorage ?JSON.parse(localStorage.tempUsers): [];
            // setUsers( users ?? JSON.parse(localStorage.tempUsers))
        } else {
            localStorage.tempUsers = JSON.stringify(users);
            setUsers(findUser)
        }
    };

    return (
        <>
            <Header data={users} setStateOfParent={addNewUserInParent} searchClick={searchUserInParentMain}/>

            <div className="table-responsive">
                <Table style={{direction: 'rtl', lineHeight: '60px'}} striped hover>
                    <TableHead titles={['نام', 'فامیل', 'رمز', 'ایمیل', 'کاربری', 'وضعیت', 'تاریخ ثبت', 'عملیات']}/>
                    <tbody>{users.map(user => <UserDataTableItem key={user.id} userData={user}
                                                                 deleteUserParent={deleteUserParent}
                                                                 editUserParent={editUserParent}/>)}</tbody>
                    <TableFooter dataLength={users.length} colSpan="8"/>
                </Table>
            </div>

            <Footer users={users}/>
        </>
    )
}

export default DataTable;