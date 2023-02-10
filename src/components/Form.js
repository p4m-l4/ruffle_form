import { MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const Questionnaire = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return ( 
        <>
        <h3 style={{textAlign: 'center', marginTop: 80}}>Add questions</h3>
        <Container style={{marginLeft: 100, marginTop: 0, marginBottom: 100, backgroundColor: 'white', padding: 50}}>  
        
        <Button variant="light" style={{width: 300, paddingRight: 20}} onClick={handleShow}>Add Category</Button>{' '}
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <h5 style={{textAlign: 'center'}}>Add a category</h5>
            </Modal.Header>
            <Container>
                        <Form>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control placeholder="Enter Category" as="textarea" rows={1} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Enter text" as="textarea" rows={3} />
                            </Form.Group>
                            </Form>
            </Container>
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        
        <div style={{marginLeft: 20, marginRight: 20, marginTop: 50, marginBottom: 50, width: 1600, backgroundColor: 'aliceblue', padding: 50, borderRadius: 10}}>
            <Row>
                <Col xs={2}>
                    <h5 style={{textAlign: 'center'}}>Category</h5>
                </Col>
                <Col xs={5}>
                    <h5 style={{textAlign: 'center'}}>Question</h5>
                </Col>
                <Col xs={5}>
                    <h5 style={{textAlign: 'center'}}>Answer</h5>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={2}>
                <Form.Group className="mb-4">
                <Form.Label></Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter question" as="textarea" rows={1} />
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter answer" as="textarea" rows={1} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                <Form.Group className="mb-4">
                <Form.Label></Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter question" as="textarea" rows={1} />
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter answer" as="textarea" rows={1} />
                </Form.Group>
                </Col>
            </Row><Row>
                <Col xs={2}>
                <Form.Group className="mb-4">
                <Form.Label></Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter question" as="textarea" rows={1} />
                </Form.Group>
                </Col>
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter answer" as="textarea" rows={1} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col>
                <Button variant="primary" style={{width: 300}}>Add question</Button>{' '}
            </Col>
            <Col>
                <Button variant="primary" style={{ width: 300}}>Submit</Button>{' '}
            </Col>
        </Row>
        </div>
        
        
        </Container>
        
        </>
    );
}
 
export default Questionnaire;