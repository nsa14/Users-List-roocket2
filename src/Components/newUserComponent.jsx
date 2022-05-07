import React, {useRef, useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {ToastContainer, toast} from 'react-toastify';
import SimpleReactValidator from 'simple-react-validator';

const ShowAddUserForm = (props) => {

    const simpleValidator = useRef(new SimpleReactValidator({
        autoForceUpdate: this,
        className: 'text-danger',
        messages: {
            required: " نباید خالی باشد",
            alpha: " باید حرف باشد",
            numeric: " باید عدد باشد",
            email: " فرمت صحیح ندارد",
            password: " فرمت صحیح ندارد",
            min: " حداقل باید ۵ رقم باشد",
        }
    }));


    // const [isStatus, setIsStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const [name, setName] = useState('');
    const formEventHandler = (e) => {
        setStateForm({
            ...stateForm,
            [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value,
        })
    };
    const [stateForm, setStateForm] = useState({
        name: '',
        family: '',
        email: '',
        password: '',
        chk_admin: '',
        chk_status: '',
    });

    function handleFullNameBlur(e) {
        if (simpleValidator.current.allValid()) {
            console.log('validator valid');
            simpleValidator.current.hideMessages();
        } else {
            console.log('validator invalid');
            simpleValidator.current.showMessages(e.target.name);
        }
    }

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const btnInsertNewUser = () => {
        if (simpleValidator.current.allValid()) {
            props.setStateOfParent({
                id: 11,
                name: '123123213',
                family: ' sdfsdfsdfdsf',
                password: 'fdgdfgfdgfdg',
                email: '23324@gma234dfil.com',
                IsAdmin: true,
                IsStatus: true,
                created_at: '1401/02/22',
                updated_at: '1401/02/22'
            });
            toast.success(' کاربر جدید به درستی اضافه گردید', {
                position: "bottom-right",
                autoClose: 3000,
                rtl: true,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.error(' خطاهای فرم را برطرف کنید', {
                position: "bottom-right",
                autoClose: 3000,
                rtl: true,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.log('error' + JSON.stringify(simpleValidator.current.getErrorMessages()));
        }
    }


    return (
        <>
            <Button variant="primary" onClick={openModal}>
                ایجاد یوزر جدید
            </Button>
            <Modal show={isOpen} fullscreen onHide={closeModal} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>تمامی فیلد ها الزامی می باشد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<Form onSubmit={btnInsertNewUser} className="col-md-4 mx-auto" style={{textAlign: 'right'}}>*/}
                    <Form className="col-md-4 mx-auto" style={{textAlign: 'right'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.name">
                            <Form.Label>نام</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                value={stateForm.name}
                                onChange={formEventHandler.bind(this)}
                                onBlur={handleFullNameBlur.bind(this)}
                                // onBlur={() => simpleValidator.current.showMessageFor('name')}
                                placeholder="نام را وارد کنید"
                            />
                            {simpleValidator.current.message('name', stateForm.name, 'required|alpha')}
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
                                          onBlur={handleFullNameBlur.bind(this)}
                            />
                            {simpleValidator.current.message('family', stateForm.name, 'required|alpha')}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.email"
                        >
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control type="email" name="email" value={stateForm.email}
                                          onChange={formEventHandler.bind(this)}
                                          onBlur={handleFullNameBlur.bind(this)}
                            />
                            {simpleValidator.current.message('email', stateForm.name, 'required')}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>زمر عبور پنل</Form.Label>
                            <Form.Control type="password" name="password"
                                          value={stateForm.password}
                                          onChange={formEventHandler.bind(this)}
                                          onBlur={handleFullNameBlur.bind(this)}
                            />
                            {simpleValidator.current.message('password', stateForm.name, 'required')}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.chk_admin">
                            <Form.Check
                                name="chk_admin"
                                value={stateForm.chk_admin}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="chk_admin"
                                label="وضعیت ادمین"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                name="chk_status"
                                value={stateForm.chk_status}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="chk_status"
                                label="وضعیت "
                            />
                        </Form.Group>

                        <Button type='button' onClick={btnInsertNewUser} variant="primary">ایجاد کاربر جدید</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>بستن</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ShowAddUserForm;