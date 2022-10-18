import {FC, ReactElement} from "react";
import {Card, Col, Form, Row} from "react-bootstrap";

interface AddOrEditProps {
    handleSubmit?: (data: any) => void,
    children: ReactElement | ReactElement[]
}

const AddOrEdit: FC<AddOrEditProps> = ({children, handleSubmit}): ReactElement => {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
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