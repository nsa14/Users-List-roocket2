import {Form} from "react-bootstrap";
import React, {useState} from "react";

const StoreMethod = ({isStoreMethod, changeStoreMethod}) => {

    const isStoreChanged = (e)=>{
        changeStoreMethod(e.target.checked)
    }

    return (
        <>
            <div>
                <span className="text-primary m-2">فعال: سرور</span>
                <span className="text-secondary m-2">غیرفعال: لوکال استوریج</span>
                <Form.Check
                    onChange={isStoreChanged.bind(this)}
                    checked={JSON.parse(isStoreMethod) === true}
                    name="isStoreMethod"
                    type="switch"
                    id="isStoreMethod"
                    label="نوع ذخیره سازی "
                />
            </div>


        </>
    );
};

export default StoreMethod;