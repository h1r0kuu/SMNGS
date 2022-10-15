import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import List from "../../../components/List/List";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

const StudentList = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
            <List>
                <List.Header title={"ID"}/>
                <List.Header title={"Name"}/>
                <List.Header title={"Class"}/>
                <List.Header title={"Dob"}/>
                <List.Header title={"Parent Name"}/>
                <List.Header title={"Mobile Number"}/>
                <List.Header title={"Address"}/>
                <List.Header title={"Action"}/>
                <List.BodyTr>
                    <List.BodyElem>PRE1234</List.BodyElem>
                    <List.BodyElem>Nathan Humphries</List.BodyElem>
                    <List.BodyElem>10b</List.BodyElem>
                    <List.BodyElem>26 Apr 1994</List.BodyElem>
                    <List.BodyElem>Stephen Marley</List.BodyElem>
                    <List.BodyElem>077 3499 9959</List.BodyElem>
                    <List.BodyElem>86 Lamphey Road, Thelnetham</List.BodyElem>
                    <List.BodyElem className={"text-right"}>
                        <div className="actions">
                            <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <FontAwesomeIcon icon={faPen}/>
                            </a>
                            <a href="#" className="btn btn-sm bg-danger-light">
                                <FontAwesomeIcon icon={faTrash}/>
                            </a>
                        </div>
                    </List.BodyElem>
                </List.BodyTr>
                <List.BodyTr>
                    <List.BodyElem>PRE1234</List.BodyElem>
                    <List.BodyElem>Nathan Humphries</List.BodyElem>
                    <List.BodyElem>10b</List.BodyElem>
                    <List.BodyElem>26 Apr 1994</List.BodyElem>
                    <List.BodyElem>Stephen Marley</List.BodyElem>
                    <List.BodyElem>077 3499 9959</List.BodyElem>
                    <List.BodyElem>86 Lamphey Road, Thelnetham</List.BodyElem>
                    <List.BodyElem className={"text-right"}>
                        <div className="actions">
                            <a href="edit-student.html" className="btn btn-sm bg-success-light mr-2">
                                <FontAwesomeIcon icon={faPen}/>
                            </a>
                            <a href="#" className="btn btn-sm bg-danger-light">
                                <FontAwesomeIcon icon={faTrash}/>
                            </a>
                        </div>
                    </List.BodyElem>
                </List.BodyTr>
            </List>
        </Page>
    )
}

export default StudentList;