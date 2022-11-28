import React, {ReactElement, useState} from "react";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import {useForm} from "react-hook-form";
import {StudentRequest} from "../../../types/student";

import {StudentService} from "../../../services/studentService"
import {UserRole} from "../../../enums/userRole";
import {StudentStatus} from "../../../enums/studentStatus";

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import FormGroupController from "../../../components/Form/FormGroup/FormGroupController";
import {UserGender} from "../../../enums/useGender";
import {useFetchGroups} from "../../../hooks/groups/useFetchGroups";

const AddStudent = (): ReactElement => {

    const {groups} = useFetchGroups()

    const RegistrationFormSchema = yup.object().shape({
        username: yup.string().min(1, "What is your name?").required(),
        email: yup.string().email("Invalid mail").required("Please enter a valid email address."),
    });

    const {control, register, handleSubmit, setError, formState: {errors}} = useForm<StudentRequest>({
        resolver: yupResolver(RegistrationFormSchema)
    })

    const onSubmit = (data: StudentRequest) => {
        data.role = UserRole.STUDENT
        // data.group.id = groups?.filter(g => g.groupName === data.group).id
        if(data.profilePicture !== undefined)
            data.profilePicture = data.profilePicture[0]
        StudentService.create(data).then(a => {
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
                <BreadcrumbItem>Students</BreadcrumbItem>
                <BreadcrumbItem active>Add Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Add Students"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Student Information</span></h5>
                </Col>
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
                    <FormGroup className="form-group">
                        <FormLabel>Status</FormLabel>
                        <Form.Select className="form-control" {...register("status")}>
                            <option value={StudentStatus.ACCEPTED}>Accepted</option>
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Groups</FormLabel>
                        <Form.Select className="form-control" {...register("groupId")}>
                            {groups?.map(group => (
                                <option key={group.id} value={group.id}>{group.groupName}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.term}
                        name={"term"}
                        title={"Term"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.specialization}
                        name={"specialization"}
                        title={"Specialization"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.degreeCourse}
                        name={"degreeCourse"}
                        title={"Degree course"}
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
                        type={"date"}
                        register={register}
                        control={control}
                        error={errors.birthDate}
                        name={"birthDate"}
                        title={"Date of Birth"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Joining Date</FormLabel>
                        <div>
                            <Form.Control type="date" />
                        </div>
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
                    <h5 className="form-title"><span>Parent Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.fatherName}
                        name={"fatherName"}
                        title={"Father's Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.fatherMobile}
                        name={"fatherMobile"}
                        title={"Father's Mobile"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.fatherEmail}
                        name={"fatherEmail"}
                        title={"Father's Email"}
                    />
                </Col>
                <Col xs={12} sm={12}></Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.motherName}
                        name={"motherName"}
                        title={"Mother's Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.motherMobile}
                        name={"motherMobile"}
                        title={"Mother's Mobile"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.motherEmail}
                        name={"motherEmail"}
                        title={"Mother's Email"}
                    />
                </Col>
                <Col xs={12} sm={12}></Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.presentAddress}
                        name={"presentAddress"}
                        title={"Present Address"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.permanentAddress}
                        name={"permanentAddress"}
                        title={"Permanent Address"}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddStudent;