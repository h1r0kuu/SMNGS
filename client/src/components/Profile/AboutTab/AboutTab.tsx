import {FC, ReactElement} from "react";
import {Button, Card, Col, Row, TabPane} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";
import {UserResponse} from "../../../types/user";

interface AboutTabProps {
    eventKey: string,
    user: UserResponse
}

const AboutTab: FC<AboutTabProps> = ({ eventKey, user }): ReactElement => {
    return (
        <TabPane eventKey={eventKey}>
            <Row>
                <Col lg={9}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <span>Personal Details</span>
                                <a className="edit-link" data-toggle="modal"
                                   href="#edit_personal_details"><FontAwesomeIcon icon={faEdit} /> Edit</a>
                            </Card.Title>
                            <Row>
                                <Col as={"p"} sm={3} className={"text-muted text-sm-right mb-0 mb-sm-3"}>Name</Col>
                                <Col as={"p"} sm={9}>{user.firstName} {user.lastName}</Col>
                            </Row>
                            <Row>
                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of
                                    Birth</p>
                                <p className="col-sm-9"></p>
                            </Row>
                            <Row>
                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                                <p className="col-sm-9"><a
                                    // href="https://preschool.dreamguystech.com/cdn-cgi/l/email-protection"
                                    // className="__cf_email__"
                                    // data-cfemail="711b1e191f151e14311409101c011d145f121e1c"
                                >{user.email}</a>
                                </p>
                            </Row>
                            <Row>
                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                                <p className="col-sm-9">{user.phoneNumber}</p>
                            </Row>
                            <Row>
                                <p className="col-sm-3 text-muted text-sm-right mb-0">Address</p>
                                <p className="col-sm-9 mb-0"></p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title as={"h5"} className="d-flex justify-content-between">
                                <span>Account Status</span>
                                <a className="edit-link" href="#"><FontAwesomeIcon icon={faEdit} /> Edit</a>
                            </Card.Title>
                            <Button className="btn-success" type="button">
                                <FontAwesomeIcon icon={faCheck} /> Active
                            </Button>
                        </Card.Body>
                    </Card>
                    {/*<Card>*/}
                    {/*    <Card.Body>*/}
                    {/*        <Card.Title as={"h5"} className="d-flex justify-content-between">*/}
                    {/*            <span>Skills </span>*/}
                    {/*                <a className="edit-link" href="#"><FontAwesomeIcon icon={faEdit} /> Edit</a>*/}
                    {/*        </Card.Title>*/}
                    {/*        <div className="skill-tags">*/}
                    {/*            <span>Html5</span>*/}
                    {/*            <span>CSS3</span>*/}
                    {/*            <span>WordPress</span>*/}
                    {/*            <span>Javascript</span>*/}
                    {/*            <span>Android</span>*/}
                    {/*            <span>iOS</span>*/}
                    {/*            <span>Angular</span>*/}
                    {/*            <span>PHP</span>*/}
                    {/*        </div>*/}
                    {/*    </Card.Body>*/}
                    {/*</Card>*/}
                </Col>
            </Row>
        </TabPane>
    )
}

export default AboutTab