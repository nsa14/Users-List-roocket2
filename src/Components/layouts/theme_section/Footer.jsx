import {ToastContainer} from "react-toastify";

const Footer = ({users}) => {
    return (
        <div>
            current State component is:<br/>
            <div role="alert" className="alert alert-dark text text-break">
                {JSON.stringify(users)}
            </div>
            <ToastContainer rtl/>
        </div>
    )
}

export default Footer