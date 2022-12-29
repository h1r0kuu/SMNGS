import {Card, Col} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import {faBook, faHeart, faBookOpenReader} from "@fortawesome/free-solid-svg-icons";

const Book = () => {
    return (
        <Col md={3}>
            <Card>
                <img className={"card-img-top"} src={"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"}/>
                <CardHeader>
                    <h5 className={"card-title mb-0"}>Card with image and button</h5>
                </CardHeader>
                <Card.Body className={"book-body"}>
                    <div className={"card-text"}>
                        Dima
                    </div>
                    <div className="card-tools">
                        <ul className={"card-tools__list"}>
                            <li>
                                <Link to={"#"}>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <FontAwesomeIcon icon={faBookOpenReader}/>
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <FontAwesomeIcon icon={faBookOpenReader}/>
                                </Link>
                            </li>
                            <li>
                                <Link to={"#"}>
                                    <FontAwesomeIcon icon={faBook}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Book