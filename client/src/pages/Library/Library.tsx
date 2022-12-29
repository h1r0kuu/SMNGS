import Page from "../../components/Page/Page";
import {BreadcrumbItem, Card, Col, Row} from "react-bootstrap";
import React from "react";
import BookList from "../../components/Library/BookList/BookList";

const Library = () => {

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Library"} breadcrumbs={breadCrumbs()}>
            <BookList/>
        </Page>
    )
}

export default Library