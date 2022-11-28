import React, {ReactElement} from "react";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../components/List/List";
import Page from "../../../components/Page/Page";
import {BreadcrumbItem} from "react-bootstrap";
import {useFetchTeachers} from "../../../hooks/users/useFetchTeachers";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

const TeacherList = (): ReactElement => {

    const { teachers, pagination, isLoading } = useFetchTeachers()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Teachers</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Teachers"} breadcrumbs={breadCrumbs()}>
            <List isLoading={isLoading} pagination={pagination}>
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
        </Page>
    )
}

export default TeacherList