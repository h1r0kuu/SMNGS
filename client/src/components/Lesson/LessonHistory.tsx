import {FC, ReactElement} from "react";

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
                            <li className="feed-item">
                                <div className="feed-date1">Sep 05, 9 am - 10 am (60min)</div>
                                <span className="feed-text1"><a>Lorem ipsum dolor</a></span>
                                <p><span>In Progress</span></p>
                            </li>
                            <li className="feed-item">
                                <div className="feed-date1">Sep 04, 2 pm - 3 pm (70min)</div>
                                <span className="feed-text1"><a>Et dolore magna</a></span>
                                <p>Completed</p>
                            </li>
                            <li className="feed-item">
                                <div className="feed-date1">Sep 02, 1 pm - 2 am (80min)</div>
                                <span className="feed-text1"><a>Exercitation ullamco</a></span>
                                <p>Completed</p>
                            </li>
                            <li className="feed-item">
                                <div className="feed-date1">Aug 30, 10 am - 12 pm (90min)</div>
                                <span className="feed-text1"><a>Occaecat cupidatat</a></span>
                                <p>Completed</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LessonHistory;