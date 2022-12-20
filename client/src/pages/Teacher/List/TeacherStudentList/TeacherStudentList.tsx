import {useParams} from "react-router-dom";
import {useFetchGroupStudents} from "../../../../hooks/groups/useFetchGroupStudents";
import {BreadcrumbItem} from "react-bootstrap";
import React from "react";
import StudentList from "../../../../components/List/StudentList/StudentList";
import Page from "../../../../components/Page/Page";

const TeacherStudentList = () => {
    const {id} = useParams()

    const { students, pagination, isLoading } = useFetchGroupStudents(Number(id))
    const breadCrumbs = () => {
        return (
            <>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>
                <BreadcrumbItem>Group</BreadcrumbItem>
                <BreadcrumbItem active>Students</BreadcrumbItem>
            </>
        )
    }
    return (
        <Page title={"Students"} breadcrumbs={breadCrumbs()}>
            <StudentList students={students} pagination={pagination} isLoading={isLoading}/>
        </Page>

        )
}

export default TeacherStudentList