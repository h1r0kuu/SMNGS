import React, {FC, ReactElement} from "react";
import {Card, Col, Form, FormGroup} from "react-bootstrap";
import Chart from "react-apexcharts";
import ReactApexChart, {Props} from "react-apexcharts";
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
                    <div className="row align-items-center">
                        <Col xs={6}>
                            <h5 className="card-title">{title}</h5>
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
                    </div>
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