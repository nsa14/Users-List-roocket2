import ShowUserList from './Components/userDataTableComponent';

const UsersApp = () => {
    return(
        <div className="p-4">
            <div className="bg-white container border-radius py-5 my-5" style={{borderRadius: 10}}>
                <ShowUserList/>
            </div>
        </div>
    )
}

export default UsersApp;