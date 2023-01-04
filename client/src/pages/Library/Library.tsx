import Page from "../../components/Page/Page";
import {BreadcrumbItem, Button, Card, Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
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
            <Form>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for a book by title"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for a book by author"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for a book by publisher"
                    />
                </FormGroup>
                <Button type="submit" variant="primary">
                    Search
                </Button>
            </Form>
            <BookList/>
        </Page>
    )
}

export default Library