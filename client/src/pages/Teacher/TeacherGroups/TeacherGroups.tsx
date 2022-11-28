import {BreadcrumbItem} from "react-bootstrap";
import React from "react";
import Page from "../../../components/Page/Page";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../components/List/List";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {useFetchTeacherGroups} from "../../../hooks/users/useFetchTeacherGroups";

const TeacherGroups = () => {

    const { groups, pagination, isLoading } = useFetchTeacherGroups(5)


    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Groups</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Groups"} breadcrumbs={breadCrumbs()}>
            <List isLoading={isLoading} pagination={pagination}>
                <ListHeader title={"ID"}/>
                <ListHeader title={"Group Name"}/>
                <ListHeader title={"Group Term"}/>
                <ListHeader title={"Actions"}/>
                <TableBody>
                    {groups?.map(group => (
                        <ListBodyTr key={group.id}>
                            <BodyElem>
                                <Link to={MakeUrl.groupStudents(group.id)}>{group.id}</Link>
                            </BodyElem>
                            <BodyElem>{group.groupName}</BodyElem>
                            <BodyElem>{group.groupTerm}</BodyElem>
                            <BodyElem className={"text-right"}>
                                <div className="actions">
                                    {/*<Link to={MakeUrl.editStudent(student.id)} className="btn btn-sm bg-success-light mr-2">*/}
                                    {/*    <FontAwesomeIcon icon={faPen}/>*/}
                                    {/*</Link>*/}
                                    <Link to={"#"} className="btn btn-sm bg-danger-light"
                                          >
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

export default TeacherGroups