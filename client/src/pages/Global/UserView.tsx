import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../components/Page/Page";
import User from "../../components/View/User/User";

const UserView = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>User detail</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"User details"} breadcrumbs={breadCrumbs()}>
            <User />
        </Page>
    )
}

export default UserView;