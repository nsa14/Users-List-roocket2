import {useEffect, useState} from "react";
import axios from "axios";
import {Spinner, Table} from "react-bootstrap";
import TableHead from './table/TableHead';
import UserDataTableItem from './userDataTableItemComponent';
import {AxiosGet, AxiosPost, AxiosDelete, AxiosUpdate} from '../Helper/apiAddressesFunction';
import TableFooter from './table/TableFooter';
import Header from '../theme_section/Header';
// import SearchUser from "./searchUserComponent";
import Footer from "../theme_section/Footer";

const ShowUserList = () => {
    const [storeMethod, setStoreMethod] = useState('storeMethod' in localStorage ? JSON.parse(localStorage.storeMethod) : localStorage.setItem('storeMethod', false));
    const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : []);
    // const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    // //true: is server api   |   false: is localstorage

    useEffect(() => {
        getDataFromServer();
    }, []);

    useEffect(() => {
        // localStorage.users = JSON.stringify(users)
        // localStorage.tempUsers = JSON.stringify(users);
        if (!storeMethod) {
            // localStorage.users = JSON.stringify(users)
            setUsers('users' in localStorage ? JSON.parse(localStorage.users) : []);
        }else{
            //get data serverApi
            getDataFromServer();
        }
    }, [users]);
    useEffect(() => {
        // localStorage.users = JSON.stringify(users)
        // localStorage.tempUsers = JSON.stringify(users);
        if (!storeMethod) {
            console.log('useEffect storeMethod is false')
            // localStorage.users = JSON.stringify(users)
            setUsers('users' in localStorage ? JSON.parse(localStorage.users) : []);
        }else{
            console.log('useEffect storeMethod is true server')
            //get data serverApi
            getDataFromServer();
        }
    }, [storeMethod]);

    /**
     * storeMethod is true: get data from server
     * storeMethod is false get data from localstorage
     */
    let getDataFromServer = () => {
        if (storeMethod) {
            setLoading(true);
            AxiosGet()
                .then(response => {
                    if (response.isData) {
                        setUsers(response.data)
                    } else {
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))

            setLoading(false)
        } else {
            const vvv = 'users' in localStorage ? JSON.parse(localStorage.users) : [];
            console.log('vvv');
            console.log(vvv);
            // localStorage.users = JSON.stringify(users)
            // setUsers('users' in localStorage ? JSON.parse(localStorage.users) : []);
        }
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
                })
                .catch(err => setError(err))
        } else {
            //localStorage
            setUsers(users.filter((user) => user.id !== parseInt(id)));
        }
    }

    /**
     * edit User data with method.
     * @param update single object of row updating
     */
    const editUserParent = (update) => {

        console.log('update')
        console.log(update)
        if (storeMethod) {
            AxiosUpdate(update.id, update)
                .then(response => {
                })
                .catch(err => setError(err))
        }else{
            // localStorage
            setUsers(users.map(user => (user.id === update.id) ? update : user));
        }

    }

    /**
     * add item form(child component) to this state
     * @param newUser object of data add to state inside old data state
     */
        // const addNewUserInParent = (newUser) => setUsers(prevUsers => [newUser, ...prevUsers]);
    const addNewUserInParent = (newUser) => {
            if (storeMethod) {
                //serverApi
                // const data = {
                //     name: newUser.name,
                //     family: newUser.family,
                //     password: newUser.password,
                //     isAdmin: newUser.chk_admin,
                //     isStatus: newUser.chk_status,
                //     email: newUser.email,
                //     created_at: newUser.created_at,
                //     updated_at: newUser.updated_at,
                // }
                // console.log(newUser);
                // setUsers(prevUsers => [newUser, ...prevUsers]);
                AxiosPost(newUser)
                    .then(response => {
                        if (response.isData) {
                            console.log('AxiosPost userDataComponent')
                            console.log(response)
                            setUsers(JSON.parse(response.data))
                        } else {
                            setError(response.error);
                        }
                    })
                    .catch(err => setError(err))
                // axios
                //     .post(ApiAddresses(), data)
                //     .then((response) => {
                //         setUsers(prevState => prevState, response.data);
                //     }).catch(error => {
                //     setError(error);
                // });
            } else {
                //localStorage
                setUsers(prevUsers => [newUser, ...prevUsers]);
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
                        users.map(user => <UserDataTableItem key={user.id}
                                                             userData={user}
                                                             deleteUserParent={deleteUserParent}
                                                             editUserParent={editUserParent}
                            />
                        )
                    }
                    </tbody>
                    <TableFooter dataLength={users.length} colSpan="8"/>
                </Table>
            </div>

            <Footer users={users} errors={error}/>
        </>
    )
}

export default ShowUserList;