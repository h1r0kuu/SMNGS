import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";

const SubjectAdd = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Subjects</BreadcrumbItem>
                <BreadcrumbItem active>Add Subject</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Subject"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit>
                <Col xs={12}>
                    <h5 className="form-title"><span>Subject Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Subject ID</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Subject Name</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Class</FormLabel>
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

export default SubjectAdd