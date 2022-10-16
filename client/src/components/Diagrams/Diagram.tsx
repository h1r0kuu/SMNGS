import React, {FC, ReactElement} from "react";
import {Card, Col, Form, FormGroup, Row} from "react-bootstrap";
import Chart from "react-apexcharts";
import {Props} from "react-apexcharts";
import {ApexOptions} from "apexcharts";

interface DiagramProps {
    title: string,
    type: Props['type'],
    series: ApexOptions['series'],
    options: ApexOptions,

    md: number,
    lg: number
}

const Diagram: FC<DiagramProps> = ({title, type, series, options, md, lg}): ReactElement => {
    return (
        <Col md={md} lg={lg}>
            <Card className={"card-chart"}>
                <Card.Header>
                    <Row className="align-items-center">
                        <Col xs={6}>
                            <Card.Title as={"h5"}>{title}</Card.Title>
                        </Col>
                        <Col xs={6}>
                            <FormGroup className={"mb-0 amount-spent-select text-right"}>
                                <Form.Select className={"form-control-sm"}>
                                    <option>Today</option>
                                    <option>Last Week</option>
                                    <option>Last Month</option>
                                </Form.Select>
                            </FormGroup>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Chart
                        type={type}
                        series={series}
                        options={options}
                    />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Diagram;