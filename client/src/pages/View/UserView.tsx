import React, {ReactElement} from "react";
import {BreadcrumbItem} from "react-bootstrap";
import Page from "../../components/Page/Page";
import User from "../../components/View/User/User";
import {useParams} from "react-router-dom";
import {useFetchUserByUsername} from "../../hooks/users/useFetchUserByUsername";
import {UserResponse} from "../../types/user";

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