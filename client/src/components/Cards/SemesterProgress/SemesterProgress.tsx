import {ReactElement} from "react";
import {Card, Col, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const SemesterProgress = (): ReactElement => {
    return (
        <Col xs={12} lg={4} xl={4} className="d-flex">
            <Card className="flex-fill">
                <CardHeader>
                    <Row className="row align-items-center">
                        <Col xl={12} className="col-12">
                            <Card.Title as={"h5"} className="card-title">Semester Progress</Card.Title>
                        </Col>
                    </Row>
                </CardHeader>
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
            </Card>
        </Col>
    )
}

export default SemesterProgress;