import {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";

const TeacherAdd = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Teachers</BreadcrumbItem>
                <BreadcrumbItem active>Add Teachers</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Teachers"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit>
                <Col xs={12}>
                    <h5 className="form-title"><span>Basic Details</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Teacher ID</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Name</FormLabel>
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
                        <FormLabel>Mobile</FormLabel>
                        <Form.Control type="text" />
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
                        <FormLabel>Qualification</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Experience</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h5 className="form-title"><span>Login Details</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Username</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Email ID</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Password</FormLabel>
                        <Form.Control type="password"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Repeat Password</FormLabel>
                        <Form.Control type="password"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h5 className="form-title"><span>Address</span></h5>
                </Col>
                <Col xs={12}>
                    <FormGroup className="form-group">
                        <FormLabel>Address</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>City</FormLabel>
                        <Form.Control type="xtext"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>State</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Zip Code</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Country</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default TeacherAdd