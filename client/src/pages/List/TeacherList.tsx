import React, {ReactElement} from "react";
import List from "../../components/List/List";
import Page from "../../components/Page/Page";
import {BreadcrumbItem} from "react-bootstrap";

const TeacherList = (): ReactElement => {

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Teachers</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Teachers"} breadcrumbs={breadCrumbs()}>
            <List>
            </List>
        </Page>
    )
}

export default TeacherList