import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../../components/Page/Page";
import Profile from "../../../components/Profile/Profile";
import {useFetchUserByUsername} from "../../../hooks/users/useFetchUserByUsername";

const ProfilePage = (): ReactElement => {

    const {user} = useFetchUserByUsername("h1r0ku")

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
            <>
            {user &&
                <Profile user={user}/>
            }
            </>
        </Page>
    )
}

export default ProfilePage