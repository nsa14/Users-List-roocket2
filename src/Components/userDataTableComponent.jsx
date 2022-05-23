import {useEffect, useState} from "react";
import axios from "axios";
import {Spinner, Table} from "react-bootstrap";
import TableHead from './table/TableHead';
import UserDataTableItem from './userDataTableItemComponent';
import {AxiosGet, AxiosPost, AxiosDelete} from '../Helper/apiAddressesFunction';
import TableFooter from './table/TableFooter';
import Header from '../theme_section/Header';
// import SearchUser from "./searchUserComponent";
import Footer from "../theme_section/Footer";

const ShowUserList = () => {

    // const [users, setUsers] = useState('users' in localStorage ? JSON.parse(localStorage.users) : []);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    // //true: is server api   |   false: is localstorage
    const [storeMethod, setStoreMethod] = useState('storeMethod' in localStorage);

    useEffect(() => {
        getDataFromServer();
    }, []);

    useEffect(() => {
        // localStorage.users = JSON.stringify(users)
        // localStorage.tempUsers = JSON.stringify(users);
        getDataFromServer()
    }, [users]);

    /**
     * storeMethod is true: get data from server
     * storeMethod is false get data from localstorage
     */
    let getDataFromServer=()=>{
        if (!storeMethod){
            setLoading(true);
            AxiosGet()
                .then(response => {
                    if (response.isData) {
                        setUsers(response.data)
                    }else{
                        setError(response.error);
                    }
                })
                .catch(err => setError(err))

            setLoading(false)
        }else{
            setUsers('users' in localStorage ? JSON.parse(localStorage.users) : []);
        }
    }

    /**
     * delete User in state . use it parent .
     * @param id passed on child component and use in this parent method
     * if state count === 0 re-create localstorage empty
     */
    const deleteUserParent = (id) => {
        // setUsers(users.filter((user) => user.id !== parseInt(id)));
        AxiosDelete(id)
            .then(response => {
            })
            .catch(err => setError(err))
    }

    /**
     * edit User data with method.
     * @param update single object of row updating
     */
    const editUserParent = (update) => setUsers(users.map(user => (user.id === update.id) ? update : user));

    /**
     * add item form(child component) to this state
     * @param newUser object of data add to state inside old data state
     */
        // const addNewUserInParent = (newUser) => setUsers(prevUsers => [newUser, ...prevUsers]);
    const addNewUserInParent = (newUser) => {
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
            AxiosPost({
                ...newUser,
                isAdmin: newUser.chk_admin,
                isStatus: newUser.chk_status,
            })
                .then(response => {
                    if (response.isData) {
                        console.log('AxiosPost userDataComponent')
                        console.log(response)
                        setUsers(JSON.parse(response.data))
                    }else{
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

    return (
        <>
            <Header data={users} setStateOfParent={addNewUserInParent} searchClick={searchUserInParentMain}/>

            <div className="table-responsive">
                { loading? <Spinner className="text-center" animation="border"  />: ''}
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