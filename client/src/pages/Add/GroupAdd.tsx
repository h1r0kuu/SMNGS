import React, {ReactElement} from "react";
import Page from "../../components/Page/Page";
import AddOrEdit from "../../components/AddOrEdit/AddOrEdit";
import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {SubjectRequest} from "../../types/subject";

import { GroupService } from "../../services/groupService"
import {GroupRequest} from "../../types/group";
import FormGroupController from "../../components/Form/FormGroup/FormGroup";

const GroupAdd = (): ReactElement => {

    const {control, register, handleSubmit, setError, formState: {errors}} = useForm<GroupRequest>()

    const onSubmit = (data: GroupRequest) => {
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
                <Col xs={12}>
                    <Button type="submit">Submit</Button>
                </Col>
            </AddOrEdit>
        </Page>
    )
}

export default GroupAdd