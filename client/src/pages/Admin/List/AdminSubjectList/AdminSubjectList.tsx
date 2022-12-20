import Page from "../../../../components/Page/Page";
import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import React, {useRef} from "react";
import SubjectList from "../../../../components/List/SubjectList/SubjectList";
import {useFetchSubjects} from "../../../../hooks/subjects/useFetchSubjects";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import {GROUPS_ADD, SUBJECTS_ADD} from "../../../../constants/pathConstants";
import {tableToPdf} from "../../../../utils/exportData";

const AdminSubjectList = () => {

    const {subjects, pagination, isLoading} = useFetchSubjects()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Subjects</BreadcrumbItem>
            </>
        )
    }

    const tableRef = useRef<any>(null);

    const onDownload = () => {
        tableToPdf(tableRef, "subjects")
    }

    return (
        <Page title={"Subjects"} breadcrumbs={breadCrumbs()}>
            <Col sm={12}>
                <Col xs={12} className={"text-right float-right ml-auto mb-4"}>
                    <Button className={"mr-2"} variant={"outline-primary"} onClick={onDownload}>
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </Button>
                    <Button as={"a"} href={SUBJECTS_ADD}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Col>
            <SubjectList subjects={subjects} pagination={pagination} isLoading={isLoading} reference={tableRef}/>
        </Page>
        )
}

export default AdminSubjectList