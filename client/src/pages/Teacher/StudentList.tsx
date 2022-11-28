import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../components/List/List";
import {Link, useParams} from "react-router-dom";
import {MakeUrl} from "../../utils/makeUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPen, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {BreadcrumbItem, Col, Row} from "react-bootstrap";
import {useFetchGroupStudents} from "../../hooks/groups/useFetchGroupStudents";
import Page from "../../components/Page/Page";

const StudentList = () => {
    const {id} = useParams()

    const { students, pagination, isLoading } = useFetchGroupStudents(Number(id))

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem>Group</BreadcrumbItem>
                <BreadcrumbItem active>Students</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
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
                    <List isLoading={isLoading} pagination={pagination}>
                        <ListHeader title={"Username"}/>
                        <ListHeader title={"Email"}/>
                        <ListHeader title={"Full name"}/>
                        <ListHeader title={"Group"}/>
                        <ListHeader title={"Term"}/>
                        <ListHeader title={"Degree Course"}/>
                        <ListHeader title={"Specialization"}/>
                        <ListHeader title={"Status"}/>
                        <ListHeader title={"Action"}/>
                        <TableBody>
                            <>
                            {students?.map(student => (
                                <ListBodyTr key={student.id}>
                                    <BodyElem>
                                        <>
                                            <Link to={MakeUrl.viewUser(student.username)}>
                                                {student.profilePicture &&
                                                    <div className="avatar avatar-sm mr-2">
                                                        <img className="avatar-img rounded-circle" src={student.profilePicture}
                                                             alt="User Image"/>
                                                    </div>
                                                } {student.username}
                                            </Link>
                                        </>
                                    </BodyElem>
                                    <BodyElem>{student.email}</BodyElem>
                                    <BodyElem>{`${student.firstName} ${student.lastName}`}</BodyElem>
                                    <BodyElem>{student.group?.groupName || "Empty"}</BodyElem>
                                    <BodyElem>{student.term}</BodyElem>
                                    <BodyElem>{student.degreeCourse}</BodyElem>
                                    <BodyElem>{student.specialization}</BodyElem>
                                    <BodyElem>{student.status}</BodyElem>
                                    <BodyElem className={"text-right"}>
                                        <div className="actions">
                                            <Link to={MakeUrl.editStudent(student.id)} className="btn btn-sm bg-success-light mr-2">
                                                <FontAwesomeIcon icon={faPen}/>
                                            </Link>
                                        </div>
                                    </BodyElem>
                                </ListBodyTr>
                            ))}
                            </>
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default StudentList