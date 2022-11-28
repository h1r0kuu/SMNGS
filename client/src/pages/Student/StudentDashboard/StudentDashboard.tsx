import React, {ReactElement} from "react";
import Page from "../../../components/Page/Page";
import {BreadcrumbItem, Card, Col, Row} from "react-bootstrap";
import InfoCard from "../../../components/Cards/InfoCard/InfoCard";
import {
    faBookOpen,
    faClipboardCheck, faClipboardList,
    faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import StudentEventCard from "../../../components/Cards/StudentEventCard/StudentEventCard";
import {ApexOptions} from "apexcharts";
import LessonHistory from "../../../components/LessonHistory/LessonHistory";
import Diagram from "../../../components/Diagrams/Diagram";
import SimpleCalendar from "../../../components/Calendar/SimpleCalendar/SimpleCalendar";
import CardHeader from "react-bootstrap/CardHeader";

const StudentDashboard = (): ReactElement => {
    const seriesTS = [
        {
            name: "Teachers",
            data: [45, 60, 75, 51, 42, 42, 30]
        },
        {
            name: "Students",
            color: '#FFBC53',
            data: [24, 48, 56, 32, 34, 52, 25]
        }
    ]


    const optionTS: ApexOptions = {
        chart: {
            height: 350,
            toolbar: {
                show: true
            },
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        }
    }
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Student Dashboard</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Welcome daun!"} breadcrumbs={breadCrumbs()}>
            <Row>
                <InfoCard title={"All Courses"} value={"04/06"} icon={faBookOpen} bg={"three"}/>
                <InfoCard title={"All Projects"} value={"40/60"} icon={faFileAlt} bg={"four"}/>
                <InfoCard title={"Test Attended"} value={"30/50"} icon={faClipboardList} bg={"one"}/>
                <InfoCard title={"Test Passed"} value={"15/20"} icon={faClipboardCheck} bg={"two"}/>
            </Row>
            <Row>
                <Col xs={12} lg={12} xl={9}>
                    <Card className="flex-fill">
                        <CardHeader>
                            <Row className="align-items-center">
                                <Col xs={6}>
                                    <h5 className="card-title">Today’s Lesson</h5>
                                </Col>
                                <Col xs={6}>
                                  <span className="float-right view-link">
                                    <a href="src/pages/Dashboard/StudentDashboard#">View All Courses</a>
                                  </span>
                                </Col>
                            </Row>
                        </CardHeader>
                        <div className="dash-circle">
                            <Row>
                                <StudentEventCard xl={6} lg={6}/>
                                <StudentEventCard xl={6} lg={6}/>
                            </Row>
                        </div>
                    </Card>
                    <Row>
                        <Diagram title={"Learning Activity"} type={"area"} series={seriesTS} options={optionTS} md={12} lg={8}/>
                        <LessonHistory title={"Learning History"}/>
                    </Row>
                </Col>
                <SimpleCalendar />
            </Row>
        </Page>
    )
}

export default StudentDashboard;