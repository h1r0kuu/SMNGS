import {BreadcrumbItem, Button, Col, Row} from "react-bootstrap";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../../../components/List/List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useRef} from "react";
import {GROUPS_ADD} from "../../../../../constants/pathConstants";
import {tableToPdf} from "../../../../../utils/exportData";
import Page from "../../../../../components/Page/Page";
import {useFetchAuthors} from "../../../../../hooks/library/authors/useFetchAuthors";

const AdminAuthorList = () => {

    const {authors, pagination, isLoading} = useFetchAuthors()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Books</BreadcrumbItem>
            </>
        )
    }


    const tableRef = useRef<any>(null);

    const onDownload = () => {
        tableToPdf(tableRef, "books")
    }

    return (
        <Page title={"Books"} breadcrumbs={breadCrumbs()}>
            <Col sm={12}>
                <Col xs={12} className={"text-right float-right ml-auto mb-4"}>
                    <Button className={"mr-2"} variant={"outline-primary"} onClick={onDownload}>
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </Button>
                    <Button as={"a"} href={GROUPS_ADD}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Col>
            <Row>
                <Col sm={12}>
                    <List isLoading={isLoading} pagination={pagination} reference={tableRef}>
                        <ListHeader title={"ID"}/>
                        <ListHeader title={"First Name"}/>
                        <ListHeader title={"Last Name"}/>
                        <TableBody>
                            {authors?.map(author => (
                                <ListBodyTr key={author.id}>
                                    <BodyElem>{author.firstName}</BodyElem>
                                    <BodyElem>{author.lastName}</BodyElem>
                                </ListBodyTr>
                            ))}
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default AdminAuthorList