import React, {ReactElement} from "react";
import Page from "../../../components/Page/Page";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../components/List/List";
import {BreadcrumbItem, Col, Row} from "react-bootstrap";
import {useFetchGroups} from "../../../hooks/groups/useFetchGroups";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPen, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";

const GroupList = (): ReactElement => {

    const { groups, pagination, isLoading } = useFetchGroups()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Group</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Groups"} breadcrumbs={breadCrumbs()}>
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
                        <ListHeader title={"ID"}/>
                        <ListHeader title={"Group Name"}/>
                        <ListHeader title={"Group Term"}/>
                        <ListHeader title={"Action"}/>
                        <TableBody>
                            {groups?.map(group => (
                                <ListBodyTr key={group.id}>
                                    <BodyElem>{group.id}</BodyElem>
                                    <BodyElem>{group.groupName}</BodyElem>
                                    <BodyElem>{group.groupTerm}</BodyElem>
                                    <BodyElem>
                                        <div className="actions">
                                            <Link to={MakeUrl.editGroup(group.id)} className="btn btn-sm bg-success-light mr-2">
                                                <FontAwesomeIcon icon={faPen}/>
                                            </Link>
                                        </div>
                                    </BodyElem>
                                </ListBodyTr>
                            ))}
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default GroupList