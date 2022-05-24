import {ToastContainer} from "react-toastify";

const Footer = ({users, usersLocal, errors, storeMethod}) => {
    return (
        <div>
            current State {storeMethod?'api':'local'} component is:<br/>
            <div role="alert" className="alert alert-dark text text-break">
                state serverApi : <br/>{JSON.stringify(users)}<br/><br/>
                state local : <br/>{JSON.stringify(usersLocal)}
            </div>

            <span className="text-danger">errors State is:</span><br/>
            <div role="alert" className="alert alert-dark text text-break text-danger">
                {JSON.stringify(errors)}
            </div>
            <ToastContainer rtl/>
        </div>
    )
}

export default Footer