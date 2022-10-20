import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../components/Page/Page";
import List, {ListBodyTr, ListHeader, BodyElem, TableBody} from "../../components/List/List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {useFetchStudents} from "../../hooks/users/useFetchStudents";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../utils/makeUrl";

import {StudentService} from "../../services/studentService"

const StudentList = (): ReactElement => {

    const { students, isLoading, setStudents } = useFetchStudents()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Students</BreadcrumbItem>
            </>
        )
    }

    const deleteStudent = (id: number) => {
        StudentService.delete(id).then(data => {
            console.log(data)
            setStudents(students?.filter((obj) => {
                return obj.id !== id
            }))
        })
    }

    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
            <List isLoading={isLoading}>
                <ListHeader title={"ID"}/>
                <ListHeader title={"Username"}/>
                <ListHeader title={"Email"}/>
                <ListHeader title={"Full name"}/>
                <ListHeader title={"Phone Number"}/>
                <ListHeader title={"Term"}/>
                <ListHeader title={"Degree Course"}/>
                <ListHeader title={"Specialization"}/>
                <ListHeader title={"Status"}/>
                <ListHeader title={"Permanent Address"}/>
                <ListHeader title={"Present Address"}/>
                <ListHeader title={"Action"}/>
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
                            <BodyElem>{`${student.phoneCode} ${student.phoneNumber}`}</BodyElem>
                            <BodyElem>{student.term}</BodyElem>
                            <BodyElem>{student.degreeCourse}</BodyElem>
                            <BodyElem>{student.specialization}</BodyElem>
                            <BodyElem>{student.status}</BodyElem>
                            <BodyElem>{student.permanentAddress}</BodyElem>
                            <BodyElem>{student.presentAddress}</BodyElem>
                            <BodyElem className={"text-right"}>
                                <div className="actions">
                                    <Link to={MakeUrl.editStudent(student.id)} className="btn btn-sm bg-success-light mr-2">
                                        <FontAwesomeIcon icon={faPen}/>
                                    </Link>
                                    <Link to={"#"} className="btn btn-sm bg-danger-light"
                                          onClick={() => deleteStudent(student.id)}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Link>
                                </div>
                            </BodyElem>
                        </ListBodyTr>
                    ))}
                </TableBody>
            </List>
        </Page>
    )
}

export default StudentList;