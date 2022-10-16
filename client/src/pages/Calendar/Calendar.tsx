import React, {ReactElement} from "react";
import Page from "../../components/Page/Page";
import {BreadcrumbItem, Card, Col, Row} from "react-bootstrap";
import Fullcalendar from "../../components/Calendar/Fullcalendar/Fullcalendar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Calendar = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Calendar</BreadcrumbItem>
                <div className="col-auto text-right float-right ml-auto">
                    <Link to={"#"} className="btn btn-primary"><FontAwesomeIcon icon={faPlus}/></Link>
                </div>
            </>
        )
    }

    return (
        <Page title={"Calendar"} breadcrumbs={breadCrumbs()}>
            <Row>
                <Col lg={12} md={12}>
                    <Card>
                        <Card.Body>
                            <Fullcalendar/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Page>
    )
}

export default Calendar