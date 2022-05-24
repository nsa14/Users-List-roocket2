import NewUserForm from "../Components/newUserComponent";
import StoreMethod from "../Components/storeMethodComponent";
// import SearchUser from "../Components/searchUserComponent";

const Header = ({users, setStateOfParent, searchClick, storeMethod, changeStoreMethod}) => {

    // const searchUserInParent = (findUser) => {searchClick(findUser)};

    return (
        <div className="d-flex justify-content-between  my-3">
            <StoreMethod isStoreMethod={storeMethod} changeStoreMethod={changeStoreMethod}/>
            <NewUserForm data={users} setStateOfParent={setStateOfParent}/>
            {/*<SearchUser searchClick={searchUserInParent}/>*/}
            <h4 className="text-secondary">لیست کاربران</h4>
        </div>
    )
}

export default Header