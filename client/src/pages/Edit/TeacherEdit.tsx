import {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";

const TeacherEdit = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Teachers</BreadcrumbItem>
                <BreadcrumbItem active>Edit Teachers</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Edit Teachers"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit>
                <Col xs={12}>
                    <h5 className="form-title"><span>Basic Details</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Teacher ID</FormLabel>
                        <Form.Control type="text" value="PRE1234"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Name</FormLabel>
                        <Form.Control type="text" value="Vincent"/>
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
                            <Form.Control type="date" value="23 Jun 1985"/>
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Mobile</FormLabel>
                        <Form.Control type="text" value="077 3499 9959"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Joining Date</FormLabel>
                        <div>
                            <Form.Control type="date" value="16 Jul 2015"/>
                        </div>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Qualification</FormLabel>
                        <Form.Control type="text" value="Bachelor of Engineering"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Experience</FormLabel>
                        <Form.Control type="text" value="5"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h5 className="form-title"><span>Login Details</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Username</FormLabel>
                        <Form.Control type="text" value="Vincent"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Email ID</FormLabel>
                        <Form.Control type="text" value="vincent20@gmail.com"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Password</FormLabel>
                        <Form.Control type="password" value="111111"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Repeat Password</FormLabel>
                        <Form.Control type="password" value="111111"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h5 className="form-title"><span>Address</span></h5>
                </Col>
                <Col xs={12}>
                    <FormGroup className="form-group">
                        <FormLabel>Address</FormLabel>
                        <Form.Control type="text" value="3979 Ashwood Drive"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>City</FormLabel>
                        <Form.Control type="xtext" value="Omaha"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>State</FormLabel>
                        <Form.Control type="text" value="Omaha"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Zip Code</FormLabel>
                        <Form.Control type="text" value="3979"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Country</FormLabel>
                        <Form.Control type="text" value="USA"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default TeacherEdit