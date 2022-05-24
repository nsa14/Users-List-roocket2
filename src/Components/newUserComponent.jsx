import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";
import {ToastAlert} from "../Helper/toastComponent";
import {useForm} from "react-hook-form";

const ShowAddUserForm = ({setStateOfParent}) => {
    const [isOpen, setIsOpen] = useState();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const changeModalStatus = (status) => {
        reset();
        setIsOpen(status);
    };

    const onSubmit = (data) => {
        const nowDate = Date.now();
        if (data != null) {
            setStateOfParent({
                ...data,
                id: nowDate,
                created_at: nowDate,
                updated_at: nowDate,
            });
            ToastAlert("کاربر جدید به درستی اضافه گردید", "success");
            reset();
            setIsOpen(false);
        } else {
            ToastAlert("خطاهای فرم را برطرف کنید", "error");
        }
    };

    return (
        <>
            <Button className="btn btn-success" onClick={() => setIsOpen(true)}>
                ایجاد کاربر جدید
            </Button>

            <Modal
                onSubmit={handleSubmit(onSubmit)}
                show={isOpen}
                onHide={changeModalStatus}
                className="modal fade-scalenewUserComponent.jsx"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>تمامی فیلد ها الزامی می باشد</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="col-md-12 mx-auto" style={{textAlign: "right", direction:"rtl"}}>
                        <div className="row">
                            <div className="col-md-12"><Form.Group className="mb-3" controlId="exampleForm.name">
                                <Form.Label>نام</Form.Label>
                                <input
                                    {...register("name", {required: true})}
                                    placeholder="نام را وارد کنید"
                                    className={"form-control"}
                                />
                                {errors.name?.type === "required" && (
                                    <small className={"form-element text-danger"}>الزامی می باشد</small>
                                )}
                            </Form.Group></div>
                            <div className="col-md-12"><Form.Group className="mb-3" controlId="exampleForm.family">
                                <Form.Label>نام خانوادگی</Form.Label>
                                <input
                                    {...register("family", {required: true})}
                                    placeholder="نام خانوادگی را وارد کنید"
                                    className={"form-control"}
                                />
                                {errors.family?.type === "required" && (
                                    <small className={"form-element text-danger"}>الزامی می باشد</small>
                                )}
                            </Form.Group></div>
                        </div>
                        <div className="row">
                            <div><Form.Group className="mb-3" controlId="exampleForm.email">
                                <Form.Label>ایمیل</Form.Label>
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
                                    placeholder="ایمیل را وارد کنید"
                                    className={"form-control"}
                                />
                                {errors.email?.type === "required" && (
                                    <small className={"form-element text-danger"}>الزامی می باشد</small>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <small className={"form-element text-danger"}>فرمت صحیح نمی باشد</small>
                                )}
                            </Form.Group></div>
                            <div><Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>رمز عبور پنل</Form.Label>
                                <input
                                    {...register("password", {required: true})}
                                    placeholder="رمز عبور را وارد کنید"
                                    autoComplete="off"
                                    className={"form-control"}
                                />
                                {errors.password?.type === "required" && (
                                    <small className={"form-element text-danger"}>الزامی می باشد</small>
                                )}
                            </Form.Group></div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <Form.Group className="mb-3" controlId="exampleForm.isAdmin">
                                    <Form.Check
                                        {...register("isAdmin")}
                                        name="isAdmin"
                                        type="switch"
                                        id="isAdmin"
                                        label="وضعیت ادمین"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group>
                                    <Form.Check
                                        {...register("isStatus")}
                                        name="isStatus"
                                        type="switch"
                                        id="isStatus"
                                        label="وضعیت کاربر "
                                    />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button type="submit" variant="primary" className="btn-lg">ایجاد کاربر جدید</Button>
                        </div>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => changeModalStatus(false)}>
                        بستن
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ShowAddUserForm;
