import React, {ReactElement} from "react";
import {Button, Card, Col, Form, FormGroup, FormLabel, Row} from "react-bootstrap";

const User = (): ReactElement => {

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col md={12}>
                        <div className="about-info">
                            <h4>About Me</h4>
                            <div className="media mt-3">
                                <img src="assets/img/user.jpg" className="mr-3" alt="..." />
                                    <div className="media-body">
                                        <ul>
                                            <li>
                                                <span className="title-span">Full Name : </span>
                                                <span className="info-span">Daisy Parks</span>
                                            </li>
                                            <li>
                                                <span className="title-span">Department : </span>
                                                <span className="info-span">Computer Science</span>
                                            </li>
                                            <li>
                                                <span className="title-span">Mobile : </span>
                                                <span className="info-span">+91 89657 48512</span>
                                            </li>
                                            <li>
                                                <span className="title-span">Email : </span>
                                                <span className="info-span">daisy@gmail.com</span>
                                            </li>
                                            <li>
                                                <span className="title-span">Gender : </span>
                                                <span className="info-span">Male</span>
                                            </li>
                                            <li>
                                                <span className="title-span">DOB : </span>
                                                <span className="info-span">22 Apr 1995</span>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <Row className="mt-3">
                                <Col md={12}>
                                    <p>Hello I am Daisy Parks. Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry, simply dummy text of the printing and typesetting
                                        industry.</p>
                                </Col>
                            </Row>
                            <Row className="follow-sec">
                                <Col md={4} className="mb-3">
                                    <div className="blue-box">
                                        <h3>2850</h3>
                                        <p>Followers</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-3">
                                    <div className="blue-box">
                                        <h3>2050</h3>
                                        <p>Following</p>
                                    </div>
                                </Col>
                                <Col md={4} className="mb-3">
                                    <div className="blue-box">
                                        <h3>2950</h3>
                                        <p>Friends</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={12}>
                                    <h5>Permanent Address</h5>
                                    <p>480, Estern Avenue, Courtage area, New York</p>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={12}>
                                    <h5>Present Address</h5>
                                    <p>480, Estern Avenue, Courtage area, New York</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={12}>
                        <div className="skill-info">
                            <h4>Skills</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, simply dummy
                                text of the printing and typesetting industry</p>
                            <ul>
                                <li>
                                    <label>Lorem Ipsum is simply</label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role={"progressbar"}
                                             aria-valuemin={0}
                                             aria-valuemax={100} style={{width: "50%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <label>Lorem Ipsum is simply</label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role={"progressbar"}
                                             aria-valuemin={0}
                                             aria-valuemax={100} style={{width: "75%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <label>Lorem Ipsum is simply</label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role={"progressbar"}
                                             aria-valuemin={0}
                                             aria-valuemax={100} style={{width: "45%"}}></div>
                                    </div>
                                </li>
                                <li>
                                    <label>Lorem Ipsum is simply</label>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-failed" role={"progressbar"}
                                             aria-valuemin={0}
                                             aria-valuemax={100} style={{width: "99%"}}></div>
                                    </div>
                                </li>
                            </ul>
                            <Row className="mt-3">
                                <Col md={12}>
                                    <h5>Education</h5>
                                    <p className="mt-3">Secondary Schooling at xyz school of secondary education,
                                        Mumbai.</p>
                                    <p>Higher Secondary Schooling at xyz school of higher secondary education,
                                        Mumbai.</p>
                                    <p>Bachelor of Science at Abc College of Art and Science, Chennai.</p>
                                    <p>Master of Science at Cdm College of Engineering and Technology, Pune.</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={12}>
                                    <h5>Certificates</h5>
                                    <p className="mt-3">1st Prise in Running Competition.</p>
                                    <p>Lorem Ipsum is simply dummy text.</p>
                                    <p>Won overall star student in higher secondary education.</p>
                                    <p>Lorem Ipsum is simply dummy text.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={12}>
                        <div className="skill-info">
                            <h4>Settings</h4>
                            <form>
                                <Row className="mt-3">
                                    <Col xs={12} sm={6}>
                                        <FormGroup className={"form-group"}>
                                            <FormLabel>Username</FormLabel>
                                            <Form.Control type={"text"}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <FormGroup className={"form-group"}>
                                            <FormLabel>Current Password</FormLabel>
                                            <Form.Control type={"password"}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <FormGroup className={"form-group"}>
                                            <FormLabel>New Password</FormLabel>
                                            <Form.Control type={"password"}/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <Button type={"submit"}>Submit</Button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default User;