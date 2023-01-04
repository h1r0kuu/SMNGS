import {BreadcrumbItem, Button, Col, Row} from "react-bootstrap";
import List, {BodyElem, ListBodyTr, ListHeader, TableBody} from "../../../../../components/List/List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {useRef} from "react";
import {GROUPS_ADD} from "../../../../../constants/pathConstants";
import {useFetchGroups} from "../../../../../hooks/groups/useFetchGroups";
import {tableToPdf} from "../../../../../utils/exportData";
import Page from "../../../../../components/Page/Page";
import {useFetchBooks} from "../../../../../hooks/library/books/useFetchBooks";

const AdminBookList = () => {

    const {books, pagination, isLoading} = useFetchBooks()
    console.log(books)
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
                        <ListHeader title={"Title"}/>
                        <ListHeader title={"Image"}/>
                        <ListHeader title={"categories"}/>
                        <ListHeader title={"Authors"}/>
                        <TableBody>
                            {books?.map(book => (
                                <ListBodyTr>
                                    <BodyElem>{book.id}</BodyElem>
                                    <BodyElem>{book.title}</BodyElem>
                                    <BodyElem><img width={"50px"} src={book.frontPicture}/></BodyElem>
                                    <BodyElem>{book.genres?.map(genre => genre.title).join(", ")}</BodyElem>
                                    <BodyElem>{book.authors?.map(author => `${author.firstName} ${author.lastName}`).join(", ")}</BodyElem>
                                </ListBodyTr>
                            ))}
                        </TableBody>
                    </List>
                </Col>
            </Row>
        </Page>
    )
}

export default AdminBookList