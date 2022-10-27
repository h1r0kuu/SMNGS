import React, {ReactElement} from "react";
import Page from "../../components/Page/Page";
import List from "../../components/List/List";
import {BreadcrumbItem} from "react-bootstrap";

const GroupList = (): ReactElement => {

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Group</BreadcrumbItem>
            </>
        )
    }

    return (
        <Page title={"Groups"} breadcrumbs={breadCrumbs()}>
            {/*<List>*/}
            {/*</List>*/}
        </Page>
    )
}

export default GroupList