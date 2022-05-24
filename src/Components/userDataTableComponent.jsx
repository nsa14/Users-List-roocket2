import {useEffect, useState} from "react";
import {Spinner, Table} from "react-bootstrap";
import TableHead from './table/TableHead';
import UserDataTableItem from './userDataTableItemComponent';
import {AxiosGet, AxiosPost, AxiosDelete, AxiosUpdate} from '../Helper/apiAddressesFunction';
import TableFooter from './table/TableFooter';
import Header from '../theme_section/Header';
// import SearchUser from "./searchUserComponent";
import Footer from "../theme_section/Footer";

const ShowUserList = () => {
    const [storeMethod, setStoreMethod] = useState('storeMethod' in localStorage ? JSON.parse(localStorage.storeMethod) : localStorage.setItem('storeMethod', true));
    const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : localStorage.setItem('users', '[]'));
    const [usersLocal, setUsersLocal] = useState('usersLocal' in localStorage ? JSON.parse(localStorage.usersLocal) : localStorage.setItem('usersLocal', '[]'));
    const [error, setError] = useState([]);
    const [loading, setIsLoading] = useState(false);

    /**
     * call once useEffect
     */
    useEffect(() => {
        getDataFromServer()
        console.log('useEffect 1')
    }, []);

    useEffect(() => {
        getDataFromServer()
        console.log('useEffect 2')
    },[storeMethod]);


    useEffect(() => {
        localStorage.usersLocal = JSON.stringify(usersLocal)
        console.log('useEffect 3')
    }, [usersLocal])

    /**
     * storeMethod is true: get data from server
     * storeMethod is false get data from localstorage
     */
    function getDataFromServer() {

        setIsLoading(true);
        if (storeMethod) {
            AxiosGet()
                .then(response => {
                    if (response.isData) {
                        setUsers(response.data)
                    } else {
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))
                .finally(() => setIsLoading(false)); // complete loading success/fail

        } else {
            AxiosGet()
                .then(response => {
                    if (response.isData) {
                        setUsers(response.data)
                    } else {
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))
                .finally(() => setIsLoading(false)); // complete loading success/fail
            // setUsers('users' in localStorage ? JSON.parse(localStorage.users) : []);
            setUsersLocal('usersLocal' in localStorage ? JSON.parse(localStorage.usersLocal) : []);
        }
        setIsLoading(false);
    }

    /**
     * delete User in state . use it parent .
     * @param id passed on child component and use in this parent method
     * if state count === 0 re-create localstorage empty
     */
    const deleteUserParent = (id) => {
        if (storeMethod) {
            AxiosDelete(id)
                .then(response => {
                    if (response.isData) {
                        setUsers(response.data)
                        setUsers(users.filter((user) => user.id !== parseInt(id)));
                    } else {
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))
        } else {
            //localStorage
            setUsers(users.filter((user) => user.id !== parseInt(id)));
            setUsersLocal(usersLocal.filter((user) => user.id !== parseInt(id)));
        }
    }

    /**
     * edit User data with method.
     * @param update single object of row updating
     */
    const editUserParent = (update) => {

        if (storeMethod) {
            AxiosUpdate(update.id, update)
                .then(response => {
                    setUsers(users.map(user => (user.id === update.id) ? update : user));
                })
                .catch(err => setError(err))
        } else {
            setUsers(users.map(user => (user.id === update.id) ? update : user));
            setUsersLocal(usersLocal.map(user => (user.id === update.id) ? update : user));
        }

    }

    /**
     * add item form(child component) to this state
     * @param newUser object of data add to state inside old data state
     */
    const addNewUserInParent = (newUser) => {
        if (storeMethod) {
            //serverApi
            AxiosPost(newUser)
                .then(response => {
                    if (response.isData) {
                        setUsers(prevState => [...prevState, response.data])
                    } else {
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))
        } else {
            //localStorage
            setUsers(prevUsers => [newUser, ...prevUsers]);
            setUsersLocal(prevUsers => [newUser, ...prevUsers]);
        }
    }

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

    /**
     * change store method : true is ServerApi  |  false is localStorage
     * @param value is true or false
     */
    const changeStoreMethod = (value) => {
        localStorage.setItem('storeMethod', value)
        setStoreMethod(value);
    }

    return (
        <>
            <Header data={users} setStateOfParent={addNewUserInParent} searchClick={searchUserInParentMain}
                    changeStoreMethod={changeStoreMethod} storeMethod={storeMethod}/>

            <div className="table-responsive">
                {loading ? <Spinner className="text-center" animation="border"/> : ''}
                <Table style={{direction: 'rtl', lineHeight: '60px'}} striped hover>
                    <TableHead titles={['نام', 'فامیل', 'رمز', 'ایمیل', 'کاربری', 'وضعیت', 'تاریخ ثبت', 'عملیات']}/>
                    <tbody>
                    {
                        storeMethod ?
                            users.map(user => <UserDataTableItem key={user.id}
                                                                 userData={user}
                                                                 deleteUserParent={deleteUserParent}
                                                                 editUserParent={editUserParent}
                            />)
                            :
                            usersLocal.map(user => <UserDataTableItem key={user.id}
                                                                      userData={user}
                                                                      deleteUserParent={deleteUserParent}
                                                                      editUserParent={editUserParent}
                            />)
                    }
                    </tbody>
                    <TableFooter dataLength={users.length} colSpan="8"/>
                </Table>
            </div>

            {'-- storeMethod : ' + storeMethod}
            {'-- userApi : ' + users.length}
            {'-- usersLocal : ' + usersLocal.length}

            <Footer users={users} usersLocal={usersLocal} storeMethod={storeMethod} errors={error}/>
        </>
    )
}

export default ShowUserList;