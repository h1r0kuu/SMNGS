import {Col, Row} from "react-bootstrap";
import React from "react";
import Book from "./Book/Book";
import {useFetchBooks} from "../../../hooks/library/books/useFetchBooks";

const BookList = () => {
    const {books, pagination, isLoading} = useFetchBooks()

    return (
        <div className={"book-list"}>
            <Col xs={12}>
                <Row>
                    {books?.map(book => (
                        <Book key={book.id} book={book}/>
                    ))}
                </Row>
            </Col>
        </div>
    )
}

export default BookList