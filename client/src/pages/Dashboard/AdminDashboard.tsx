import React, {ReactElement} from "react";
import {BreadcrumbItem, Row} from "react-bootstrap";
import InfoCard from "../../components/Cards/InfoCard/InfoCard";
import {faBuilding, faCrown, faFileInvoiceDollar, faUserGraduate} from "@fortawesome/free-solid-svg-icons";

import RevenueDiagram from "../../components/Diagrams/RevenueDiagram/RevenueDiagram";
import NumOfStudents from "../../components/Diagrams/NumOfStudents/NumOfStudents";
import StudentActivity from "../../components/Student/StudentActivity/StudentActivity";
import StarStudents from "../../components/Student/StarStudents/StarStudents";
import Page from "../../components/Page/Page";

const AdminDashboard = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem active>Dashboard</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Welcome Admin!"} breadcrumbs={breadCrumbs()}>
            <Row>
                <InfoCard title={"Students"} value={"50000"} icon={faUserGraduate} bg={"one"}/>
                <InfoCard title={"Awards"} value={"50+"} icon={faCrown} bg={"two"}/>
                <InfoCard title={"Department"} value={"30+"} icon={faBuilding} bg={"three"}/>
                <InfoCard title={"Revenue"} value={"$505"} icon={faFileInvoiceDollar} bg={"four"}/>
            </Row>
            <Row>
                <RevenueDiagram/>
                <NumOfStudents/>
            </Row>
            <Row>
                <StarStudents/>
                <StudentActivity/>
            </Row>
            <Row>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card flex-fill fb sm-box">
                        <i className="fab fa-facebook"></i>
                        <h6>50,095</h6>
                        <p>Likes</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card flex-fill twitter sm-box">
                        <i className="fab fa-twitter"></i>
                        <h6>48,596</h6>
                        <p>Follows</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card flex-fill insta sm-box">
                        <i className="fab fa-instagram"></i>
                        <h6>52,085</h6>
                        <p>Follows</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card flex-fill linkedin sm-box">
                        <i className="fab fa-linkedin-in"></i>
                        <h6>69,050</h6>
                        <p>Follows</p>
                    </div>
                </div>
            </Row>
        </Page>
    )
}

export default AdminDashboard;