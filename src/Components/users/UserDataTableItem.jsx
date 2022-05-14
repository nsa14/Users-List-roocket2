import DeleteSelectedUser from "./DeleteSelectedUser";
import EditSelectedUser from "./editUserComponent";
import {ConvertTimestampToPersianDate} from "../../Helper/persianDate";

const UserDataTableItem = (props) => {
    let {id, name, family, password, email, chk_admin, chk_status, created_at} = props.userData

    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>{family}</td>
            <td>{password}</td>
            <td>{email}</td>
            <td className={'text-center'}>
                {chk_admin ? <i className='fas fa-check-circle text-success'/> : <i className='fas fa-close text-danger'/>}
            </td>
            <td className={'text-center'}>
                {chk_status ? <i className='fas fa-unlock text-success'/> : <i className='fas fa-lock text-danger'/>}
            </td>
            <td>{ConvertTimestampToPersianDate(created_at)}</td>
            <td className="text-truncate">
                <EditSelectedUser userData={props.userData} propsUpdateParentClick={props.editUserParent}/>
                <DeleteSelectedUser userId={id} propsClick={props.deleteUserParent}/>
            </td>
        </tr>
    )
}

export default UserDataTableItem