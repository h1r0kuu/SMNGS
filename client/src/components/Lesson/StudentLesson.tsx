import React, {FC, ReactElement} from "react";
import {Col} from "react-bootstrap";

interface LessonProps {
    lg: number,
    xl: number
}

const StudentLesson: FC<LessonProps> = ({lg, xl}): ReactElement => {
    return (
        <Col xs={12} lg={lg} xl={xl}>
            <div className="card-body dash-widget1">
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
                            <i className="fas fa-clock"></i> 2.30pm - 3.30pm
                        </li>
                        <li>
                            <i className="fas fa-book-open"></i> 5 Lessons
                        </li>
                        <li>
                            <i className="fas fa-hourglass-end"></i> 60 Minutes
                        </li>
                        <li>
                            <i className="fas fa-clipboard-check"></i> 5 Asignment
                        </li>
                    </ul>
                    <div className="dash-btn">
                        <button type="submit" className="btn btn-info btn-border">Skip</button>
                        <button type="submit" className="btn btn-info">Continue</button>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default StudentLesson;