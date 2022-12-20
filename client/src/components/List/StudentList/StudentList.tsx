import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPen, faPlus} from "@fortawesome/free-solid-svg-icons";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../List";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import React, {FC} from "react";
import {StudentResponse} from "../../../types/student";
import {PaginationProps} from "../../../types/pagination";

interface StudentListProps {
    students: StudentResponse[],
    pagination: PaginationProps,
    isLoading: boolean
}

const StudentList: FC<StudentListProps> = ({students, pagination, isLoading}) => {
    return (
        <Row>
            <Col sm={12}>
                <List isLoading={isLoading} pagination={pagination}>
                    <ListHeader title={"ID"}/>
                    <ListHeader title={"Username"}/>
                    <ListHeader title={"Email"}/>
                    <ListHeader title={"Full name"}/>
                    <ListHeader title={"Group"}/>
                    <ListHeader title={"Phone Number"}/>
                    <ListHeader title={"Term"}/>
                    <ListHeader title={"Degree Course"}/>
                    <ListHeader title={"Specialization"}/>
                    <ListHeader title={"Status"}/>
                    <ListHeader title={"Permanent Address"}/>
                    <ListHeader title={"Present Address"}/>
                    <TableBody>
                        {students?.map(student => (
                            <ListBodyTr key={student.id}>
                                <BodyElem>{student.id}</BodyElem>
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
                                <BodyElem>{`${student.phoneCode} ${student.phoneNumber}`}</BodyElem>
                                <BodyElem>{student.term}</BodyElem>
                                <BodyElem>{student.degreeCourse}</BodyElem>
                                <BodyElem>{student.specialization}</BodyElem>
                                <BodyElem>{student.status}</BodyElem>
                                <BodyElem>{student.permanentAddress}</BodyElem>
                                <BodyElem>{student.presentAddress}</BodyElem>
                            </ListBodyTr>
                        ))}
                    </TableBody>
                </List>
            </Col>
        </Row>
    )
}

export default StudentList