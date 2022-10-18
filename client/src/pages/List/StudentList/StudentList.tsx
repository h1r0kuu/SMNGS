import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import List from "../../../components/List/List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {useFetchStudents} from "../../../hooks/users/useFetchStudents";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";

const StudentList = (): ReactElement => {

    const { students } = useFetchStudents()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
            <List>
                <List.Header title={"ID"}/>
                <List.Header title={"Username"}/>
                <List.Header title={"Email"}/>
                <List.Header title={"Full name"}/>
                <List.Header title={"Phone Number"}/>
                <List.Header title={"Term"}/>
                <List.Header title={"Degree Course"}/>
                <List.Header title={"Specialization"}/>
                <List.Header title={"Status"}/>
                <List.Header title={"Permanent Address"}/>
                <List.Header title={"Present Address"}/>
                <List.Header title={"Action"}/>
                {students?.map(student => (
                    <List.BodyTr key={student.id}>
                        <List.BodyElem>{student.id}</List.BodyElem>
                        <List.BodyElem>{student.username}</List.BodyElem>
                        <List.BodyElem>{student.email}</List.BodyElem>
                        <List.BodyElem>{`${student.firstName} ${student.lastName}`}</List.BodyElem>
                        <List.BodyElem>{`${student.phoneCode} ${student.phoneNumber}`}</List.BodyElem>
                        <List.BodyElem>{student.term}</List.BodyElem>
                        <List.BodyElem>{student.degreeCourse}</List.BodyElem>
                        <List.BodyElem>{student.specialization}</List.BodyElem>
                        <List.BodyElem>{student.status}</List.BodyElem>
                        <List.BodyElem>{student.permanentAddress}</List.BodyElem>
                        <List.BodyElem>{student.presentAddress}</List.BodyElem>
                        <List.BodyElem className={"text-right"}>
                            <div className="actions">
                                <Link to={MakeUrl.editStudent(student.id)} className="btn btn-sm bg-success-light mr-2">
                                    <FontAwesomeIcon icon={faPen}/>
                                </Link>
                                <Link to={"#"} className="btn btn-sm bg-danger-light">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Link>
                            </div>
                        </List.BodyElem>
                    </List.BodyTr>
                ))}
            </List>
        </Page>
    )
}

export default StudentList;