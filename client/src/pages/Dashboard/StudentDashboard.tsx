import React, {ReactElement} from "react";
import Page from "../../components/Page/Page";
import {BreadcrumbItem, Row} from "react-bootstrap";
import DataCard from "../../components/DataCard/DataCard";
import {
    faBookOpen,
    faBuilding, faClipboardCheck, faClipboardList,
    faCrown,
    faFileAlt,
    faFileInvoiceDollar,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import StudentLesson from "../../components/Lesson/StudentLesson";
import SimpleReactCalendar from 'simple-react-calendar';
import Calendar from 'react-calendar';
import SimpleCalendar from "simple-react-calendar"
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import LessonHistory from "../../components/Lesson/LessonHistory";
import Diagram from "../../components/Diagrams/Diagram";

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
                <DataCard title={"All Courses"} value={"04/06"} icon={faBookOpen} bg={"three"}/>
                <DataCard title={"All Projects"} value={"40/60"} icon={faFileAlt} bg={"four"}/>
                <DataCard title={"Test Attended"} value={"30/50"} icon={faClipboardList} bg={"one"}/>
                <DataCard title={"Test Passed"} value={"15/20"} icon={faClipboardCheck} bg={"two"}/>
            </Row>
            <div className="row">
                <div className="col-12 col-lg-12 col-xl-9">
                    <div className="card flex-fill">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h5 className="card-title">Today’s Lesson</h5>
                                </div>
                                <div className="col-6">
                      <span className="float-right view-link">
                        <a href="src/pages/Dashboard/StudentDashboard#">View All Courses</a>
                      </span>
                                </div>
                            </div>
                        </div>
                        <div className="dash-circle">
                            <div className="row">
                                <StudentLesson xl={6} lg={6}/>
                                <StudentLesson xl={6} lg={6}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Diagram title={"Learning Activity"} type={"area"} series={seriesTS} options={optionTS} md={12} lg={8}/>
                        <LessonHistory title={"Learning History"}/>
                    </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-3 d-flex">
                    <div className="card flex-fill">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <h5 className="card-title">Calendar</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <SimpleCalendar  />
                            <div id="calendar-doctor" className="calendar-container"></div>
                            <div className="calendar-info calendar-info1">
                                <div className="calendar-details">
                                    <p>09 am</p>
                                    <h6 className="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span>
                                    </h6>
                                </div>
                                <div className="calendar-details">
                                    <p>10 am</p>
                                    <h6 className="calendar-violet d-flex justify-content-between align-items-center">Pharetra et <span>10am - 11am</span>
                                    </h6>
                                </div>
                                <div className="calendar-details">
                                    <p>11 am</p>
                                    <h6 className="calendar-red d-flex justify-content-between align-items-center">Break <span>11am - 11.30am</span>
                                    </h6>
                                </div>
                                <div className="calendar-details">
                                    <p>12 pm</p>
                                    <h6 className="calendar-orange d-flex justify-content-between align-items-center">Massa <span>11.30am - 12.00pm</span>
                                    </h6>
                                </div>
                                <div className="calendar-details">
                                    <p>09 am</p>
                                    <h6 className="calendar-blue d-flex justify-content-between align-items-center">Fermentum <span>09am - 10pm</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default StudentDashboard;