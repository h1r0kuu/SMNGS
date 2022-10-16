import {FC, ReactElement} from "react";
import {Card, Col, Form, Row} from "react-bootstrap";

interface AddOrEditProps {
    children: ReactElement | ReactElement[]
}

const AddOrEdit: FC<AddOrEditProps> = ({children}): ReactElement => {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Row>
                                {children}
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default AddOrEdit