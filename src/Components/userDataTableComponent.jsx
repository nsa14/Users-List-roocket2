import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import NewUserForm from "./newUserComponent";
import TableHead from './table/TableHead';
import UserDataTableItem from './userDataTableItemComponent';
import TableFooter from './table/TableFooter';

const DataTable = () => {

    const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : []);

    useEffect(() => {
        localStorage.users = JSON.stringify(users)
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
    const setStateOfParent = (newUser) => setUsers(prevUsers => [newUser, ...prevUsers]);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-3">
                <NewUserForm data={users} setStateOfParent={setStateOfParent}/>
                <h4 className="text-secondary">لیست کاربران</h4>
            </div>

            <div className="table-responsive">
                <Table style={{direction: 'rtl', lineHeight: '60px'}} striped hover>
                    <TableHead titles={['نام', 'فامیل', 'رمز', 'ایمیل', 'کاربری', 'وضعیت', 'تاریخ ثبت', 'عملیات']} />
                    <tbody>{users.map(user => <UserDataTableItem key={user.id} userData={user} deleteUserParent={deleteUserParent} editUserParent={editUserParent}  />)}</tbody>
                    <TableFooter data={users.length} colSpan="7" />
                </Table>
            </div>

            <div>
                current State component is:<br/>
                <div role="alert" className="alert alert-dark text text-break">
                    {JSON.stringify(users)}
                </div>
            </div>
        </>
    )
}

export default DataTable;