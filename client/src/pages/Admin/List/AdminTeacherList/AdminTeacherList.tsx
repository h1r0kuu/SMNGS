import Page from "../../../../components/Page/Page";
import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import React, {useRef} from "react";
import TeacherList from "../../../../components/List/TeacherList/TeacherList";
import {useFetchTeachers} from "../../../../hooks/teachers/useFetchTeachers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import {GROUPS_ADD} from "../../../../constants/pathConstants";
import {tableToPdf} from "../../../../utils/exportData";

const AdminTeacherList = () => {

    const {teachers, pagination, isLoading} = useFetchTeachers()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Teachers</BreadcrumbItem>
            </>
        )
    }

    const tableRef = useRef<any>(null);

    const onDownload = () => {
        tableToPdf(tableRef, "teachers")
    }

    return (
        <Page title={"Teachers"} breadcrumbs={breadCrumbs()}>
            <Col sm={12}>
                <Col xs={12} className={"text-right float-right ml-auto mb-4"}>
                    <Button className={"mr-2"} variant={"outline-primary"} onClick={onDownload}>
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </Button>
                    <Button as={"a"} href={GROUPS_ADD}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Col>
            <TeacherList teachers={teachers} pagination={pagination} isLoading={isLoading} reference={tableRef} />
        </Page>
    )
}

export default AdminTeacherList