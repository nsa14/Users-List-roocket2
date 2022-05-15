import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { ToastAlert } from "../Helper/toastComponent";
import { useForm } from "react-hook-form";

const ShowAddUserForm = ({ setStateOfParent }) => {
  const [isOpen, setIsOpen] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        ایجاد کاربر جدید
      </Button>

      <Modal
        onSubmit={handleSubmit(onSubmit)}
        show={isOpen}
        fullscreen
        onHide={changeModalStatus}
        className="modal fade-scalenewUserComponent.jsx"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>تمامی فیلد ها الزامی می باشد</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-md-4 mx-auto" style={{ textAlign: "right" }}>
            <Form.Group className="mb-3" controlId="exampleForm.name">
              <Form.Label>نام</Form.Label>
              <input
                {...register("name", { required: true })}
                placeholder="نام را وارد کنید"
                className={"form-control"}
              />
              {errors.name?.type === "required" && (
                <small className={"form-element"}>الزامی می باشد</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.family">
              <Form.Label>نام خانوادگی</Form.Label>
              <input
                {...register("family", { required: true })}
                placeholder="نام خانوادگی را وارد کنید"
                className={"form-control"}
              />
              {errors.family?.type === "required" && (
                <small className={"form-element"}>الزامی می باشد</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.email">
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
                <small className={"form-element"}>الزامی می باشد</small>
              )}
              {errors.email?.type === "pattern" && (
                <small className={"form-element"}>فرمت صحیح نمی باشد</small>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>رمز عبور پنل</Form.Label>
              <input
                {...register("password", { required: true })}
                placeholder="رمز عبور را وارد کنید"
                className={"form-control"}
              />
              {errors.password?.type === "required" && (
                <small className={"form-element"}>الزامی می باشد</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.chk_admin">
              <Form.Check
                {...register("chk_admin")}
                name="chk_admin"
                type="switch"
                id="chk_admin"
                label="وضعیت ادمین"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                {...register("chk_status")}
                name="chk_status"
                type="switch"
                id="chk_status"
                label="وضعیت "
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              ایجاد کاربر جدید
            </Button>
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
