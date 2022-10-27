import {FC, ReactElement, useState} from "react";
import {Card, Col, Form, Row} from "react-bootstrap";

interface AddOrEditProps {
    handleSubmit?: (data: any) => void,
    children: ReactElement | ReactElement[]
}

const AddOrEdit: FC<AddOrEditProps> = ({children, handleSubmit}): ReactElement => {

    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(handleSubmit) {
            handleSubmit(e.target)
            setSubmitted(true)
        }
    }

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <Card.Body>
                        <Form noValidate={true} onSubmit={onSubmit} className={submitted ? "was-validated" : ""}>
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