import React, {ReactElement, useEffect} from "react";
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
import {useParams} from "react-router-dom";
import {useFetchSingleStudent} from "../../hooks/users/useFetchSingleStudent";
import FormGroupController from "../../components/Form/FormGroup/FormGroup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {StudentEditRequest, StudentRequest, StudentResponse} from "../../types/student";
import {yupResolver} from "@hookform/resolvers/yup";
import {StudentService} from "../../services/studentService"

const StudentEdit = (): ReactElement => {
    const { id } = useParams<string>()
    const { student } = useFetchSingleStudent(Number(id))


    const {control, register, handleSubmit, setError, formState: {errors}, reset} = useForm<StudentEditRequest>({
        defaultValues: student as StudentEditRequest
    })

    useEffect(() => {
        reset(student);
    }, [student]);


    const onSubmit = (data: StudentEditRequest) => {
        data.id = Number(id)
        data.profilePicture = data.profilePicture[0]
        console.log(data)
        StudentService.update(data).then(a => {
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
                <BreadcrumbItem active>Edit Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Edit Students"} breadcrumbs={breadCrumbs()}>
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
                        defaultValue={student?.username}
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
                        defaultValue={student?.password}
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
                        defaultValue={student?.email}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.status}
                        name={"status"}
                        title={"Status"}
                        defaultValue={student?.status}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.term}
                        name={"term"}
                        title={"Term"}
                        defaultValue={student?.term}
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
                        defaultValue={student?.specialization}
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
                        defaultValue={student?.degreeCourse}
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
                        defaultValue={student?.firstName}
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
                        defaultValue={student?.lastName}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Student Id</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Gender</FormLabel>
                        <Form.Select className="form-control">
                            <option>Select Gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Others</option>
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
                        defaultValue={student?.birthDate}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Class</FormLabel>
                        <Form.Control type="text" />
                    </FormGroup>
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
                        defaultValue={student?.phoneNumber}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Section</FormLabel>
                        <Form.Control type="text"/>
                    </FormGroup>
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
                        defaultValue={student?.fatherName}
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
                        defaultValue={student?.fatherMobile}
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
                        defaultValue={student?.fatherEmail}
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
                        defaultValue={student?.motherName}
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
                        defaultValue={student?.motherMobile}
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
                        defaultValue={student?.motherName}
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
                        defaultValue={student?.presentAddress}
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
                        defaultValue={student?.permanentAddress}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default StudentEdit;