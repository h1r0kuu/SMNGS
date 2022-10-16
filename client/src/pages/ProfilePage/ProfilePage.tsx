import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../components/Page/Page";
import Profile from "../../components/Profile/Profile";

const ProfilePage = (): ReactElement => {
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Profile</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Profile"} breadcrumbs={breadCrumbs()}>
            <Profile />
        </Page>
    )
}

export default ProfilePage