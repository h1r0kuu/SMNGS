import React, {ReactElement} from "react";
import Page from "../../components/Page/Page";
import {
    BreadcrumbItem,
    Button,
    Col,
    Form,
    FormGroup,
    FormLabel
} from "react-bootstrap";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";

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
        <Page title={"Edit Students"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit>
                <Col xs={12}>
                    <h5 className="form-title"><span>Student Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>First Name</FormLabel>
                        <Form.Control type="text" value="Nathan Humphries" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Last Name</FormLabel>
                        <Form.Control type="text" value="Stephen Marley" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Student Id</FormLabel>
                        <Form.Control type="text" value="PRE1234" />
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
                            <Form.Control type="date" value="26 Apr 1994" />
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Class</FormLabel>
                        <Form.Control type="text" value="10" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Religion</FormLabel>
                        <Form.Control type="text" value="Religion" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Joining Date</FormLabel>
                        <div>
                            <Form.Control type="date" value="4 Jan 2002" />
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mobile Number</FormLabel>
                        <Form.Control type="text" value="077 3499 9959" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Admission Number</FormLabel>
                        <Form.Control type="text" value="PRE1252" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Section</FormLabel>
                        <Form.Control type="text" value="B" />
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
                        <Form.Control type="text" value="Stephen Marley" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Occupation</FormLabel>
                        <Form.Control type="text" value="Technician" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Mobile</FormLabel>
                        <Form.Control type="text" value="402 221 7523" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Father's Email</FormLabel>
                        <Form.Control type="text" value="stephenmarley@gmail.com" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Name</FormLabel>
                        <Form.Control type="text" value="Cleary Wong" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Occupation</FormLabel>
                        <Form.Control type="text" value="Home Maker" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Mobile</FormLabel>
                        <Form.Control type="text" value="026 7318 4366" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mother's Email</FormLabel>
                        <Form.Control type="text" value="clearywong@gmail.com" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Present Address</FormLabel>
                        <Form.Control as={"textarea"} type="text" value="86 Lamphey Road, Thelnetham" />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Permanent Address</FormLabel>
                        <Form.Control as={"textarea"} type="text" value="86 Lamphey Road, Thelnetham" />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default StudentEdit;