import {ReactElement} from "react";

const TeacherLesson = (): ReactElement => {
    return (
        <div className="col-12 col-lg-4 col-xl-4 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h5 className="card-title">Semester Progress</h5>
                        </div>
                    </div>
                </div>
                <div className="dash-widget">
                    <div className="circle-bar circle-bar1">
                        <div className="circle-graph1" data-percent="50">
                            <canvas width="500" height="500" style={{height: "400px", width: "400px"}}></canvas>
                            <b>50%</b>
                        </div>
                    </div>
                    <div className="dash-info">
                        <h6>Lesson Progressed</h6>
                        <h4>30 <span>/ 60</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLesson;