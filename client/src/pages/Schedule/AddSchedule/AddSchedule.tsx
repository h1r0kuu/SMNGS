import React, {ReactElement, useState} from "react";
import Page from "../../../components/Page/Page";
import AddOrEdit from "../../../components/AddOrEdit/AddOrEdit";
import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {TeacherSubjectResponse} from "../../../types/subject";

import ControllerWithDateTime from "../../../components/Form/FormGroup/ControllerWithDateTime";
import {useFetchGroups} from "../../../hooks/groups/useFetchGroups";
import ControllerWithAutocomplete from "../../../components/Form/FormGroup/ControllerWithAutocomplete";
import {GroupResponse, GroupSubjectResponse} from "../../../types/group";
import {ScheduleRequest} from "../../../types/schedule";

import {ScheduleService} from "../../../services/scheduleService"

const AddSchedule = (): ReactElement => {
    const [group, setGroup] = useState<GroupResponse>()
    const [teacherSubjects, setTeacherSubjects] = useState<TeacherSubjectResponse[]>([])

    const handleGroup = (v) => {
        setGroup(v)
        setTeacherSubjects(v.groupSubjects.map(t => t.teacherSubject))
    }

    const {groups} = useFetchGroups()

    interface ScheduleRequestForm {
        group: GroupResponse,
        groupSubject: GroupSubjectResponse,
        timeStart: Date,
        timeEnd: Date

    }
    const {control, register, handleSubmit, formState: {errors}} = useForm<ScheduleRequestForm>()

    const onSubmit = (data: ScheduleRequestForm) => {
        console.log(data)
        const req: ScheduleRequest = {
            groupId: data.group.id,
            groupSubjectId: data.groupSubject.id,
            timeStart: new Date(data.timeStart),
            timeEnd: new Date(data.timeEnd)
        }
        console.log(req)
        ScheduleService.create(req).then(res => {
            })
    }

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Schedules</BreadcrumbItem>
                <BreadcrumbItem active>Add Schedule</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Add Schedule"} breadcrumbs={breadCrumbs()}>
            <AddOrEdit handleSubmit={handleSubmit(onSubmit)}>
                <Col xs={12} sm={6}>
                    <ControllerWithDateTime
                        register={register}
                        control={control}
                        error={errors.timeStart}
                        name={"timeStart"}
                        title={"Start Date"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <ControllerWithDateTime
                        register={register}
                        control={control}
                        error={errors.timeEnd}
                        name={"timeEnd"}
                        title={"End Date"}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <ControllerWithAutocomplete
                        title={"Group"}
                        control={control}
                        name={"group"}
                        options={groups}
                        getOptionLabel={(group) => group.groupName}
                        label={"Group"}
                        placeholder={"Group Name"}
                        multiple={false}
                        setValue={handleGroup}
                        value={group}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <ControllerWithAutocomplete
                        title={"Subject"}
                        control={control}
                        name={"groupSubject"}
                        options={teacherSubjects}
                        getOptionLabel={(t) => t.subject.subjectName}
                        label={"Subject"}
                        placeholder={"Subject Name"}
                        multiple={false}
                    />
                </Col>
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default AddSchedule