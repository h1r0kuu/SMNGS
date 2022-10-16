import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";

const StudentAdd = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Students</BreadcrumbItem>
                <BreadcrumbItem active>Add Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Add Students"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit>
                <Col xs={12}>
                    <h5 className="form-title"><span>Student Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>First Name</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Last Name</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Student Id</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control">
                            <option>Select Gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Date of Birth</FormLabel>
                        <div>
                            <Form.Control type="date"/>
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Class</FormLabel>
                        <Form.Control type="text" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Religion</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Joining Date</FormLabel>
                        <div>
                            <Form.Control type="date"/>
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mobile Number</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Admission Number</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Section</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Student Image</FormLabel>
                        <Form.Control type="file" />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h5 className="form-title"><span>Parent Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Name</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Occupation</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Mobile</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Email</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Name</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Occupation</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Mobile</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Email</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Present Address</FormLabel>
                        <Form.Control as={"textarea"} type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Permanent Address</FormLabel>
                        <Form.Control as={"textarea"} type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default StudentAdd;