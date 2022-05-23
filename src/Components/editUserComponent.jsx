import {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {ToastAlert} from "../Helper/toastComponent";

export default ({userData, propsUpdateParentClick}) => {

    const [isOpen, setIsOpen] = useState(false);

    const [stateForm, setStateForm] = useState(userData);

    const formEventHandler = e => setStateForm({...stateForm, [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value});

    const btnEditUser = () => {
        propsUpdateParentClick({...stateForm, id: userData.id, updated_at: Date.now()})
        ToastAlert('کاربر انتخابی به درستی ویرایش گردید', 'success')
        setIsOpen(false)
    }

    return (
        <>
            <button className={'btn btn-primary btn-sm m-1'} onClick={() => setIsOpen(true)}>
                <i className={'fas fa-edit'}/> ویرایش
            </button>

            <Modal show={isOpen} fullscreen onHide={() => setIsOpen(false)}>
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
                            controlId="exampleForm.isAdmin">
                            <Form.Check
                                name="isAdmin"
                                checked={stateForm.isAdmin}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="isAdmin"
                                label="وضعیت ادمین"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                name="isStatus"
                                checked={stateForm.isStatus}
                                onChange={formEventHandler.bind(this)}
                                type="switch"
                                id="isStatus"
                                label="وضعیت "
                            />
                        </Form.Group>

                        <Button type='button' onClick={btnEditUser} variant="primary">ویرایش کاربر </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>بستن</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};