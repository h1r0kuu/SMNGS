import React, {ReactElement} from "react";
import List from "../../../components/List/List";
import Page from "../../../components/Page/Page";
import {BreadcrumbItem, Button, Card, Col, Form, FormControl, FormSelect, Row} from "react-bootstrap";

const StudentEdit = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Students</BreadcrumbItem>
                <BreadcrumbItem active>Edit Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>First Name</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Last Name</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Student Id</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Gender</Form.Label>
                                            <FormSelect className={"form-control"}>
                                                <option>Female</option>
                                                <option>Select Gender</option>
                                                <option>Male</option>
                                                <option>Others</option>
                                            </FormSelect>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Date of Birth</Form.Label>
                                            <div>
                                                <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Class</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Religion</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Joining Date</Form.Label>
                                            <div>
                                                <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Mobile Number</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Admission Number</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Section</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Student Image</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <div className="col-12">
                                        <h5 className="form-title"><span>Parent Information</span></h5>
                                    </div>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Father's Name</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Father's Occupation</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Father's Mobile</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Father's Email</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Mother's Name</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Mother's Occupation</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Mother's Mobile</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Mother's Email</Form.Label>
                                            <FormControl type={"text"} placeholder={"Email"} value={"dsada"}></FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Present Address</Form.Label>
                                            <FormControl as={"textarea"} type={"text"} placeholder={"Email"}>dasdas</FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className={"form-group"}>
                                            <Form.Label>Permanent Address</Form.Label>
                                            <FormControl as={"textarea"} type={"text"} placeholder={"Email"}>dasdas</FormControl>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Button type={"submit"} variant={"primary"} style={{width: "100%"}}>Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Page>
    )
}

export default StudentEdit;