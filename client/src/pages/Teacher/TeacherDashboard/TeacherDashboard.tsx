import React, {ReactElement} from "react";
import Page from "../../../components/Page/Page";
import {BreadcrumbItem, Col, Row} from "react-bootstrap";
import InfoCard from "../../../components/Cards/InfoCard/InfoCard";
import {
    faBookOpen,
    faChalkboard, faClock,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

import SimpleCalendar from "../../../components/Calendar/SimpleCalendar/SimpleCalendar";


import {ApexOptions} from "apexcharts";
import UpcomingLessons from "../../../components/UpcommingLessons/UpcomingLessons";
import SemesterProgress from "../../../components/Cards/SemesterProgress/SemesterProgress";
import LessonHistory from "../../../components/LessonHistory/LessonHistory";
import Diagram from "../../../components/Diagrams/Diagram";

const TeacherDashboard = (): ReactElement => {
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
                <BreadcrumbItem active>Teacher Dashboard</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Welcome anus!"} breadcrumbs={breadCrumbs()}>
            <Row>
                <InfoCard title={"Total Classes"} value={"04/06"} icon={faChalkboard} bg={"three"}/>
                <InfoCard title={"Total Students"} value={"40/60"} icon={faUserGraduate} bg={"four"}/>
                <InfoCard title={"Total Lessons"} value={"30/50"} icon={faBookOpen} bg={"one"}/>
                <InfoCard title={"Total Hours"} value={"15/20"} icon={faClock} bg={"two"}/>
            </Row>
            <Row>
                <Col xs={12} lg={12} xl={9}>
                    <Row>
                        <UpcomingLessons/>
                        <SemesterProgress/>
                    </Row>
                    <Row>
                        <Diagram title={"Teaching Activity"} type={"area"} series={seriesTS} options={optionTS} md={12} lg={8} />
                        <LessonHistory title={"Teaching History"}/>
                    </Row>
                </Col>
                <SimpleCalendar />
            </Row>
        </Page>
    )
}

export default TeacherDashboard;