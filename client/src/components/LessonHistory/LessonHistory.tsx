import {FC, ReactElement} from "react";
import LessonHistoryElem from "./LessonHistoryElem/LessonHistoryElem";

interface LessonHistoryProps {
    title: string
}

const LessonHistory: FC<LessonHistoryProps> = ({title}): ReactElement => {
    return (
        <div className="col-12 col-lg-6 col-xl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-body">
                    <div className="teaching-card">
                        <ul className="activity-feed">
                            <LessonHistoryElem date={"Sep 05, 9 am - 10 am"} duration={"60min"} title={"Lorem ipsum dolor"} status={"In Progress"} />
                            <LessonHistoryElem date={"Sep 04, 2 pm - 3 pm"} duration={"70min"} title={"Et dolore magna"} status={"Completed"} />
                            <LessonHistoryElem date={"Sep 02, 1 pm - 2 am"} duration={"80min"} title={"Exercitation ullamco"} status={"Completed"} />
                            <LessonHistoryElem date={"Aug 30, 10 am - 12 pm"} duration={"90min"} title={"Occaecat cupidatat"} status={"Completed"} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonHistory;