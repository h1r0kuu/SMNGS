import React, {FC, ReactElement} from "react";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../List";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {TeacherResponse} from "../../../types/teacher";
import {PaginationProps} from "../../../types/pagination";

interface TeacherListProps {
    teachers: TeacherResponse[],
    pagination: PaginationProps,
    isLoading: boolean,
    reference?: any
}

const TeacherList: FC<TeacherListProps> = ({ teachers, pagination, isLoading, reference }): ReactElement => {


    return (
        <Row>
            <Col sm={12}>
                <List isLoading={isLoading} pagination={pagination} reference={reference}>
                    <ListHeader title={"ID"}/>
                    <ListHeader title={"Username"}/>
                    <ListHeader title={"Email"}/>
                    <ListHeader title={"Full name"}/>
                    <ListHeader title={"Phone Number"}/>
                    <ListHeader title={"Action"}/>
                    <TableBody>
                        {teachers?.map(teacher => (
                            <ListBodyTr key={teacher.id}>
                            <BodyElem>{teacher.id}</BodyElem>
                                <BodyElem>
                                    <>
                                        <Link to={MakeUrl.viewUser(teacher.username)}>
                                            {teacher.profilePicture &&
                                                <div className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={teacher.profilePicture}
                                                         alt="User Image"/>
                                                </div>
                                            } {teacher.username}
                                        </Link>
                                    </>
                                </BodyElem>
                                <BodyElem>{teacher.email}</BodyElem>
                                <BodyElem>{`${teacher.firstName} ${teacher.lastName}`}</BodyElem>
                                <BodyElem>{`${teacher.phoneCode} ${teacher.phoneNumber}`}</BodyElem>
                                <BodyElem className={"text-right"}>
                                    <div className="actions">
                                        <Link to={MakeUrl.editTeacher(teacher.id)} className="btn btn-sm bg-success-light mr-2">
                                            <FontAwesomeIcon icon={faPen}/>
                                        </Link>
                                        <Link to={"#"} className="btn btn-sm bg-danger-light"
                                              onClick={() => teacher.id}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Link>
                                    </div>
                                </BodyElem>
                            </ListBodyTr>
                        ))}
                    </TableBody>
                </List>
            </Col>
        </Row>
    )
}

export default TeacherList