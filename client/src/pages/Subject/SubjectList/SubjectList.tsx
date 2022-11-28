import React, {ReactElement, useEffect, useState} from "react";
import {useCurrentUser} from "../../../context/UserContext";
import {BreadcrumbItem, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../components/List/List";
import Page from "../../../components/Page/Page";

import {StudentService} from "../../../services/studentService"

import {GroupSubjectResponse} from "../../../types/group"

const SubjectList = (): ReactElement => {
    const {currentUser} = useCurrentUser()
    const [groupSubjects, setGroupSubjects] = useState<GroupSubjectResponse[]>([])
    useEffect(() => {
        StudentService.getOne(currentUser.id).then(({data}) => {
            setGroupSubjects(data.group.groupSubjects)
        })

    }, [])

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Subjects</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Subjects"} breadcrumbs={breadCrumbs()}>
            <Row>
                <Col sm={12}>
                    <Col xs={12} className={"text-right float-right ml-auto mb-4"}>
                        <a href="src/pages/Admin/List/StudentList#" className="btn btn-outline-primary mr-2">
                            <FontAwesomeIcon icon={faDownload} /> Download </a>
                        <a href="add-student.html" className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                    </Col>
                </Col>
                <Col sm={12}>
                    <List isLoading={false}>
                        <ListHeader title={"#"}/>
                        <ListHeader title={"Subject Name"}/>
                        <ListHeader title={"Teacher"}/>
                        <ListHeader title={"Pass Mark"}/>
                        <ListHeader title={"Full Mark"}/>
                        <ListHeader title={"Type"}/>
                        <TableBody>
                            {groupSubjects?.map(subject => (
                                <ListBodyTr key={subject.id}>
                                    <BodyElem>{subject.teacherSubject.id}</BodyElem>
                                    <BodyElem>{subject.teacherSubject.subject.subjectName}</BodyElem>
                                    <BodyElem>{subject.teacherSubject.teacher.firstName} {subject.teacherSubject.teacher.lastName}</BodyElem>
                                    <BodyElem>15</BodyElem>
                                    <BodyElem>100</BodyElem>
                                    <BodyElem>das</BodyElem>
                                </ListBodyTr>
                            ))}
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default SubjectList;