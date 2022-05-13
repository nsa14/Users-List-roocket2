import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";

const SearchUser = ({searchClick}) => {

    const users = ('users' in localStorage ? JSON.parse(localStorage.users) : []);

    const findUser = (e)=>{
        const value = e.target.value;
        const result = users.filter(user => {
            return user.name === value
        })
        if(result.length>0){
            searchClick(result);
        }else{
            searchClick(null);
        }


    }

    return (
        <>
            <div className={'col-md-4'}>
                <label> جستجو در نام </label>
                <input type={'text'} className={'form form-control'} name={'search'} onChange={findUser}/>
            </div>

        </>
    )

}

export default SearchUser;