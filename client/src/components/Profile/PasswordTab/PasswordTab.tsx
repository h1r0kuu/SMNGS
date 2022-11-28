import {FC, ReactElement} from "react";
import {Button, Card, Col, Form, FormGroup, FormLabel, Row, TabPane} from "react-bootstrap";

interface PasswordTabProps {
    eventKey: string
}

const PasswordTab: FC<PasswordTabProps> = ({ eventKey }): ReactElement => {
    return (
        <TabPane eventKey={eventKey}>
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
    )
}

export default PasswordTab