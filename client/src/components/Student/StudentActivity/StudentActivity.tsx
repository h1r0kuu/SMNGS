import React, {ReactElement} from "react";
import StudentActivityElem from "./StudentActivityElem/StudentActivityElem";
import {Card, Col} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const StudentActivity = (): ReactElement => {
    return (
        <Col md={6} className={"d-flex"}>
            <Card className={"flex-fill"}>
                <CardHeader>
                    <Card.Title as={"h5"}>
                        Student Activity
                    </Card.Title>
                </CardHeader>
                <Card.Body>
                    <ul className="activity-feed">
                        <StudentActivityElem date={"Apr 13"}>
                            <>
                            <a>John Doe</a> won 1st place in <a>"Chess"</a>
                            </>
                        </StudentActivityElem>
                        <StudentActivityElem date={"Mar 21"}>
                            <>
                                <a>Justin Lee</a> participated in <a
                                href="invoice.html">"Carrom"</a>
                            </>
                        </StudentActivityElem>
                        <StudentActivityElem date={"Feb 2"}>
                            <>
                                <a>Justin Lee</a>attended internation conference in <a
                                href="profile.html">"St.John School"</a>
                            </>
                        </StudentActivityElem>
                        <StudentActivityElem date={"Apr 13"}>
                            <>
                                <a>John Doe</a> won 1st place in <a>"Chess"</a>
                            </>
                        </StudentActivityElem>
                        <StudentActivityElem date={"Mar 21"}>
                            <>
                                <a>Justin Lee</a> participated in <a
                                href="invoice.html">"Carrom"</a>
                            </>
                        </StudentActivityElem>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StudentActivity;