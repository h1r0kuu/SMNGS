import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import FormGroupController from "../../../components/Form/FormGroup/FormGroupController";
import {useForm} from "react-hook-form";
import {TeacherRequest} from "../../../types/teacher";
import {UserGender} from "../../../enums/useGender";
import {UserRole} from "../../../enums/userRole";

import {TeacherService} from "../../../services/teacherService"

const AddTeacher = (): ReactElement => {

    const {control, register, handleSubmit, setError, formState: {errors}} = useForm<TeacherRequest>()

    const onSubmit = (data: TeacherRequest) => {
        data.role = UserRole.TEACHER

        if(data.profilePicture !== undefined)
            data.profilePicture = data.profilePicture[0]

        TeacherService.create(data).then(a => {
            console.log(a)
        }).catch(e => {
            const errorList = e.response.data.errors
            for(let error of errorList) {
                setError(error['fieldName'], {type: "server", message: error['messageError']})
            }
        })
    }

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
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.username}
                        name={"username"}
                        title={"Username"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"password"}
                        register={register}
                        control={control}
                        error={errors.password}
                        name={"password"}
                        title={"Password"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.email}
                        name={"email"}
                        title={"Email"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.qualification}
                        name={"qualification"}
                        title={"Qualification"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.firstName}
                        name={"firstName"}
                        title={"First Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.lastName}
                        name={"lastName"}
                        title={"Last Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Gender</FormLabel>
                        <Form.Select className="form-control" {...register("gender")}>
                            <option>Select Gender</option>
                            <option value={UserGender.MALE}>Male</option>
                            <option value={UserGender.FEMALE}>Female</option>
                            <option value={UserGender.OTHER}>Other</option>
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.phoneNumber}
                        name={"phoneNumber"}
                        title={"Mobile Number"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"file"}
                        register={register}
                        control={control}
                        error={errors.profilePicture}
                        name={"profilePicture"}
                        title={"Student Image"}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddTeacher