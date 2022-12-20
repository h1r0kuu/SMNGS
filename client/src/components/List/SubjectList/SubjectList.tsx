import React, {FC, ReactElement} from "react";
import {Col, Row} from "react-bootstrap";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../List";

import {SubjectResponse} from "../../../types/subject";
import {PaginationProps} from "../../../types/pagination";

interface SubjectListProps {
    subjects: SubjectResponse[],
    pagination: PaginationProps,
    isLoading: boolean,
    reference?: any
}

const SubjectList: FC<SubjectListProps> = ({ subjects, pagination, isLoading, reference }): ReactElement => {


    return (
        <Row>
            <Col sm={12}>
                <List isLoading={isLoading} pagination={pagination} reference={reference}>
                    <ListHeader title={"#"}/>
                    <ListHeader title={"Subject Name"}/>
                    <TableBody>
                        {subjects?.map(subject => (
                            <ListBodyTr key={subject.id}>
                                <BodyElem>{subject.id}</BodyElem>
                                <BodyElem>{subject.subjectName}</BodyElem>
                            </ListBodyTr>
                        ))}
                    </TableBody>
                </List>
            </Col>
        </Row>
    )
}

export default SubjectList;