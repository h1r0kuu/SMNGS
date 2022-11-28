import React, {ReactElement, useEffect, useState} from "react";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import {BreadcrumbItem, Button, Col, Form, FormGroup, FormLabel} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useFetchSingleGroup} from "../../../hooks/groups/useFetchSingleGroup";
import {GroupRequest} from "../../../types/group";
import FormGroupController from "../../../components/Form/FormGroup/FormGroupController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import GroupSubjectModal from "../../../components/GroupSubjectModal/GroupSubjectModal";
import {useFetchTeacherSubject} from "../../../hooks/subjects/useFetchTeacherSubject";
import {GroupService} from "../../../services/groupService"
import {TeacherSubjectResponse} from "../../../types/subject";
import ControllerWithAutocomplete from "../../../components/Form/FormGroup/ControllerWithAutocomplete";

const EditGroup = (): ReactElement => {
    const [open, setOpen] = useState<boolean>(false)
    const {id} = useParams<string>()

    const {group} = useFetchSingleGroup(Number(id))
    const {teacherSubject} = useFetchTeacherSubject()
    let defaultTeacherSubjects: TeacherSubjectResponse[] = []

    const groupSubjects = group?.groupSubjects
    if (groupSubjects !== undefined) {
        for (let f of groupSubjects) {
            if(f.teacherSubject !== undefined)
                defaultTeacherSubjects.push(f.teacherSubject)
        }
    }


    const {control, register, handleSubmit, setValue, formState: {errors}, reset} = useForm<GroupRequest> ({
        defaultValues: {
            teacherSubjects: defaultTeacherSubjects,
            groupName: group?.groupName,
            groupTerm: group?.groupTerm
        }
    })
    useEffect(() => {
        reset(group);
        setValue("teacherSubjects", defaultTeacherSubjects)
    }, [group]);

    const onSubmit = (data: GroupRequest) => {
        const req = {...data, id: id}
        GroupService.update(req).then(res => {
            console.log(res)
        })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Group</BreadcrumbItem>
                <BreadcrumbItem active>Edit Group</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Edit Group"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                    <h5 className="form-title"><span>Subject Information</span></h5>
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.groupName}
                        name={"groupName"}
                        title={"Group Name"}
                        defaultValue={group?.groupName}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroupController
                        type={"text"}
                        register={register}
                        control={control}
                        error={errors.groupTerm}
                        name={"groupTerm"}
                        title={"Group Term"}
                        defaultValue={group?.groupTerm}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <FormGroup className="form-group">
                        <FormLabel>Group Subjects</FormLabel>
                        <Button variant={"success"} size={"sm"} onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                        <ControllerWithAutocomplete
                            control={control}
                            name={"teacherSubjects"}
                            options={teacherSubject}
                            getOptionLabel={(teacherSubject) => `${teacherSubject?.subject.subjectName} - ${teacherSubject?.teacher.firstName} ${teacherSubject?.teacher.lastName}`}
                            defaultValue={[...defaultTeacherSubjects]}
                            label={"Group Subject"}
                            placeholder={"Subject Name"}
                            multiple={true}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
            <GroupSubjectModal open={open} onClose={() => setOpen(!open)}/>
        </Page>
    )
}

export default EditGroup