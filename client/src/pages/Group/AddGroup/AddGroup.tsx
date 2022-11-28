import React, {ReactElement, useState} from "react";
import Page from "../../../components/Page/Page";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import {BreadcrumbItem, Button, Col, FormGroup, FormLabel} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";

import { GroupService } from "../../../services/groupService"
import {GroupRequest} from "../../../types/group";
import FormGroupController from "../../../components/Form/FormGroup/FormGroupController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {Autocomplete, TextField} from "@mui/material";
import {useFetchTeacherSubject} from "../../../hooks/subjects/useFetchTeacherSubject";
import GroupSubjectModal from "../../../components/GroupSubjectModal/GroupSubjectModal";

const AddGroup = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(false)

    const {teacherSubject} = useFetchTeacherSubject()

    const {control, register, handleSubmit, formState: {errors}} = useForm<GroupRequest>()

    const onSubmit = (data: GroupRequest) => {
        console.log(data)
        console.log(data.teacherSubjects)
        GroupService.create(data).then(res => {
            console.log(res)
        })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Groups</BreadcrumbItem>
                <BreadcrumbItem active>Add group</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Group"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Group Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.groupTerm}
                        name={"groupTerm"}
                        title={"Group Term"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.groupName}
                        name={"groupName"}
                        title={"Group Name"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Group Subjects</FormLabel>
                        <Button variant={"success"} size={"sm"} onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                        <Controller
                            control={control}
                            name={"teacherSubjects"}
                            render={({ field: { onChange, value } }) => (
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={teacherSubject}
                                    getOptionLabel={(teacherSubject) => `${teacherSubject?.subject.subjectName} - ${teacherSubject?.teacher.firstName} ${teacherSubject?.teacher.lastName}`}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Group Subject"
                                            placeholder="Subject Name"
                                        />
                                    )}
                                    onChange={(event, values, reason) => onChange(values)}
                                />
                            )}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
            <GroupSubjectModal open={open} onClose={() => setOpen(!open)} />
        </Page>
    )
}

export default AddGroup