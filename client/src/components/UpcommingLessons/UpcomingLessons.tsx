import {ReactElement} from "react";
import {Card, Col, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const UpcomingLessons = (): ReactElement => {
    return (
        <Col xs={12} lg={8} xl={8} className={"d-flex"}>\
            <Card className={"flex-fill"}>
                <CardHeader>
                    <Row className={"align-items-center"}>
                        <Col xs={6}>
                            <Card.Title as={"h5"}>Upcoming Lesson</Card.Title>
                        </Col>
                        <Col xs={6}>
                            <span className="float-right view-link">
                                <a href="#">View All Courses</a>
                            </span>
                        </Col>
                    </Row>
                </CardHeader>
                <div className="pt-3 pb-3">
                    <div className="table-responsive lesson">
                        <table className="table table-center">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 4, Tuesday</b>
                                        <p>2.30pm - 3.30pm (60min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 30</b>
                                        <p>3.1 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 5, Wednesday</b>
                                        <p>3.00pm - 4.30pm (90min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 31</b>
                                        <p>3.2 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="date">
                                        <b>Aug 6, Thursday</b>
                                        <p>11.00am - 12.00pm (20min)</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="date">
                                        <b>Lessons 32</b>
                                        <p>3.3 Ipsuum dolor</p>
                                    </div>
                                </td>
                                <td>
                                    <a href="#">Confirmed</a>
                                </td>
                                <td>
                                    <button type="submit" className="btn btn-info">Reschedule</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default UpcomingLessons;