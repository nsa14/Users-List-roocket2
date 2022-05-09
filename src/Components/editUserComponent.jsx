import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {ToastAlert} from "../Helper/toastComponent";

const EditSelectedUser = (props) => {

    const [userid] = useState(props.userid);
    const [userData] = useState(props.userdata);

    const findRow = userData.filter(function (ele) {
        return ele.id === userid;
    })[0];

    const [isOpen, setIsOpen] = useState(false);
    const formEventHandler = (e) => {
        setStateForm({
            ...stateForm,
            [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value,
        })
    };
    const [stateForm, setStateForm] = useState({
        name: findRow.name,
        family: findRow.family,
        email: findRow.email,
        password: findRow.password,
        chk_admin: findRow.IsAdmin,
        chk_status: findRow.IsStatus,
        created_at: findRow.created_at,
        updated_at: findRow.updated_at,
    });

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => setIsOpen(false);

    function btnEditUser() {
        props.propsUpdateParentClick({
            id: userid,
            name: stateForm.name,
            family: stateForm.family,
            password: stateForm.password,
            email: stateForm.email,
            IsAdmin: stateForm.chk_admin,
            IsStatus: stateForm.chk_status,
            created_at: stateForm.created_at,
            updated_at: Date.now()
        });
        ToastAlert(' کاربر انتخابی به درستی ویرایش گردید', 'success')
        setIsOpen(false)
    }

    return (
        <>
            <button className={'btn btn-primary btn-xs m-1'} onClick={openModal}>
                <i
                    className={'fas fa-edit'}/> ویرایش
            </button>
            <Modal show={isOpen} fullscreen onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>تمامی فیلد ها الزامی می باشد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="col-md-4 mx-auto" style={{textAlign: 'right'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.name">
                            <Form.Label>نام</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                value={stateForm.name}
                                onChange={formEventHandler.bind(this)}
                                placeholder="نام را وارد کنید"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.family"
                        >
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control type="text"
                                          name="family"
                                          value={stateForm.family}
                                          onChange={formEventHandler.bind(this)}
                            />

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.email"
                        >
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control type="email" name="email" value={stateForm.email}
                                          onChange={formEventHandler.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>زمر عبور پنل</Form.Label>
                            <Form.Control type="password" name="password"
                                          value={stateForm.password}
                                          onChange={formEventHandler.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.chk_admin">
                            <Form.Check
                                name="chk_admin"
                                checked={stateForm.chk_admin}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="chk_admin"
                                label="وضعیت ادمین"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                name="chk_status"
                                checked={stateForm.chk_status}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="chk_status"
                                label="وضعیت "
                            />
                        </Form.Group>

                        <Button type='button' onClick={btnEditUser} variant="primary">ویرایش کاربر </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>بستن</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditSelectedUser;