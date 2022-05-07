import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Modal.Body>
                    <Form>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Example