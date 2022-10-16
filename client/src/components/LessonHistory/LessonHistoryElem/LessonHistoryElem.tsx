import {FC, ReactElement} from "react";

interface LessonHistoryElemProps {
    date: string,
    duration: string,
    title: string,
    status: string
}

const LessonHistoryElem: FC<LessonHistoryElemProps> = ({date, duration, title, status}): ReactElement => {
    return (
        <li className="feed-item">
            <div className="feed-date1">{date} ({duration})</div>
            <span className="feed-text1"><a>{title}</a></span>
            {status === "In Progress" ?
                <p><span>In Progress</span></p>
                :
                <p>Completed</p>
            }
        </li>
    )
}

export default LessonHistoryElem