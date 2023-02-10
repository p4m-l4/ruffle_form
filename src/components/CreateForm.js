import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const CreateForm = () => {
    return ( 
        <>
        <h3 style={{textAlign: 'center', marginTop: 80}}>Create your own questionnaire</h3>
        <div>
        <div style={{margin: 100, padding: 20, marginTop: 20,backgroundColor: 'white', borderRadius: 10, width: 1700, }}>
        <div>
                <h5>Select Category</h5>
            <Row style={{margin: 20, borderColor: 'grey', borderWidth: 0, borderStyle: 'ridge'}}>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col><Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{margin: 20, borderColor: 'grey', borderWidth: 0, borderStyle: 'ridge'}}>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Maths" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </div>
        </div>
        <div style={{margin: 100, padding: 20, marginTop: 20,backgroundColor: 'white', borderRadius: 10, width: 1700, }}>
                <h5>Category Name</h5>
            <Row style={{margin: 20, borderColor: 'grey', borderWidth: 0, borderStyle: 'ridge'}}>
            <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>1 of 2</Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, backgroundColor: 'grey'}}>
                        <Col>1 of 2</Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{margin: 20, borderColor: 'grey', borderWidth: 0, borderStyle: 'ridge'}}>
                <Col>
                    <Row style={{margin: 8, borderColor: 'white'}}>
                        <Col>1 of 2</Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{margin: 8, backgroundColor: 'grey'}}>
                        <Col>1 of 2</Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </div>
        </>
     );
}
 
export default CreateForm;