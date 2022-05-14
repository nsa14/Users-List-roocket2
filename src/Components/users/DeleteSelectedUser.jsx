import {ToastAlert} from "../../Helper/ToastAlert";

const DeleteSelectedUser = ({propsClick, userId}) => {

    const deleteHandler = () => {
        const result = window.confirm("آیا مطمئن هستید؟")
        if (result) {
            propsClick(userId);
            ToastAlert(`شماره کاربری ${userId} به درستی حذف شد.`);
        }
    }

    return (
        <>
            <button className={'btn btn-danger btn-sm m-1'} onClick={deleteHandler}>
                <i className={'fas fa-trash'}/> حذف
            </button>
        </>
    );
};

export default DeleteSelectedUser;