import React, {ReactElement} from "react";
import {BreadcrumbItem, Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../components/List/List";
import Page from "../../../components/Page/Page";
import {useFetchGroupStudents} from "../../../hooks/groups/useFetchGroupStudents";

const Invoice = (): ReactElement => {

    const { students, pagination, isLoading } = useFetchGroupStudents(Number(5))

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Invoice</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Invoice"} breadcrumbs={breadCrumbs()}>
            <Row>
                <Col sm={12}>
                    <div className="col-xs-12 text-right float-right ml-auto mb-4">
                        <a href="src/pages/Admin/List/StudentList#" className="btn btn-outline-primary mr-2">
                            <FontAwesomeIcon icon={faDownload} /> Download </a>
                        <a href="add-student.html" className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                    </div>
                </Col>
                <Col sm={12}>
                    <List isLoading={isLoading} pagination={pagination}>
                        <ListHeader title={"#"}/>
                        <ListHeader title={"Payment deadline"}/>
                        <ListHeader title={"Fees amount"}/>
                        <ListHeader title={"Discount"}/>
                        <ListHeader title={"Paid"}/>
                        <ListHeader title={"Status"}/>
                        <ListHeader title={"Payment accepted"}/>
                        <TableBody>
                           <ListBodyTr>
                               <BodyElem>1</BodyElem>
                               <BodyElem>30.09.2021	</BodyElem>
                               <BodyElem>610.00</BodyElem>
                               <BodyElem>0.00</BodyElem>
                               <BodyElem>0.00</BodyElem>
                               <BodyElem>
                                   <Button className={"btn-danger btn-sm"}>Not Paid</Button>
                               </BodyElem>
                               <BodyElem>04.10.2021	</BodyElem>
                           </ListBodyTr>
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default Invoice