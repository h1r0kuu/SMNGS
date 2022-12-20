import {BreadcrumbItem, Button, Col} from "react-bootstrap";
import React, {useRef} from "react";
import Page from "../../../../components/Page/Page";
import GroupList from "../../../../components/List/GroupList/GroupList";
import {useFetchGroups} from "../../../../hooks/groups/useFetchGroups";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faPlus} from "@fortawesome/free-solid-svg-icons";
import {GROUPS_ADD} from "../../../../constants/pathConstants";
import {tableToPdf} from "../../../../utils/exportData";

const AdminGroupList = () => {

    const {groups, pagination, isLoading} = useFetchGroups()

    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem active>Group</BreadcrumbItem>
            </>
        )
    }


    const tableRef = useRef<any>(null);

    const onDownload = () => {
        tableToPdf(tableRef, "groups")
    }

    return (
        <Page title={"Groups"} breadcrumbs={breadCrumbs()}>
            <Col sm={12}>
                <Col xs={12} className={"text-right float-right ml-auto mb-4"}>
                    <Button className={"mr-2"} variant={"outline-primary"} onClick={onDownload}>
                        <FontAwesomeIcon icon={faDownload} /> Download
                    </Button>
                    <Button as={"a"} href={GROUPS_ADD}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Col>
            <GroupList groups={groups} pagination={pagination} isLoading={isLoading} reference={tableRef} />
        </Page>

        )
}

export default AdminGroupList