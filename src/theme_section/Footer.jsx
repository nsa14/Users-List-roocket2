import {ToastContainer} from "react-toastify";

const Footer = ({users, errors}) => {
    return (
        <div>
            current State component is:<br/>
            <div role="alert" className="alert alert-dark text text-break">
                {JSON.stringify(users)}
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