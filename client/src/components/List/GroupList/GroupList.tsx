import React, {FC, ReactElement} from "react";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../List";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {MakeUrl} from "../../../utils/makeUrl";
import {GroupResponse} from "../../../types/group";
import {PaginationProps} from "../../../types/pagination";

interface GroupListProps {
    groups: GroupResponse[],
    pagination: PaginationProps,
    isLoading: boolean,
    reference?: any
}

const GroupList: FC<GroupListProps> = ({groups, pagination, isLoading, reference}): ReactElement => {
    return (
        <Row>
            <Col sm={12}>
                <List isLoading={isLoading} pagination={pagination} reference={reference}>
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
    )
}

export default GroupList