import {FC, ReactElement} from "react";
import LessonHistoryElem from "./LessonHistoryElem/LessonHistoryElem";
import {Card, Col} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

interface LessonHistoryProps {
    title: string
}

const LessonHistory: FC<LessonHistoryProps> = ({title}): ReactElement => {
    return (
        <Col xs={12} lg={6} xl={4} className={"d-flex"}>
            <Card className={"flex-fill"}>
                <CardHeader>
                    <Card.Title as={"h5"}>{title}</Card.Title>
                </CardHeader>
                <Card.Body>
                    <div className="teaching-card">
                        <ul className="activity-feed">
                            <LessonHistoryElem date={"Sep 05, 9 am - 10 am"} duration={"60min"} title={"Lorem ipsum dolor"} status={"In Progress"} />
                            <LessonHistoryElem date={"Sep 04, 2 pm - 3 pm"} duration={"70min"} title={"Et dolore magna"} status={"Completed"} />
                            <LessonHistoryElem date={"Sep 02, 1 pm - 2 am"} duration={"80min"} title={"Exercitation ullamco"} status={"Completed"} />
                            <LessonHistoryElem date={"Aug 30, 10 am - 12 pm"} duration={"90min"} title={"Occaecat cupidatat"} status={"Completed"} />
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default LessonHistory;