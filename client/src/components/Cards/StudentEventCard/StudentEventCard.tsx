import React, {FC, ReactElement} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faClipboardCheck, faClock, faHourglassEnd} from "@fortawesome/free-solid-svg-icons";

interface LessonProps {
    lg: number,
    xl: number
}

const StudentEventCard: FC<LessonProps> = ({lg, xl}): ReactElement => {
    return (
        <Col xs={12} lg={lg} xl={xl}>
            <Card.Body className="dash-widget1">
                <div className="circle-bar circle-bar2">
                    <div className="circle-graph2" data-percent="20">
                        <b>20%</b>
                    </div>
                    <h6>Lesson Learned</h6>
                    <h4>10 <span>/ 50</span>
                    </h4>
                </div>
                <div className="dash-details">
                    <h4>Facilisi etiam</h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faClock} /> 2.30pm - 3.30pm
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBookOpen} /> 5 Lessons
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHourglassEnd} /> 60 Minutes
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClipboardCheck} /> 5 Asignment
                        </li>
                    </ul>
                    <div className="dash-btn">
                        <Button variant={"info btn-border"}>Skip</Button>
                        <Button variant={"info"}>Continue</Button>
                    </div>
                </div>
            </Card.Body>
        </Col>
    )
}

export default StudentEventCard;