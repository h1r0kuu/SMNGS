import React, {ReactElement} from "react";

const StudentActivity = (): ReactElement => {
    return (
        <div className="col-md-6 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title">Student Activity</h5>
                </div>
                <div className="card-body">
                    <ul className="activity-feed">
                        <li className="feed-item">
                            <div className="feed-date">Apr 13</div>
                            <span className="feed-text"><a>John Doe</a> won 1st place in <a>"Chess"</a></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-date">Mar 21</div>
                            <span className="feed-text"><a>Justin Lee</a> participated in <a
                                href="invoice.html">"Carrom"</a></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-date">Feb 2</div>
                            <span className="feed-text"><a>Justin Lee</a>attended internation conference in <a
                                href="profile.html">"St.John School"</a></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-date">Apr 13</div>
                            <span className="feed-text"><a>John Doe</a> won 1st place in <a>"Chess"</a></span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-date">Mar 21</div>
                            <span className="feed-text"><a>Justin Lee</a> participated in <a
                                href="invoice.html">"Carrom"</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StudentActivity;