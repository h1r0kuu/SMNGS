import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import {SubjectRequest} from "../../../types/subject";
import {Controller, useForm} from "react-hook-form";

import { SubjectService } from "../../../services/subjectService"
import FormGroupController from "../../../components/Form/FormGroup/FormGroupController";
import {useFetchTeachers} from "../../../hooks/users/useFetchTeachers";
import {Autocomplete, TextField} from "@mui/material";

const AddSubject = (): ReactElement => {

    const {teachers} = useFetchTeachers()

    const {control, register, handleSubmit, setValue, formState: {errors}} = useForm<SubjectRequest>()

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
                        <FormLabel>Teachers</FormLabel>
                        <Controller
                            control={control}
                            name={"teacherIds"}
                            render={({ field: { onChange, value } }) => (
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={teachers}
                                    getOptionLabel={(teacher) => teacher.firstName + " " + teacher.lastName}
                                    onChange={(e, options) => setValue('teacherIds', options.map(t => t.id))}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Teachers"
                                            placeholder="Teacher Name"
                                        />
                                    )}
                                />
                            )}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddSubject