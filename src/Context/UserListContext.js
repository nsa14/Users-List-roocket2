import React from 'react';

const UserListContext = React.createContext({
    addNewUserInParent: ()=>{},
    deleteUserParent: () => {},
    editUserParent :()=>{},
})

export default UserListContext;