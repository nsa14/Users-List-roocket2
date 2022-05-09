import React, {useRef, useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import SimpleReactValidator from 'simple-react-validator';
import {ToastAlert} from "../Helper/toastComponent";

const ShowAddUserForm = (props) => {
    const simpleValidator = useRef(new SimpleReactValidator({
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


    const [isOpen, setIsOpen] = useState(false);
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

    const openModal = () => {
        setIsOpen(true);
        setStateForm({});
    }

    const changeModalStatus=(status)=>setIsOpen(status)

    const btnInsertNewUser = () => {
        if (simpleValidator.current.allValid()) {
            props.setStateOfParent({
                id: props.data.length*3,
                name: stateForm.name,
                family: stateForm.family,
                password: stateForm.password,
                email: stateForm.email,
                IsAdmin: stateForm.chk_admin,
                IsStatus: stateForm.chk_status,
                created_at: Date.now (),
                updated_at: Date.now ()
            });
            ToastAlert(' کاربر جدید به درستی اضافه گردید','success')
            setIsOpen(false)

        } else {
            ToastAlert('خطاهای فرم را برطرف کنید','error')
        }
    }

    return (
        <>
            <Button variant="primary" onClick={openModal}>
                ایجاد یوزر جدید
            </Button>
            <Modal show={isOpen} fullscreen onHide={changeModalStatus} className="modal fade-scale" aria-labelledby="example-modal-sizes-title-lg">
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
                                onBlur={handleFullNameBlur.bind(this)}
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

                        <Button type='button' onClick={btnInsertNewUser} variant="primary">ایجاد کاربر جدید</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>changeModalStatus(false)}>بستن</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ShowAddUserForm;