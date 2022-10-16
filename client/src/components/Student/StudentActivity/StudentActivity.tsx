import React, {ReactElement} from "react";
import StudentActivityElem from "./StudentActivityElem/StudentActivityElem";

const StudentActivity = (): ReactElement => {
    return (
        <div className="col-md-6 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title">Student Activity</h5>
                </div>
                <div className="card-body">
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
                </div>
            </div>
        </div>
    )
}

export default StudentActivity;