import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";
import {StudentRequest} from "../../types/student";
import {SubjectRequest} from "../../types/subject";
import {useForm} from "react-hook-form";

import { SubjectService } from "../../services/subjectService"
import FormGroupController from "../../components/Form/FormGroup/FormGroup";

const SubjectAdd = (): ReactElement => {

    const {control, register, handleSubmit, setError, formState: {errors}} = useForm<SubjectRequest>()

    const onSubmit = (data: SubjectRequest) => {
        SubjectService.create(data).then(res => {
            console.log(res)
        })
    }

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
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
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
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.subjectName}
                        name={"subjectName"}
                        title={"Subject Name"}
                    />
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