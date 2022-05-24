import {Form} from "react-bootstrap";
import React from "react";

const StoreMethod = ({isStoreMethod, changeStoreMethod}) => {

    const isStoreChanged = (e) => {
        changeStoreMethod(e.target.checked)
    }

    return (
        <>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-success" disabled>غیرفعال: لوکال </button>
                <button type="button" className="btn btn-outline-success">
                    <Form.Check
                        onChange={isStoreChanged.bind(this)}
                        checked={JSON.parse(isStoreMethod) === true}
                        name="isStoreMethod"
                        type="switch"
                        id="isStoreMethod"

                    />
                </button>
                <button type="button" className="btn btn-outline-success disabled">فعال: سرور</button>
            </div>
        </>
    );
};

export default StoreMethod;