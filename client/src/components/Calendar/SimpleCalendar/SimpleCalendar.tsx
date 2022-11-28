import React, {ReactElement} from "react";
import SimpleReactCalendar from "simple-react-calendar"
import SimpleCalendarEvent from "./SimpleCalendarEvent/SimpleCalendarEvent";
import {Card, Col, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const SimpleCalendar = (): ReactElement => {
    return (
        <Col xs={12} lg={12} xl={3} className="d-flex">
            <Card className="flex-fill">
                <CardHeader>
                    <Row className="align-items-center">
                        <Col xl={12}>
                            <Card.Title as={"h5"}>Calendar</Card.Title>
                        </Col>
                    </Row>
                </CardHeader>
                <Card.Body>
                    <SimpleReactCalendar  />
                    <div id="calendar-doctor" className="calendar-container"></div>
                    <div className="calendar-info calendar-info1">
                        <SimpleCalendarEvent start={"09 am"} cardColor={"blue"} title={"Fermentum"} startEnd={"09am - 10pm"}/>
                        <SimpleCalendarEvent start={"10 am"} cardColor={"violet"} title={"Pharetra et"} startEnd={"10am - 11am"}/>
                        <SimpleCalendarEvent start={"11 am"} cardColor={"orange"} title={"Break"} startEnd={"11am - 11.30am"}/>
                        <SimpleCalendarEvent start={"12 pm"} cardColor={"red"} title={"Massa"} startEnd={"11.30am - 12.00pm"}/>
                        <SimpleCalendarEvent start={"9 am"} cardColor={"blue"} title={"Fermentum"} startEnd={"09am - 10pm"}/>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SimpleCalendar