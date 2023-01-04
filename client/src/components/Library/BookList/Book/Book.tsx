import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {BookResponse} from "../../../../types/book";

interface BookProps {
    book: BookResponse
}

const Book: FC<BookProps> = ({ book }) => {
    return (
        <Col md={3}>
            <div className='book-item-img'>
                <img src ={book.frontPicture} alt = "cover" />
            </div>
            <div className='book-item-info text-left'>
                <Link to = {"#"}>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{book.title}</span>
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Author: </span>
                    <span>{book.authors.join(", ")}</span>
                </div>

                <div className='book-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'>Total Editions: </span>
                    <span>Edition count</span>
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <span>First publish year</span>
                </div>
            </div>
        </Col>
    )
}

export default Book