import {ReactElement} from "react";
import {
    Button,
    Card,
    Col,
    Form,
    FormGroup,
    FormLabel, Nav, NavItem,
    NavLink,
    Row,
    TabContainer, TabContent,
    TabPane
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";

const Profile = (): ReactElement => {
    return (
        <Row>
            <Col md={12}>
                <div className="profile-header">
                    <Row className="align-items-center">
                        <div className="col-auto profile-image">
                            <a href="#">
                                <img className="rounded-circle" alt="User Image"
                                     src="assets/img/profiles/avatar-02.jpg"/>
                            </a>
                        </div>
                        <div className="col ml-md-n2 profile-user-info">
                            <h4 className="user-name mb-0">John Doe</h4>
                            <h6 className="text-muted">UI/UX Design Team</h6>
                            <div className="user-Location"><i className="fas fa-map-marker-alt"></i> Florida, United
                                States
                            </div>
                            <div className="about-text">Lorem ipsum dolor sit amet.</div>
                        </div>
                        <div className="col-auto profile-btn">
                            <a href="#" className="btn btn-primary">
                                Edit
                            </a>
                        </div>
                    </Row>
                </div>
                <TabContainer defaultActiveKey={"about"}>
                    <div className="profile-menu">
                        <Nav className={"nav-tabs nav-tabs-solid"}>
                            <NavItem as={"li"}>
                                <NavLink eventKey={"about"}>About</NavLink>
                            </NavItem>
                            <NavItem as={"li"}>
                                <NavLink eventKey={"password"}>Password</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <TabContent className="profile-tab-cont">
                        <TabPane eventKey={"about"}>
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
                                                <Col as={"p"} sm={9}>John Doe</Col>
                                            </Row>
                                            <Row>
                                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of
                                                    Birth</p>
                                                <p className="col-sm-9">24 Jul 1983</p>
                                            </Row>
                                            <Row>
                                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID</p>
                                                <p className="col-sm-9"><a
                                                    href="https://preschool.dreamguystech.com/cdn-cgi/l/email-protection"
                                                    className="__cf_email__"
                                                    data-cfemail="711b1e191f151e14311409101c011d145f121e1c">[email&#160;protected]</a>
                                                </p>
                                            </Row>
                                            <Row>
                                                <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile</p>
                                                <p className="col-sm-9">305-310-5857</p>
                                            </Row>
                                            <Row>
                                                <p className="col-sm-3 text-muted text-sm-right mb-0">Address</p>
                                                <p className="col-sm-9 mb-0">4663 Agriculture Lane,<br/>
                                                    Miami,<br/>
                                                    Florida - 33165,<br/>
                                                    United States.
                                                </p>
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
                                    <Card>
                                        <Card.Body>
                                            <Card.Title as={"h5"} className="d-flex justify-content-between">
                                                <span>Skills </span>
                                                    <a className="edit-link" href="#"><FontAwesomeIcon icon={faEdit} /> Edit</a>
                                            </Card.Title>
                                            <div className="skill-tags">
                                                <span>Html5</span>
                                                <span>CSS3</span>
                                                <span>WordPress</span>
                                                <span>Javascript</span>
                                                <span>Android</span>
                                                <span>iOS</span>
                                                <span>Angular</span>
                                                <span>PHP</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane eventKey={"password"}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Change Password</Card.Title>
                                    <Row>
                                        <Col md={10} lg={6}>
                                            <Form>
                                                <FormGroup className={"form-group"}>
                                                    <FormLabel>Old Password</FormLabel>
                                                    <Form.Control type={"password"}></Form.Control>
                                                </FormGroup>
                                                <FormGroup className={"form-group"}>
                                                    <FormLabel>New Password</FormLabel>
                                                    <Form.Control type={"password"}></Form.Control>
                                                </FormGroup>
                                                <FormGroup className={"form-group"}>
                                                    <FormLabel>Confirm Password</FormLabel>
                                                    <Form.Control type={"password"}></Form.Control>
                                                </FormGroup>
                                                <Button type={"submit"}>Save Changes</Button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </TabPane>
                    </TabContent>
                </TabContainer>
            </Col>
        </Row>
    )
}

export default Profile