import {ToastContainer} from "react-toastify";

const Footer = ({users, usersLocal, errors, storeMethod}) => {
    return (
        <div>
            <div className="alert alert-info position-relative">
                تعداد رکورد <span className="start-100 translate-middle badge rounded-pill bg-danger">
                            {
                                storeMethod
                                    ? (users.length)
                                    : (usersLocal.length)
                            }
            </span>
            </div>


            current State {storeMethod ? 'api' : 'local'} component is:<br/>
            <div role="alert" className="alert alert-dark text text-break">
                {
                    storeMethod
                        ? JSON.stringify(users)
                        : JSON.stringify(usersLocal)
                }
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