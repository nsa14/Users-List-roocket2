import NewUserForm from "../Components/newUserComponent";
// import SearchUser from "../Components/searchUserComponent";

const Header = ({users, setStateOfParent, searchClick}) => {

    // const searchUserInParent = (findUser) => {searchClick(findUser)};

    return (
        <div className="d-flex justify-content-between align-items-center my-3">
            <NewUserForm data={users} setStateOfParent={setStateOfParent}/>
            {/*<SearchUser searchClick={searchUserInParent}/>*/}
            <h4 className="text-secondary">لیست کاربران</h4>
        </div>
    )
}

export default Header