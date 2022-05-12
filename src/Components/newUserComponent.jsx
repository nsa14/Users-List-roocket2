import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import {ToastAlert} from "../Helper/toastComponent";
import { useForm } from "react-hook-form";

const initialState = {
    id: null,
    name: '',
    family: '',
    email: '',
    password: '',
    chk_admin: false,
    chk_status: false,
    created_at: Date.now(),
    updated_at: Date.now()
}

const ShowAddUserForm = ({setStateOfParent}) => {

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formEventHandler = e => setStateForm({...stateForm, [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value});

    const [stateForm, setStateForm] = useState(initialState);

    const changeModalStatus = (status) => {
        setStateForm(initialState);
        setIsOpen(status)
    }

    const openModal = () => {
        setIsOpen(true);
        setStateForm(initialState);
    }

    const onSubmit = data => {
        if (data != null) {
            setStateOfParent({...stateForm, id: Date.now()});
            ToastAlert(' کاربر جدید به درستی اضافه گردید','success')
            setIsOpen(false)
        } else{
            ToastAlert('خطاهای فرم را برطرف کنید','error')
        }
    }

    return (
        <>
            <Button variant="primary" onClick={openModal}>ایجاد کاربر جدید</Button>

            <Modal onSubmit={handleSubmit(onSubmit)} show={isOpen} fullscreen onHide={changeModalStatus} className="modal fade-scalenewUserComponent.jsx" aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>تمامی فیلد ها الزامی می باشد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="col-md-4 mx-auto" style={{textAlign: 'right'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.name">
                            <Form.Label>نام</Form.Label>
                            <input {...register("name", { required: true })} placeholder="نام را وارد کنید" className={'form-control'} value={stateForm.name} onChange={formEventHandler}/>
                            {errors.name?.type === 'required' && <small className={'form-element'}>الزامی می باشد</small>}
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.family"
                        >
                            <Form.Label>نام خانوادگی</Form.Label>
                            <input {...register("family", { required: true })} placeholder="نام خانوادگی را وارد کنید" className={'form-control'} value={stateForm.family} onChange={formEventHandler} />
                            {errors.family?.type === 'required' && <small className={'form-element'}>الزامی می باشد</small>}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.email"
                        >
                            <Form.Label>ایمیل</Form.Label>
                            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="ایمیل را وارد کنید" className={'form-control'} value={stateForm.email} onChange={formEventHandler}/>
                            {errors.email?.type === 'required' && <small className={'form-element'}>الزامی می باشد</small>}
                            {errors.email?.type === 'pattern' && <small className={'form-element'}>فرمت صحیح نمی باشد</small>}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>رمز عبور پنل</Form.Label>
                            <input {...register("password", { required: true })} placeholder="رمز عبور را وارد کنید" className={'form-control'} value={stateForm.password} onChange={formEventHandler}/>
                            {errors.password?.type === 'required' && <small className={'form-element'}>الزامی می باشد</small>}

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.chk_admin">
                            <Form.Check
                                name="chk_admin"
                                checked={stateForm.chk_admin}
                                onChange={formEventHandler}
                                type="switch"
                                id="chk_admin"
                                label="وضعیت ادمین"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                name="chk_status"
                                checked={stateForm.chk_status}
                                onChange={formEventHandler}
                                type="switch"
                                id="chk_status"
                                label="وضعیت "
                            />
                        </Form.Group>

                        <Button type='submit' variant="primary">ایجاد کاربر جدید</Button>
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